
import { PARTICULAR_QUE_ANS } from '../actions/types'

export default function(state=null, action) {
    // console.log("mannual reducers",action)
    switch (action.type) {
        case PARTICULAR_QUE_ANS :
            return action.payload
        default:
            return state;
    }
}