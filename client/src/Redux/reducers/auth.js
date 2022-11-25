import { REGISTER_SUCCESS, 
    LOGIN_SUCCESS, DELETE_ACCOUNT, LOGIN_FAIL, REGISTER_FAIL
} from "../actions/types"; 



const initialState = {

    token: localStorage.getItem('token'),
    isAuthenticated: null,
    loading: true,  
    user: null

}

const authReducers = (state = initialState, action) => {

    const {type , payload} = action

    switch(type) {
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS: 
            // localStorage.setItem('token', payload.token)
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                loading: false
            }    
       
        case DELETE_ACCOUNT:         
            localStorage.removeItem('token')
            return {
                ...state,
                token: null,
                isAuthenticated: false,
                loading: false
            }

            case LOGIN_FAIL:
                return {
                    ...state,
                    error: payload,
                    loading: false,
                    user: null
                }
            case REGISTER_FAIL:
                 return {
                     ...state,
                    error: payload,
                    loading: false,
                    user: null
                    }
    

        default:
            return state        
    }

    // const actions = {
    //     'LOGIN': ({token: payload.token}),
    //     'LOGOUT': initialState


    // }

    // return actions [type] || initialState

}

export default authReducers



