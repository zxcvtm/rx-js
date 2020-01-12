import { INCREMENT, INCREMENT_IF_ODD} from '../Constants/increment-constants'

const increment = () => ({ type: INCREMENT });
const incrementIfOdd = () => ({ type: INCREMENT_IF_ODD });

export {
  increment,
  incrementIfOdd
}