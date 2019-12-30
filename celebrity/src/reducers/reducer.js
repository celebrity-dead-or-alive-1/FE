import { CELEB_DATA_FETCHING, CELEB_DATA_SUCCESS, CELEB_DATA_FAILURE } from '../actions/actions'

const initialState = {
    celebs: [],
    isFetching: false,
    error: ''
}


export const reducer = (state = initialState, action) => {
            switch(action.type) {

                case CELEB_DATA_FETCHING :
                    return {
                        ...state,
                        isFetching: true,
                    }
                default :
                return state 
        } 
} 