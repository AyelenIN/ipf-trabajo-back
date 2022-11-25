import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllUsers } from '../../Redux/actions/Users'

 import User from '../../pages/UsersView'

const Users = ({ list, getAllUsers}) => {
  
  useEffect(()=>{
    getAllUsers()
  }, [])
  
  return (
    <div className="row">
      
      {list && list.map((user, index)=> <User key={index} {...user} />)}
    </div>
  )
}

const mapStateToProps = state => ({
 
  list: state.users.list

  


})

export default connect(mapStateToProps, {getAllUsers})(Users)