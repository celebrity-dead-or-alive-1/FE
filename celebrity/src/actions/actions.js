import { axiosWithAuth } from '../utils/axiosWithAuth'
export const CELEB_DATA_FETCHING = "CELEB_DATA_FETCHING"
export const CELEB_DATA_SUCCESS = "CELEB_DATA_FETCHING_SUCCESS"
export const CELEB_DATA_FAILURE = "CELEB_DATA_FAILURE"
export const LOGIN = "LOGIN"


export const celebData = () => dispatch => {
    dispatch({type: CELEB_DATA_FETCHING})
  axiosWithAuth().get('/celeb')
  .then(res => {
      console.log(res)
      dispatch({type: CELEB_DATA_SUCCESS, payload: res.data})
  })
  .catch(error => {
      console.log(error)
  })


}

export const userLogin = credentials => dispatch => {
 axiosWithAuth().post('/auth/login', credentials)
 .then(res => {
     console.log(res)
     localStorage.setItem('token', res.data.token) 
     dispatch({type: LOGIN, payload: res.data.username})
 })
 .catch(error => {
     console.log(error)
 })
}