const initialState = {
  id: null,
  email: null,
  username: null,
  folders: [],
  selectedFolder: null,
};

const SET_USER = "user/setUser";
const REMOVE_USER = "user/removeUser";
const GET_FOLDER = "user/getFolder";
const CREATE_FOLDER = "user/createFolder";
const UPDATE_FOLDER = "user/updateFolder";

const setUser = (user) => ({
  type: SET_USER,
  user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

const getFolder = (folder) => ({
  type: GET_FOLDER,
  folder,
});

const updateFolder = (newFolderList) => ({
  type: UPDATE_FOLDER,
  newFolderList,
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
    body: JSON.stringify({
      username: username,
      email: email,
      password: password,
    }),
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
  const parsedResponse = await response.json();
  dispatch(removeUser());
  return parsedResponse;
};

export const getUserFolder = (id) => async (dispatch) => {
  const response = await fetch(`/api/folder/${id}`);
  const parsedResponse = await response.json();
  dispatch(getFolder(parsedResponse));
  return parsedResponse;
};

export const editUserFolder = ({ id, name, category }) => async (dispatch) => {
  const response = await fetch(`/api/folder/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      category: category,
    }),
  });

  const parsedResponse = await response.json();
  dispatch(updateFolder(parsedResponse));
  return parsedResponse;
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

export const deleteUserFolder = (id) => async (dispatch) => {
  const response = await fetch(`/api/folder/${id}`, { method: "DELETE" });
  const parsedResponse = await response.json();
  dispatch(updateFolder(parsedResponse));
  return parsedResponse;
};

export const createUserFile = ({
  name,
  content,
  url,
  folderId,
  fileTypeId,
}) => async (dispatch) => {
  const response = await fetch("/api/file", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      content: content,
      s3_url: url,
      folder_id: folderId,
      file_type_id: fileTypeId,
    }),
  });

  const parsedResponse = await response.json();
  dispatch(updateFolder(parsedResponse));
  return parsedResponse;
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const { id, email, username, folders } = action.user;
      const saveUserInfo = { ...state, id, email, username, folders };
      return saveUserInfo;

    case REMOVE_USER:
      const removeUserInfo = { ...initialState };
      return removeUserInfo;

    case CREATE_FOLDER:
      const addUserFolder = {
        ...state,
        folders: [...state.folders, action.folder],
      };
      return addUserFolder;

    case UPDATE_FOLDER:
      const deleteUserFolder = {
        ...state,
        folders: [...action.newFolderList.folders],
      };
      return deleteUserFolder;

    case GET_FOLDER:
      const selectedUserFolder = { ...state, selectedFolder: action.folder };
      return selectedUserFolder;

    default:
      return state;
  }
};

export default userReducer;
