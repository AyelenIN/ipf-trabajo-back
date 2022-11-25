// import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { useLocation } from 'react-router-dom';
// import { resourceUsage } from 'process'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import { getCurrentProfile, deleteAccount } from '../../actions/profile'
// import Spinner from '../layout/Spinner'
// import DashboardActions from './DashboardActions'
/* import Experience from './Experience'
import Education from './Education' */
// import Experiences from './Experiences'




const Dashboard = ({auth}) => {

  const location = useLocation()

  if (location.pathname === '/login' ) return null

  if (location.pathname === '/register' ) return null
  
   
    return(

      <div>
      
     
      <div className="c-example-divider"></div>
      <h1 className="visually-hidden">Instituto Random</h1>

      {/* <main>
      <h1 className="visually-hidden">Heroes examples</h1>

      <div className="px-4 py-5 my-5 text-center" data-aos="fade-up">
        <img
          data-aos="zoom-in"
          className="imgcentral d-block mx-auto mb-4"
          // src={img2}
          alt=""
          width="72"
          height="57"
        />
        <div className="col-lg-6 mx-auto">
          <p className="fuentetexto lead mb-4">
            <strong>Alerta Temprana de Enfermedades y Plagas (ATEP) </strong>
            esta diseñado para alertar sobre la aparición de plagas y poder
            visualizar el avance de las enfermedades causadas.
          </p>
        </div>
      </div>

      <div
        className="b-example-divider"
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
      ></div>

      <div className="container col-xxl-8 px-4 py-5">
        <div
          className="row flex-lg-row-reverse align-items-center g-5 py-5"
          data-aos="fade-up"
        >
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              data-aos="zoom-in"
              // src={img}
              className="imgfondo d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">Registra tu parcela</h1>
            <p className="fuentetexto lead">
              Carga los datos directamente desde la aplicacion: ubicación,
              perímetro tipo de cultivo. Manten un informe detallado de cada
              cultivo hasta su finalizacion.
            </p>
          </div>
        </div>
      </div>


      

   

    
    </main> */}
    </div>
    




    );

        
    
}

const mapStateToProps = state => ({
    auth: state.auth,
    
})

Dashboard.propTypes = {
   
    auth: PropTypes.object,
   
}

export default connect(mapStateToProps)(Dashboard)

