import { LOGIN_ERROR } from '../actions/types';

export default function(state=null, action) {
    switch (action.type) {
        case LOGIN_ERROR :
            return action.payload
        default:
            return state;
    }
}