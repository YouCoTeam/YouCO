import {
    GET_AVATAR,
    UPDATE_AVATAR,
    AVATAR_LOADING
  } from '../actions/types';
  
  const initialState = {
    avatar: {},
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_AVATAR:
        return {
          ...state,
          avatar: action.payload,
          loading: false
        };
      case UPDATE_AVATAR:
        return {
          ...state,
          avatar: action.payload,
          loading: false
        };
      case AVATAR_LOADING:
        return {
          ...state,
          loading: true
        };
      default:
        return state;
    }
  }
  