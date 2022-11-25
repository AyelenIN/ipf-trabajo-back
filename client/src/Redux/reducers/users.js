import { GET_USERS } from "../actions/types"

const initialState = {
    list : [],
  
   
}

export default function(state = initialState, action) {
    const { type, payload } = action

    switch(type){
        case GET_USERS:
            return {
                ...state,
                list: payload,
            }
        default:
            return state 
    }
}