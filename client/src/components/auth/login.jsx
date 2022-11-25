import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { login } from "../../Redux/actions/auth";

//import  axios from "axios";

const Login = ({login, isAuthenticated}) => {

    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

    const navigate = useNavigate();

    const {email, password} = formData

    const handleChange = e => setFormData({...formData, [e.target.name] : e.target.value})

    const handleOnSubmit = async (e) => { 
        e.preventDefault()
        //console.log('success')
        login(email, password)
    }
    
    //redirect if logged in
    if(isAuthenticated){

        navigate("/dashboard");

    }   

    
    return (
        <>
            <div className=" formuLogin centered">
                <h1 className="h3 mb-3 fw-normal text-center">Inicio de Sesion</h1>
                {/* <p className="lead button3d"><i className="fas fa-user"></i> Inicia sesión con tu cuenta/Log in into your account</p> */}
            
            
            <form className="form" onSubmit={(e)=>handleOnSubmit(e)}>
                
                    <div className="form-floating my-3">

                    <input type="email" 
                        placeholder="Email" 
                        name="email"
                        value={email} 
                        className="form-control"
                        id="floatingInput"
                        onChange={e => handleChange(e)}
                    />
                     <label htmlFor="floatingInput"></label>
                    </div>
       
                
                <div className="form-floating my-3">
                    <input type="password"
                        placeholder="password"
                        name="password"
                        value={password}
                        // minLength="6"
                        className="form-control"
                        id="floatingPassword"
                        onChange={e => handleChange(e)}
                    />
                </div>
                <div className="checkbox my-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Recuerdame
                    </label>
                </div>
                
                <div className="centered">
                    
                <button
                    className="botonTamaño w-100 btn btn-lg btn-success"
                    type="submit"
                >
                    <p className="letri">Continuar</p>
                </button>
                    
                    {/* <button className="button3d btn btn-primary" onClick={handleTest} type="button">Click Me!</button>  */}

                    <p className="mt-5 mb-3 text-center">
                        No tienes una cuenta? <Link to="/register">/Registrate/</Link>
                    </p>
                </div>

            </form>
            </div>

            
        </>
    )
}

Login.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
   
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps ,{login})(Login)
