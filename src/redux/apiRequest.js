import axios from "axios";

import {
  loginFailed,
  loginStart,
  loginSuccess,
  logoutStart,
  logoutSuccess,
  logoutFailed,
  registerFailed,
  registerStart,
  registerSuccess,
} from "./authSlice";
import {
  getUsersStart,
  getUsersFailed,
  getUsersSuccess,
  deleteUsersFailed,
  deleteUsersStart,
  deleteUsersSuccess,
} from "./userSlice";

export const loginUser = async (user, dispatch, navigate) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("v1/auth/login", user);
    dispatch(loginSuccess(res.data));
    navigate("/");
  } catch (err) {
    dispatch(loginFailed());
    throw err;
  }
};
export const registerUser = async (user, dispatch, navigate) => {
  dispatch(registerStart());
  try {
    await axios.post("v1/auth/register", user);
    dispatch(registerSuccess());
    navigate("/login");
  } catch (err) {
    dispatch(registerFailed());
    throw err;
  }
};
export const getAllUsers = async (accessToken, dispatch, axiosJWT) => {
  dispatch(getUsersStart());
  try {
    const res = await axiosJWT.get("/v1/user", {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(getUsersSuccess(res.data));
  } catch (error) {
    dispatch(getUsersFailed());
  }
};
export const deleteUser = async (accessToken, dispatch, id, axiosJWT) => {
  dispatch(deleteUsersStart());
  try {
    const res = await axiosJWT.delete("/v1/user/" + id, {
      headers: { token: `Bearer ${accessToken}` },
    });
    dispatch(deleteUsersSuccess(res.data));
  } catch (error) {
    dispatch(deleteUsersFailed(error.response.data));
  }
};
export const logOut = async (dispatch, navigate) => {
  dispatch(logoutStart());
  try {
    await axios.post("v1/auth/logout");
    // await axiosJWT.post("v1/auth/logout", id, {
    //   headers: { token: `Bearer ${accessToken}` },
    // });
    navigate("/");
    dispatch(logoutSuccess());
  } catch (error) {
    dispatch(logoutFailed());
  }
};
export const getEventbyBusiness = async (id) => {
  try {
    await axios.get("v1/events")
  } catch (error) {
    console.log(error)
  }
}
