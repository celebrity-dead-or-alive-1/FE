import React from 'react'

const AdminAltCard = props => {
    return (
        <div>
        <img src ={props.celeb.image_url}/>  
        <h2>{props.celeb.celebname}</h2>
        <h2>{props.celeb.birthyear}</h2>
        <h2>{props.celeb.factoid}</h2>
        </div>
    )
}


export default AdminAltCard; 