import {UserActionTypes} from '../../actions/user_types'

const INITITIAL_STATE = {
    currentUser: null
}

const user = (state = INITITIAL_STATE, action) => {
    switch (action.type) {
        case UserActionTypes.SET_CURRENT_USER:
            return {
                ...state,
                currentUser: action.payload
            }
        default:
            return state
            
    }
}

export default user;