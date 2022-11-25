import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getAllSubjects } from '../../Redux/actions/Subjects'

 import Subject from '../../pages/SubjectsView'

const Subjects = ({ list, getAllSubjects}) => {
  
  useEffect(()=>{
    getAllSubjects()
  }, [])
  
  return (
    <div className="row">
      
      {list && list.map((subject, index)=> <Subject key={index} {...subject} />)}
    </div>
  )
}

const mapStateToProps = state => ({
 
  list: state.subjects.list

  


})

export default connect(mapStateToProps, {getAllSubjects})(Subjects)