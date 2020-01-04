//Lists all celebreties from backend database


import React,{ useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { celebData } from '../actions/actions'
import { axiosWithAuth } from '../utils/axiosWithAuth'
import { NavLink } from 'react-router-dom'
const Admin = props => {
    
    useEffect(() => {
   props.celebData()
   axiosWithAuth().get('/scores/3')
   .then(res => {
       console.log(res)
   })
   .catch(error => {
       console.log(error)
   })
    },[])

   

    return (
        <div>
            <h1>Admin Page</h1>
            {props.isFetching ? <h1>Loading Data....</h1>: null}
            {props.celebs.map(celeb => (
                <div>
             <img src={celeb.image_url} /> 
            <h2>{celeb.celebname}</h2>
            </div>
    ))}
        </div>
    )
}

const mapStateToProps = state => (
    {
        celebs: state.celebs,
        isFetching: state.isFetching,
        error: state.error
    }
)

export default connect( mapStateToProps,{celebData})(Admin)
