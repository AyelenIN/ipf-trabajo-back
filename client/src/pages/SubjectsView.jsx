import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

// import Avatar from '../../../components/Avatar'

// import { findSubject } from '../../../redux/actions/subjects'

// import '../../../styles/banner.css'

const Subject = ({DocentTitular, anio, NombreMateria}) => {

  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
        
      <div className='card my-3 '>
        <Link 
        //   to={`/subjects/${_id}`} 
          className='text-decoration-none text-reset' 
         >
          <div className='card border-success mb-3'>
            <div className="banner-container card-banner w-100">
              {/* <img
                src={banner || "https://gstatic.com/classroom/themes/img_read.jpg"} 
                alt="banner"
                className="card-img-top card-banner"
              /> */}
            </div>
              <div className="ms-3 d-flex flex-column justify-content-evenly">
              <p className="card-title" >Asignatura:</p>
                <p className='m-0 fs-4'>{NombreMateria}</p>
                <p className="card-title" >Año:</p>
                <p className='m-0 fs-6'>{anio}</p>
                <p className='m-0 fs-6'>
                <p className="card-title" >Profesor:</p>
                  {`${DocentTitular.Name} ${DocentTitular.surname}`}
                </p>
              </div>
            {/* <Avatar className="card-avatar rounded-circle" src={teachers[0].user.profile.avatar}/> */}
          </div>
          {/* <div className="card-body">
            <p>{`${lessons_schedule[0].day}: ${lessons_schedule[0].start_hour} - ${lessons_schedule[0].end_hour}`}</p>
          </div> */}
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(Subject)