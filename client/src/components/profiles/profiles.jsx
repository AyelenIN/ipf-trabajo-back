
import { Link} from 'react-router-dom'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Spinner from '../layout/spinner'
import { getProfiles } from "../../Redux/actions/profile";

// import { getProfileById } from '../../actions/profile'

// import ProfileTop from './ProfileTop'
// import ProfileAbout from './ProfileAbout'
// import ProfileExperience from './ProfileExperience'
// import ProfileEducation from './ProfileEducation'
// import ProfileGithub from './ProfileGithub'


const Profile = ({getProfiles, auth, profiles: {profiles, profile, loading}}) => {
    
  const [typeView, setTypeView] = useState(true) 
  
  useEffect(() => {
    getProfiles()
  }, [])

  return (
    <>
      {!loading ? 
      <>
        <div className="d-flex flex-row-reverse bd-highlight btn-group btn-group-sm mt-2">
          
          <button type="button" className=''
            style={{height:"25px", fontSize:"15px", paddingTop: "2px", width: "15%" }} 
            onClick={(e)=>{e.preventDefault()
              setTypeView(!typeView)
            }}
            >
            {typeView ? 
              <i className="fa fa-th-large" aria-hidden="true">tarjetas</i> :
              <i className="fa fa-list" aria-hidden="true">lista</i>
            }
          </button> 

          {/* <button type="button"
            style={{height:"25px", fontSize:"15px", paddingTop: "2px", width: "5%" }}  
            onClick={(e)=>{e.preventDefault()
              setTypeView(true)
            }}
            >
            <i className="fa fa-list" aria-hidden="true"></i>
          </button> */}
                     
        </div>

        <div className="centeredColumn my-2">
        
          <h1 className="text-primary">
              Developers
          </h1>
          <p /* className="lead" */>
            <i className="fab fa-connectdevelop"></i>
            navega y conecta con otros devs  
          </p>
        </div>
        {/* {profiles.length > 0 ? console.info(profiles.length) : null } */}
        
        
        
        
      </> 
      : <Spinner/>}

    </>
  )
    
}

Profile.propTypes = {
  getProfiles: PropTypes.object.isRequired,

    // auth: PropTypes.object.isRequired
}

const mapStateToProps = state => {
    
    // auth: state.auth
    console.log(state)

    return{profiles : state.profiles}
} 


export default connect(mapStateToProps, {getProfiles})(Profile)