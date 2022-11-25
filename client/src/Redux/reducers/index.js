import { combineReducers } from "redux";
// import alert from './alert'
import auth from './auth'
import profiles from './profiles'
import subjects from './subjects'
import users from './users'
// import profile from './profile'
// import post from './post'

//semegtacion igual a la base de datos o celecciones
export default combineReducers({
    
    auth,
    profiles,
    subjects,
    users
 
})