import axios from 'axios'
// import { Console } from 'console';
// import setAuthToken from '../../utils/setAuthToken';
import { REGISTER_FAIL, REGISTER_SUCCESS, 
 
    LOGIN_SUCCESS, LOGIN_FAIL} from "../actions/types";
// import { setAlert } from "./alert";
// import setAuthToken from '../../utils/setAuthToken'


//REGISTER USER
export const register = ({ username, email, password, confirmPassword }) => async dispatch => {
    
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    }

    const body = JSON.stringify({username, email, password, confirmPassword})

    console.info('body=>',body)

    try {
        const res = await axios.post('/back/api/users/create', body, config)

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })

        console.log(res.data)

        dispatch(loadUser())

    } catch (err) {
         console.log(err)

        // const errors = err.response.data.errors

        // if(errors){
        //     errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        // }
        
        // dispatch({
        //     type: REGISTER_FAIL
        // })
    }
}

//LOGIN
export const login = (email, password) => async dispatch => {
    
    const config = {
        headers: {
            'Content-Type':'application/json'
        }
    }

    const body = JSON.stringify({email, password})

    //console.info('body=>',body)

    try {
        const res = await axios.post('/back/api/users/login', body, config)

        console.log(res.data)

        localStorage.setItem('token', payload.token)

        dispatch({
            type: LOGIN_SUCCESS,
            payload: res.data
        })

        dispatch(loadUser())
        
    } catch (err) {

        const errors = err.response.data.errors

        if(errors){
            errors.forEach(error => dispatch(setAlert(error.msg, 'danger')))
        }
        
        dispatch({
            type: LOGIN_FAIL
        })
    }
}

// export const loadUser = () => async dispatch => {

//     if(localStorage.token) {
//         setAuthToken(localStorage.token)
//     }

//     try {
        
//         const res = await axios.get('back/api/users')

//         dispatch({
//             type: USER_LOADED,
//             payload: res.data
//         })

//     } catch (error) {
//         dispatch({
//             type: AUTH_ERROR
//         })
//     }
// }

// export const logout = () => dispatch => {
//    dispatch({type : LOGOUT }) 
//    dispatch({type: CLEAR_PROFILE})
// } 