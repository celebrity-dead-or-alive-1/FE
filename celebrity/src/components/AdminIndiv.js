//params.id
import React,{ useState, useEffect} from 'react'
import axios from 'axios'
const AdminIndiv = props => {
  const [celeb, setCeleb] = useState()

  useEffect(() => {
   axios.get(`https://ogr-ft-celebdoa.herokuapp.com/api/celeb/${props.match.params.id}`)
  .then(res => {
      console.log(res)
  })
  .catch(error => {
      console.log( error)
  })
  }, [props.match.params.id])

  return (
      <div>
         <h2>Admin Individual</h2>
      </div>
  )

}


export default AdminIndiv 