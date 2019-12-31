import axios from 'axios'
export const CELEB_DATA_FETCHING = "CELEB_DATA_FETCHING"
export const CELEB_DATA_SUCCESS = "CELEB_DATA_FETCHING_SUCCESS"
export const CELEB_DATA_FAILURE = "CELEB_DATA_FAILURE"



export const celebData = () => dispatch => {
    dispatch({type: CELEB_DATA_FETCHING})
  axios.get('https://ogr-ft-celebdoa.herokuapp.com/api/celeb')
  .then(res => {
      console.log(res)
      dispatch({type: CELEB_DATA_SUCCESS, payload: res.data})
  })
  .catch(error => {
      console.log(error)
  })


}