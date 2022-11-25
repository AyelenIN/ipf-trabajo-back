import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const User = ({username, email}) => {

  return (
    <div className="col-lg-3 col-md-4 col-sm-6">
        
      <div className='card my-3 '>
        <Link 
        //   to={`/subjects/${_id}`} 
          className='text-decoration-none text-reset' 

         >
            <div className='card border-info mb-3'>
            <div className="banner-container card-banner w-100">
              {/* <img
                src={banner || "https://gstatic.com/classroom/themes/img_read.jpg"} 
                alt="banner"
                className="card-img-top card-banner"
              /> */}
            </div>
              <div className="ms-3 d-flex flex-column justify-content-evenly">
              <p className="card-title" >Nombre de Usuario:</p>
                <p className='m-0 fs-4'>{username}</p>
                <p className="card-title" >Email:</p>
                <p className='m-0 fs-6'>{email}</p>
                <p className='m-0 fs-6'>
                {/* <p className="text" >Profesor:</p>
                  {`${DocentTitular.Name} ${DocentTitular.surname}`} */}
                </p>
              </div>
            {/* <Avatar className="card-avatar rounded-circle" src={teachers[0].user.profile.avatar}/> */}
          </div>
         
        </Link>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({})

export default connect(mapStateToProps)(User)