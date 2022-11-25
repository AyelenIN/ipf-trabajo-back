import { GET_POSTS,  GET_POST, ADD_POST } from "../actions/types"

const initialState = {
    list : [],
    select: null
   
}

export default function(state = initialState, action) {
    const { type, payload } = action

    switch(type){
   
        case GET_POSTS:
            return {
                ...state,
                list: payload,
                select: false
            }
        case GET_POST:
            return {
                ...state,
               list: payload,
               select: false
            }     
        case ADD_POST:
            return {
                ...state,
                list: null,
                selected: false
            }
        default:
            return state 
    }
}