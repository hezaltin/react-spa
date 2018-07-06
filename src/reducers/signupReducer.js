import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function signupReducer(state = initialState.signupdetails, action) {
  switch (action.type) {

    case types.CREATE_SIGNUP_SUCCESS:
      return [
        ...state,
        Object.assign({}, action.signupdetails)
      ];

  
    default:
      return state;
  }
}
