import { ajax } from 'rxjs/ajax';
import { map, mergeMap } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { fetchUserSuccess } from '../Actions/user-actions'
import { FETCH_USER } from '../Constants/user-constants'


const fetchUserEpic = action$ => action$.pipe(
    ofType(FETCH_USER),
    mergeMap(action =>
        ajax.getJSON(`https://api.github.com/users/${action.payload}`).pipe(
            map(response => fetchUserSuccess(response))
        )
    )
);
export { fetchUserEpic }