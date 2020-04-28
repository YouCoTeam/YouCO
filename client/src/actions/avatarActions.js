import axios from 'axios';
import { GET_AVATAR, UPDATE_AVATAR, AVATAR_LOADING } from './types';
import { tokenConfig } from './authActions';
import { returnErrors } from './errorActions';

export const getAvatar = (e) => (dispatch, getState) => {
  dispatch(setAvatarLoading());
  axios
    .get('/api/avatars', tokenConfig(getState))
    .then(res =>
      dispatch({
        type: GET_AVATAR,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const updateAvatar = avatar => (dispatch, getState) => {
  axios
    .post('/api/avatars', avatar, tokenConfig(getState))
    .then(res =>
      dispatch({
        type: UPDATE_AVATAR,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch(returnErrors(err.response.data, err.response.status))
    );
};

export const setAvatarLoading = () => {
  return {
    type: AVATAR_LOADING
  };
};
