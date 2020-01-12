import { FETCH_USER, FETCH_USER_SUCCESS} from '../Constants/user-constants'

const fetchUser = username => ({ type: FETCH_USER, payload: username });
const fetchUserSuccess = payload => ({ type: FETCH_USER_SUCCESS, payload });

export {
  fetchUser,
  fetchUserSuccess
}