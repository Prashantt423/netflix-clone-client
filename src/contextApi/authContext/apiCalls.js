import axios from 'axios';
import {
  getUsersFailure,
  getUsersStart,
  getUsersSuccess,
  loginFailure,
  loginStart,
  loginSuccess,
  logout,
} from './AuthActions';

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post(
      'https://netflix-clone-api-xrxw.onrender.com/api/auth/login',
      user
    );
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const Logout = async (dispatch) => {
  dispatch(logout());
  alert('succesfully logged out!');
};

// get all users
export const getAllUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await axios.get(
      'https://netflix-clone-api-xrxw.onrender.com/api/users'
    );
    dispatch(getUsersSuccess(res.data));
  } catch (e) {
    dispatch(getUsersFailure());
  }
};
