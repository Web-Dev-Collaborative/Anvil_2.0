const initialState = {
  user: null,
};

const SET_USER = "user/setUser";
const REMOVE_USER = "user/removeUser";

const setUser = (user) => ({
  type: SET_USER,
  user,
});

const removeUser = () => ({
  type: REMOVE_USER,
});

export const login = ({ email, password }) => async (dispatch) => {
  const response = await fetch("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({
      email,
      password,
    }),
  });

  dispatch(setUser(response));
  return response;
};

export const restoreUser = () => async (dispatch) => {
  const response = await fetch("/api/auth/");
  dispatch(setUser(response));
  return response;
};

export const logout = () => async (dispatch) => {
  const response = await fetch("/api/auth/logout");
  dispatch(removeUser());
  return response;
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      const saveUserInfo = { ...state, user: action.user };
      return saveUserInfo;
    case REMOVE_USER:
      const removeUserInfo = { ...state, user: null };
      return removeUserInfo;
  }
};
