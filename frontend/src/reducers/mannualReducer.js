import { LOGIN_RESPONSE } from '../actions/types'

export default function(state=null, action) {
    // console.log("mannual reducers",action)
    switch (action.type) {
        case LOGIN_RESPONSE :
            return action.payload
        default:
            return state;
    }
}