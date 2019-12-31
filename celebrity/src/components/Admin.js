//Lists all celebreties from backend database


import React,{ useEffect } from 'react'
import { connect } from 'react-redux'
import { celebData } from '../actions/actions'

const Admin = props => {
    
    useEffect(() => {
   props.celebData()
    },[])

   

    return (
        <div>
            <h1>Admin Page</h1>
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
