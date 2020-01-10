//params.id
import React,{ useState, useEffect} from 'react'
import axios from 'axios'
import { axiosWithAuth } from '../utils/axiosWithAuth';
import { connect } from 'react-redux';
import { editCeleb } from '../actions/actions';

const AdminIndiv = props => {
  const [celeb, setCeleb] = useState({});
  const [editing, setEditing] = useState(false);
  const [celebToEdit, setCelebToEdit] = useState({celebname: '', image_url: '', factoid: '', birthyear: '', alive: ''})

  useEffect(() => {
   axios.get(`https://ogr-ft-celebdoa.herokuapp.com/api/celeb/${props.match.params.id}`)
  .then(res => {
      console.log(res.data)
      setCeleb(res.data)
  })
  .catch(error => {
      console.log( error)
  })
  }, [props.match.params.id])

  const startEditCeleb = item => {
      setEditing(true);
      setCelebToEdit(item)
  }

  const saveEdit = e => {
      e.preventDefault();
      props.editCeleb(celebToEdit);
      setEditing(false);
      console.log(props.history);
      props.history.push(`/Admin`)
  }

  const deleteCeleb = item => {
      axiosWithAuth()
      .delete(`/celeb/del/${item}`)
      .then(res => {
          props.history.push('/Admin')
      })
  }

  const handleEdit = e => {
    setCelebToEdit({...celebToEdit, [e.target.name] : e.target.value})
  }

  return (
      <div>
          <div>
            <h2>Admin Individual</h2>
            <h2>{celeb.celebname}</h2>
            <img src={celeb.image_url} />
            <p>{celeb.factoid}</p>
            <p>{celeb.birthyear}</p>
            <p>{celeb.alive===true ? 'Alive' : 'Dead'}</p>
            <hr/>
            <button onClick={() => startEditCeleb(celeb)}>Edit</button>
            <button onClick={() => deleteCeleb(celeb.id)}>Delete</button>
          </div>
            {editing && (
                <div className='popup'>
                    <div className='popup_inner'>
                        <form onSubmit={saveEdit}>
                            <label>
                                Name:
                                <input type='text' name='celebname' onChange={handleEdit} value={celebToEdit.celebname}/>
                            </label>
                            <label>
                                Image:
                                <input type='text' name='image_url' onChange={handleEdit} value={celebToEdit.image_url}/>
                            </label>
                            <label>
                                Factoid:
                                <input type='text' name='factoid' onChange={handleEdit} value={celebToEdit.factoid}/>
                            </label>
                            <label>
                                Birth Year:
                                <input type='number' name='birthyear' onChange={handleEdit} value={celebToEdit.birthyear}/>
                            </label>
                            <select type='number' name='alive' onChange={handleEdit} value={celebToEdit.alive}>
                                <option value='true'>Alive</option>
                                <option value='false'>Dead</option>
                            </select>
                            <button type='submit'>Submit</button>
                            <button onClick={() => setEditing(false)}>Cancel</button>
                        </form>
                    </div>
                </div>
            )}
      </div>
  )

}


export default connect(null, {editCeleb})(AdminIndiv)