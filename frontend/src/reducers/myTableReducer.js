import { MY_TABLE_DATA } from '../actions/types'

export default function(state=null, action) {
    // console.log("mannual reducers",action)
    switch (action.type) {
        case MY_TABLE_DATA :
            return action.payload
        default:
            return state;
    }
}