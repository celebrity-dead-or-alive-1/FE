//Lists all celebreties from backend database


import React,{ useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { celebData } from '../actions/actions'
import { NavLink } from 'react-router-dom'
const Admin = props => {
    
    useEffect(() => {
   props.celebData()
    },[])

   

    return (
        <div>
            <h1>Admin Page</h1>
            {props.isFetching ? <h1>Loading Data....</h1>: null}
            {props.celebs && props.celebs.map(celeb => (
                <div>
               <NavLink to ={`/Admin/AdminIndividual/${celeb.id}`}>     
             <img src={celeb.image_url} /> 
             </NavLink>
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
