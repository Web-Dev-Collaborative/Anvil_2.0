const initialState = {
  id: null,
  email: null,
  username: null,
  folders: [],
};

const SET_USER = "user/setUser";
const REMOVE_USER = "user/removeUser";
const CREATE_FOLDER = "user/createFolder";

const setUser = (user) => ({
  type: SET_USER,
  user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

const createFolder = (folder) => ({
  type: CREATE_FOLDER,
  folder,
});

export const signup = ({ username, email, password }) => async (dispatch) => {
  const response = await fetch("/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, email, password }),
  });

  const parsedResponse = await response.json();
  dispatch(setUser(parsedResponse));
  return parsedResponse;
};

export const login = ({ email, password }) => async (dispatch) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });

  const parsedResponse = await response.json();
  dispatch(setUser(parsedResponse));
  return parsedResponse;
};

export const restoreUser = () => async (dispatch) => {
  const response = await fetch("/api/auth/");
  const parsedResponse = await response.json();
  dispatch(setUser(parsedResponse));
  return parsedResponse;
};

export const logout = () => async (dispatch) => {
  const response = await fetch("/api/auth/logout");
  dispatch(removeUser());
  return response;
};

export const createUserFolder = ({ name, userId, categoryId }) => async (
  dispatch
) => {
  const response = await fetch("/api/folder", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      user_id: userId,
      category_id: categoryId,
    }),
  });

  const parsedResponse = await response.json();
  dispatch(createFolder(parsedResponse));
  return parsedResponse;
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const { id, email, username, folders } = action.user;
      const saveUserInfo = { ...state, id, email, username, folders };
      return saveUserInfo;
    case REMOVE_USER:
      const removeUserInfo = { ...state, initialState };
      return removeUserInfo;
    case CREATE_FOLDER:
      const addUserFolder = {
        ...state,
        folders: [...state.folders, action.folder],
      };
      return addUserFolder;
    default:
      return state;
  }
};

export default userReducer;
