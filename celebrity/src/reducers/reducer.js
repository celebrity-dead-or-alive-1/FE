import { CELEB_DATA_FETCHING, CELEB_DATA_SUCCESS, CELEB_DATA_FAILURE, LOGIN, LOGIN_FETCHING } from '../actions/actions'

const initialState = {
    celebs: [],
    isFetching: false,
    error: '',
    totalScore: 0,
    userState: {
        username: '',
        id : 0,
        email: '',
        score: 0,
        error: ''
        }
}


export const reducer = (state = initialState, action) => {
            switch(action.type) {

                case CELEB_DATA_FETCHING :
                    return {
                        ...state,
                        isFetching: true,
                    }
                 case CELEB_DATA_SUCCESS : 
                    return {
                        ...state,
                        celebs: action.payload,
                        isFetching: false
                        
                    }

                case LOGIN_FETCHING : 
                return {
                    ...state,
                    isFetching: true 
                }
                 case LOGIN : 
                  return {
                      ...state,
                      isFetching: false,
                      userState: {
                          ...state.userState,
                          username: action.payload.username,
                          id: action.payload.id,
                          email: action.payload.email,
                      }
                  }

                default :
                return state 
        } 
} 