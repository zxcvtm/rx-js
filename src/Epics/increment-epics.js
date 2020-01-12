import { map, filter } from 'rxjs/operators';
import { ofType } from 'redux-observable';
import { INCREMENT_IF_ODD} from '../Constants/increment-constants'
import { increment } from "../Actions/increment-actions";

const incrementIfOddEpic = (action$, state$) => action$.pipe(
  ofType(INCREMENT_IF_ODD),
  filter(() => state$.value.counter % 2 === 1),
  map(() => increment())
);

export { incrementIfOddEpic }