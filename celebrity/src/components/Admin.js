//Lists all celebreties from backend database


import React,{ useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { celebData, createCeleb } from '../actions/actions'
import { NavLink } from 'react-router-dom'
import CreateCeleb from './CreateCeleb'

const Admin = props => {
    
    useEffect(() => {
         props.celebData();
    },[])

    return (
        <div>
            <h1>Admin Page</h1>
            {props.isFetching ? <h1>Loading Data....</h1>: null}
            {props.celebs && props.celebs.map(celeb => (
                <div key={celeb.id}>
               <NavLink to ={`/Admin/AdminIndividual/${celeb.id}`}>     
             <img src={celeb.image_url} /> 
             </NavLink>
            <h2>{celeb.celebname}</h2>
            <hr/>
            </div>
    ))}
            <CreateCeleb celebData={props.celebData}/>
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

export default connect( mapStateToProps,{celebData, createCeleb})(Admin)
