import React, {useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

const initialCeleb = {
    celebname:'',
    image_url: '',
    factoid: '',
    birthyear: '',
    alive: true
}
const CreateCeleb = ({ updateCelebList }) => {
    const [celebToAdd, setCelebToAdd] = useState(initialCeleb);

    const handleChange = e => {
        setCelebToAdd({...celebToAdd, [e.target.name] : e.target.value})
    }

    const handleNum = e => {
        setCelebToAdd({...celebToAdd, [e.target.name] : parseInt(e.target.value)})
    }

    const handleSubmit = e => {
        e.preventDefault()
        console.log(celebToAdd)
        axiosWithAuth().post('/celeb', celebToAdd)
        .then(res => {
            console.log(res.data)
        })
        .catch(err => {
            console.log(err.response)
        })
        setCelebToAdd(initialCeleb)
    }

    const handleReset = e => {
        e.preventDefault();
        setCelebToAdd(initialCeleb)
    }

    return (
        <div className='addCelebForm'>
            Add Celebrity:
            <form className='addCelebForm_inner'>
                <label>
                    Name:
                    <input type='text' name='celebname' onChange={handleChange} value={celebToAdd.celebname}/>
                </label>
                <label>
                    Image:
                    <input type='text' name='image_url' onChange={handleChange} value={celebToAdd.image_url}/>
                </label>
                <label>
                    Factoid:
                    <input type='text' name='factoid' onChange={handleChange} value={celebToAdd.factoid}/>
                </label>
                <label>
                    Birth Year:
                    <input type='number' name='birthyear' onChange={handleNum} value={celebToAdd.birthyear}/>
                </label>
                <label className='addCelebForm_inner'>
                    Alive?
                    <select type='number' name='alive' onChange={handleChange} value={celebToAdd.alive}>
                        <option value={true}>Yes</option>
                        <option value={false}>No</option>
                    </select>
                </label>
                <div className='celebFormBtn'>
                    <button type='submit' onClick={handleSubmit}>Submit</button>
                    <button onClick={handleReset}>Reset</button>
                </div>
            </form>
        </div>
    )

}

export default CreateCeleb