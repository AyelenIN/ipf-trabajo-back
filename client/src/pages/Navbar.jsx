// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom';



const Navbar = () => {

    const location = useLocation()

    if (location.pathname === '/login' ) return null
  
    if (location.pathname === '/register' ) return null
    

    return(

        <div>
      
        <header className="fondoNavbar2">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">
      <a className="navbar-brand" href="#">Inicio</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="/subjects">Materias</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/profiles">Perfiles</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Avisos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="/users" >Personas</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  </header>

  </div>





    );





}

const mapStateToProps = state => ({
    auth: state.auth,
       
   })

export default connect(mapStateToProps)(Navbar)