import { history } from '../index';
import { axiosWithAuth } from '../utils/axiosWithAuth';
export const CELEB_DATA_FETCHING = 'CELEB_DATA_FETCHING';
export const CELEB_DATA_SUCCESS = 'CELEB_DATA_FETCHING_SUCCESS';
export const LOGIN_FETCHING = 'LOGIN_FETCHING';
export const LOGIN = 'LOGIN';
export const CREATE_CELEB_START = 'CREATE_CELEB_START';
export const CREATE_CELEB_SUCCESS = 'CREATE_CELEB_SUCCESS';
export const EDIT_CELEB_START = 'EDIT_CELEB_START';
export const EDIT_CELEB_SUCCESS = 'EDIT_CELEB_SUCCESS';

export const celebData = () => dispatch => {
  dispatch({ type: CELEB_DATA_FETCHING });
  axiosWithAuth()
    .get('/celeb')
    .then(res => {
      console.log(res);
      dispatch({ type: CELEB_DATA_SUCCESS, payload: res.data });
    })
    .catch(error => {
      console.log(error);
    });
};

export const userLogin = credentials => dispatch => {
  dispatch({ type: LOGIN_FETCHING });
  axiosWithAuth()
    .post('/auth/login', credentials)
    .then(res => {
      console.log(res);
      localStorage.setItem('token', res.data.token);
      history.push('/Scores');
      dispatch({
        type: LOGIN,
        payload: {
          username: res.data.username,
          id: res.data.id,
          email: res.data.email
        }
      });
    })
    .catch(error => {
      console.log(error);
    });
};

export const editCeleb = celeb => dispatch => {
  dispatch({ type: EDIT_CELEB_START });
  axiosWithAuth()
    .put('/celeb', celeb)
    .then(res => {
      console.log(res);
      dispatch({
        type: EDIT_CELEB_SUCCESS,
        payload: {
          id: res.data.id,
          celebname: res.data.celebname,
          image_url: res.data.image_url,
          factoid: res.data.factoid,
          birthyear: res.data.birthyear,
          alive: res.data.alive
        }
      });
    });
};
export const deleteCelebAdminAlt = id => dispatch => {
  axiosWithAuth()
    .delete(`celeb/del/${id}`)
    .then(res => {
      history.push(`/AdminAlt`);
    })
    .catch(error => {
      console.log(error);
    });
};
