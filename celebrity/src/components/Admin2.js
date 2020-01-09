//Lists all celebreties from backend database


import React,{ useEffect, useState } from 'react'
import axios from 'axios';
import { connect } from 'react-redux'


const Admin2 = () => {
    const [celebrities, setCelebrities] = useState([]);
    
    useEffect(() => {
        axios.get('https://ogr-ft-celebdoa.herokuapp.com/api/celeb')
        .then(response => {
            console.log("Response: " + response.data);
            setCelebrities(response);
        })
        .catch(error => {
            console.log("Error: " + error);
        })
    },[])

   

    return (
        <div>
            <h1>Admin Page</h1>
            
        </div>
    )
}


export default connect(Admin2)
