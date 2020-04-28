import {
    GET_AVATAR,
    UPDATE_AVATAR,
    AVATAR_LOADING
  } from '../actions/types';
  
  const initialState = {
    top: 'LongHairStraight',
    facialHairType: 'Blank',
    clotheType: 'Hoodie',
    eyeType: 'Happy',
    eyebrowType: 'Default',
    mouthType: 'Smile',
    skinColor: 'Light',
    loading: false
  };
  
  export default function(state = initialState, action) {
    switch (action.type) {
      case GET_AVATAR:
        return {
          top: action.payload.top,
          facialHairType: action.payload.facialHairType,
          clotheType: action.payload.clotheType,
          eyeType: action.payload.eyeType,
          eyebrowType: action.payload.eyebrowType,
          mouthType: action.payload.mouthType,
          skinColor: action.payload.skinColor,
          loading: false
        };
      case UPDATE_AVATAR:
        return {
          top: action.payload.top,
          facialHairType: action.payload.facialHairType,
          clotheType: action.payload.clotheType,
          eyeType: action.payload.eyeType,
          eyebrowType: action.payload.eyebrowType,
          mouthType: action.payload.mouthType,
          skinColor: action.payload.skinColor,
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
  