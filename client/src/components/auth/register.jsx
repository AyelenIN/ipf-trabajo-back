import { useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { register } from "../../Redux/actions/auth";

//import  axios from "axios";

const Register = ({register, isAuthenticated}) => {

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        email: "",
        confirmPassword: ""
    })

    const navigate = useNavigate();

    const {username, password, email, confirmPassword} = formData

    const handleChange = e => setFormData({...formData, [e.target.name] : e.target.value})

    const handleOnSubmit = async (e) => { 
        e.preventDefault()

        if(password !== confirmPassword){
            //console.log('las contraseñas no coinciden')
            setAlert('las contraseñas no coinciden','danger')
        }else{
            register({username, email, password, confirmPassword})
            //console.log('success')
        }
    }
    
    //redirect if logged in

    if(isAuthenticated){

        navigate("/login");

    }   
   

        
    
    return (
        <>
            <div className=" formuLogin centered">
                <h1 className="h3 mb-3 fw-normal text-center">Registrase</h1>
                {/* <p className="lead button3d"><i className="fas fa-user"></i> Inicia sesión con tu cuenta/Log in into your account</p> */}
            
            
            <form className="form" onSubmit={(e)=>handleOnSubmit(e)}>
                
                    <div className="form-floating my-3">

                    <input type="name" 
                        placeholder="name" 
                        name="username"
                        value={username} 
                        className="form-control"
                        id="floatingInput"
                        onChange={e => handleChange(e)}
                    />
                     <label htmlFor="floatingInput"></label>

                     <small className="form-text">
                        Nombre de Usuario 
                    </small>

                    </div>
       
                
                <div className="form-floating my-3">
                    <input type="email"
                        placeholder="email"
                        name="email"
                        value={email}
                        minLength="6"
                        className="form-control"
                        id="floatingEmail"
                        onChange={e => handleChange(e)}
                    />

                </div>

                <div className="form-floating my-3">
                    <input type="password"
                        placeholder="password"
                        name="password"
                        value={password}
                        minLength="6"
                        className="form-control"
                        id="floatingPassword"
                        onChange={e => handleChange(e)}
                    />

                    <p className="text-center my-1">
                        <small >
                            contraseña <code>con un minimo de 6 carácteres</code>  
                        </small>
                    </p>
                    
                </div>

                <div className="form-floating my-3">
                    <input type="password"
                        placeholder="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        minLength="6"
                        className="form-control"
                        id="floatingPassword"
                        onChange={e => handleChange(e)}
                    />

                    <p className="text-center my-1">
                        <small >
                            Reingresar la contraseña
                        </small>
                    </p>
                    
                </div>

                {/* <div className="checkbox my-3">
                    <label>
                        <input type="checkbox" value="remember-me" /> Recuerdame
                    </label>
                </div> */}
                
                <div className="centered">
                    
                <button
                    className="botonTamaño w-100 btn btn-lg btn-success"
                    type="submit"
                >
                    <p className="letri">Continuar</p>
                </button>
                    
                    {/* <button className="button3d btn btn-primary" onClick={handleTest} type="button">Click Me!</button>  */}

                    {/* <p className="mt-5 mb-3 text-center">
                        No tienes una cuenta? <Link to="/register">/Registrate/</Link>
                    </p> */}
                </div>

            </form>
            </div>

            
        </>
    )
}

Register.propTypes = {
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
   
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps ,{register})(Register)
