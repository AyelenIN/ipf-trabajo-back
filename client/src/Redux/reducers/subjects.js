import { GET_SUBJECTS, ERROR_SUBJECTS, CLEAR_SUBJECTS, GET_SUBJECT } from "../actions/types"

const initialState = {
    list : [],
    selected: null
   
}

export default function(state = initialState, action) {
    const { type, payload } = action

    switch(type){
    
        case GET_SUBJECTS:
            return {
                ...state,
                list: payload,
                selected: false
            }
        case GET_SUBJECT:
            return {
                ...state,
               list: payload,
               selected: false
            }     
        case ERROR_SUBJECTS:
            return {
                ...state,
                error: payload,
                list: false,
                selected: null
            }
        case CLEAR_SUBJECTS:
            return {
                ...state,
                list: null,
                selected: false
            }
        default:
            return state 
    }
}