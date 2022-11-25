import axios from 'axios'
// import { setAlert } from './alert'
import { GET_SUBJECTS, ERROR_SUBJECTS, CLEAR_SUBJECTS } from './types'

const urlTemp = 'http://localhost:4000'


//get all SUBJECTS
export const getAllSubjects = () => async dispatch => {
    
    dispatch({type: CLEAR_SUBJECTS})
 

    try {
        
        const res = await axios.get('back/api/subjects/obtener')

        dispatch({
            type: GET_SUBJECTS,
            payload: res.data.encontrados
        })

    } catch (err) {
        
        dispatch({
            type: ERROR_SUBJECTS,
            payload: { 
                msg: err.response.statusText,
                status: err.response.status
            }
        })
    }


}

export const getSubjectById = () => async dispatch => {
    try {
      const response = await axios.get(`/backend/subject/${subjectId}`)
  
      dispatch({type: 'SELECT_SUBJECT', payload: response.data.subject})
  
    } catch(error) {
      console.log(error)
    }
  }