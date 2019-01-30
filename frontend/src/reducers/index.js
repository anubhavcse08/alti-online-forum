import { combineReducers } from 'redux';
import authReducer from './authReducer';
import mannualReducer from './mannualReducer';
import loginErrorReducer from './loginErrorReducer';
import postedQAReducer from './postedQAReducer';
import particularQueAnsReducer from './particular_que_ans';
import tableData from './myTableReducer';

export default combineReducers ({
    auth: authReducer,
    mannual: mannualReducer,
    loginError: loginErrorReducer,
    postedQA : postedQAReducer,
    partiQueAns : particularQueAnsReducer,
    tData : tableData
})