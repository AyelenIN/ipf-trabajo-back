import axios from 'axios'
// import { setAlert } from './alert'
import { GET_USERS, ERROR_USERS } from './types'

const urlTemp = 'http://localhost:4000'


//get all users
export const getAllUsers = () => async dispatch => {
    

    try {
        
        const res = await axios.get('back/api/Users/obtener')

        dispatch({
            type: GET_USERS,
            payload: res.data.encontrados
        })

    } catch (err) {
        
        dispatch({
            type: ERROR_USERS,
            payload: { 
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    }


}
