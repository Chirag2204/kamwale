import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  ACCOUNT_DELETED,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: true,
  user: {
    isSeller: true,
    _id: '60793f98d4ebcb3089152653',
    name: 'Khushboo Goyal',
    email: 'khushboobansal88@gmail.com',
    avatar:
      '//www.gravatar.com/avatar/d68cf908ca3c4d1f5dea8d585820dd6e?s=200&r=pg&d=mm',
    date: '2021-04-16T07:41:12.845Z',
  },
};

export default function auth (state= initialState, action){
    const{type, payload} = action;

    switch(type){
        case USER_LOADED:
            return{
                ...state,
                isAuthenticated: true,
                loading: false,
                user: payload
            }
        case REGISTER_SUCCESS:
        case LOGIN_SUCCESS:
            localStorage.setItem('token', payload.token);
            return{
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }
        case REGISTER_FAIL:
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT:
        case ACCOUNT_DELETED:
            return {
              ...state,
              token: null,
              isAuthenticated: false,
              loading: false,
            };
    default:
        return state;
}}