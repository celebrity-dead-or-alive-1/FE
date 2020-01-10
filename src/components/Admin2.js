//Lists all celebreties from backend database


import React,{ useEffect, useState } from 'react'
import axios from 'axios';


const Admin2 = () => {
    const [celebAll, setCelebAll] = useState([]);
    
    useEffect(() => {
        axios.get('https://ogr-ft-celebdoa.herokuapp.com/api/celeb')
        .then(response => {
            console.log(response.data);
            setCelebAll(response.data);
        })
        .catch(error => {
            console.log("Error: " + error);
        })
    },[])

    return (
        <div>
            <h1>Admin Page</h1>
            { celebAll.length === 0 ? <h1>Loading...</h1> : celebAll.map(celeb => (
                <div className="celeb-all-card">
                    <div>
                        <img src={celeb.image_url} alt={celebAll.celebname} />
                        <h4>Name: {celeb.celebname}</h4>
                        <h4>Factoid: {celeb.factoid}</h4>
                        <h4>Birth Year: {celeb.birthyear}</h4>
                        <h4>
                            {celeb.alive ? 
                            <span className="celeb-alive">Alive</span> :
                            <span className="celeb-dead">Dead</span>}
                        </h4>
                    </div>
                </div>
            ))}
        </div>
    )
}


export default Admin2;

