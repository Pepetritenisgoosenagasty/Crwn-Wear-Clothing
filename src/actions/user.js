import {UserActionTypes} from '../actions/user_types'

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user
})
