import React,{ useState, useEffect, useCallback} from 'react'
import axios from 'axios'
import AdminAltCard from './AdminAltCard'
import { connect } from 'react-redux'
import { deleteCelebAdminAlt, } from '../actions/actions'
import { axiosWithAuth } from '../utils/axiosWithAuth'
const AdminIndivAlt = props => {
  const [celeb, setCeleb] = useState({})
  const [editForm, setEditForm] = useState({
      "id" : "",
      "celebname" : "",
      "image_url" : "",
      "factoid" : "",
      "birthyear" : "",
      "alive": ""
  })
  const [celebList, setCelebList] = useState([])
 const [ buttonDisplay, setButtonDisplay] = useState(false)
const [displayForm , setDisplayForm] = useState(false)
  


  useEffect(() => {
   axios.get(`https://ogr-ft-celebdoa.herokuapp.com/api/celeb/${props.match.params.id}`)
  .then(res => {
      setCeleb(res.data)
      const celebToEdit = celebList.find( e => `${e.id}` === props.match.params.id
    ); 
    if(celebToEdit) {
        setEditForm(celebToEdit)
    }

  })
  .catch(error => {
      console.log( error)
  })
    
  

   
  }, [ celebList, props.match.params.id])


useEffect(() => {
    axios.get('https://ogr-ft-celebdoa.herokuapp.com/api/celeb')
  .then( res => {
   setCelebList(res.data)
  
  })
  .catch(error => {
      console.log(error)
  })
}, [])




console.log(celebList)
 
const changeHandler = e => {
    setEditForm({...editForm, [e.target.name] : e.target.value})
}

const deleteCeleb = e => {
    e.preventDefault();
 props.deleteCelebAdminAlt(celeb.id)
}

const editCeleb = e => {
    e.preventDefault();
    setButtonDisplay(!buttonDisplay)
    setDisplayForm(!displayForm)
}

const saveCelebEdit = e => {
    e.preventDefault();
    setButtonDisplay(!buttonDisplay)
    setDisplayForm(!setDisplayForm)
   axiosWithAuth().put(`/celeb`, editForm )
   .then( res => {
       console.log(res)
       props.history.push('/AdminAlt')
   })
   .catch(error => {
       console.log(error)
   })
}
  return (
      <div>
          {displayForm ? <form>
              <input type='text' name='id' value={editForm.id} placeholder='Enter id' onChange={changeHandler}/>
              <input type='text' name='celeb' value={editForm.celebname} placeholder='Enter Celeb Name' onChange={changeHandler}/>
              <input type='text' name='image_url' value={editForm.image_url} placeholder='Enter Image' onChange={changeHandler}/>
              <input type='text' name='factoid' value={editForm.factoid} placeholder='factoid' onChange={changeHandler}/>
              <input type='text' name='birthyear' value={editForm.birthyear} placeholder='Enter Birth Year' onChange={changeHandler}/>
              <input type='text' name='alive' value={editForm.alive} placeholder='Enter 0 For Dead or 1 for Alive' onChange={changeHandler}/>
          </form> : null}
          
         <AdminAltCard celeb={celeb}/> 
         <button onClick={deleteCeleb}>Delete</button>
         {buttonDisplay ? <button onClick={saveCelebEdit}>Save Edit</button>: <button onClick={editCeleb}>Edit</button>}
      </div>
  )

}


export default connect (null, { deleteCelebAdminAlt })(AdminIndivAlt); 