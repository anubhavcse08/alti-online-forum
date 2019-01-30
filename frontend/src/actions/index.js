import axios from 'axios'
import { FETCH_USER, LOGIN_RESPONSE, LOGIN_ERROR, POST_QUE_ANS, PARTICULAR_QUE_ANS, MY_TABLE_DATA} from './types'

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res})
}

export const loginResponce = () => async dispatch => {
    const res = await axios.get('/userMannual_login');
    dispatch({type: LOGIN_RESPONSE, payload: res})
}

export const loginError = () => async dispatch => {
    const res = await axios.get('/login_error');
    dispatch({type: LOGIN_ERROR, payload: res})
}

export const postQA = () => async dispatch => {
    const res = await axios.get('/postedQA');
    dispatch({type: POST_QUE_ANS, payload: res})
}

export const particularQA = (id) => async dispatch => {
    const res = await axios.get(`/ans_populate/${id}`);
    dispatch({type: PARTICULAR_QUE_ANS, payload: res})
}

export const myTableData = () => async dispatch => {
    const res = await axios.get('http://localhost:5000/get_myTable');
    dispatch({type: MY_TABLE_DATA, payload: res})
}
