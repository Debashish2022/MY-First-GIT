import { Alert } from "react-bootstrap";
import { apicaller } from "../../utils/api";
import { authConstants } from "./constants";

export const login = (user) => {
  // console.log("auth action user data is :", user);
  return async (dispatch) => {
    try {
      dispatch({ type: authConstants.LOGIN_REQUEST });
      const res = await apicaller("admin/login", user, "POST", null, {
        ...user,
      });
      // console.log(res);

      if (res.status === 201 || res.status === 200) {
        const { user, token } = res.data;
        // console.log("userData after login is", user);
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
        dispatch({
          type: authConstants.LOGIN_SUCCESS,
          payload: {
            token,
            user,
          },
        });
      } else {
        if (res.status === 400) {
          dispatch({
            type: authConstants.LOGIN_FAILURE,
            payload: { error: res.data.error },
          });
        }
      }
    } catch (e) {
      // console.log(e.response.data);
      alert(e.response.data.error);
    }
  };
};

export const isUserLogedIn = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    if (token) {
      const user = JSON.parse(localStorage.getItem("user"));
      dispatch({
        type: authConstants.LOGIN_SUCCESS,
        payload: {
          token,
          user,
        },
      });
    } else {
      dispatch({
        type: authConstants.LOGIN_FAILURE,
        payload: { error: "Failed To Log in" },
      });
    }
  };
};

export const signout = () => {
  return async (dispatch) => {
    localStorage.clear();
    dispatch({
      type: authConstants.LOGOUT_REQUEST,
    });
  };
};
