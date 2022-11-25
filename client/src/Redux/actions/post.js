import axios from 'axios'
// import { setAlert } from './alert'
import { GET_POSTS, ERROR_POST } from './types'

const urlTemp = 'http://localhost:4000'


//get all POSTS
export const getAllPosts = () => async dispatch => {

    try {
        
        const res = await axios.get('back/api/post/obtener')

        dispatch({
            type: GET_POSTS,
            payload: res.data.encontrados
        })

    } catch (err) {
        
        dispatch({
            type: ERROR_POST,
            payload: { 
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    }


}

// export const getPostById = () => async dispatch => {
//     try {
//       const response = await axios.get(`/backend/subject/${subjectId}`)
  
//       dispatch({type: 'SELECT_SUBJECT', payload: response.data.subject})
  
//     } catch(error) {
//       console.log(error)
//     }
//   }