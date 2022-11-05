import { GET_PROFILE, PROFILE_ERROR, CLEAR_PROFILE, UPDATE_PROFILE, GET_PROFILES, CREATE_REVIEW, CREATE_REVIEW_FAIL, RESET_REVIEW, LOGOUT } from '../actions/types';

const initialState = {
  profile: null,
  profiles: [],
  loading: true,
  error: {},
};

export default function profile (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        profile: null,
      };
    case CLEAR_PROFILE:
      case LOGOUT:
      return {
        ...state,
        profile: null,
      };
    case CREATE_REVIEW:
      return {
        loading: false,
        success: true,
      };
    case CREATE_REVIEW_FAIL:
      return {
        error: payload,
        loading: false,
      };
    case RESET_REVIEW:
      return {};
    default:
      return state;
  }
}
