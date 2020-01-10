import { FETCH_USER_SUCCESS} from './user-constants'

const users = (state = {}, action) => {
    switch (action.type) {
        case FETCH_USER_SUCCESS:
            return {
            ...state,
            // `login` is the username
             [action.payload.login]: action.payload
            };
  
        default:
            return state;
    }
};

export { users }