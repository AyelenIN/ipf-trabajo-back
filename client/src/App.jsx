import  Login  from './components/auth/login'
// import { useLocation } from 'react-router-dom'
// import { useEffect } from 'react'
import Navbar from './pages/Navbar'
import Dashboard from './components/inicio/inicio'
import Register from './components/auth/register'
import Profile from  './components/profiles/profiles'
import Subjects from  './components/subjects/subjects'
import Users from './components/users/users'
// import setAuthToken from './utils/setAuthToken'
// import { loadUser } from './Redux/actions/auth'
import { BrowserRouter as Router, Route,  Routes } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './Redux/store'


function App() {

  

  // if(localStorage.token) {
  //   setAuthToken(localStorage.token)
  // }

  // useEffect(() => {
  //   store.dispatch(loadUser())
  // }, [])
 

  return (
    <Provider store={store} >
  
    
      <Navbar/>
    
      
      <section className="container">
        {/* <Alert/> */}
        <Routes>
          <Route  path={"/login"} element={<Login/>}/>
          <Route  path={"/"} element={<div>BIENVENIDOS</div>}/>
          <Route  path= {"/register"}element={<Register/>}/>
          <Route  path= {"/dashboard"}element={<Dashboard />}/>
          <Route  path= {"/profiles"}element={<Profile />}/>
          <Route  path= {"/subjects"}element={<Subjects />}/>
          <Route  path= {"/users"}element={<Users />}/>
         
        </Routes>
      </section>
      
  
  </Provider>
  )
}

export default App
