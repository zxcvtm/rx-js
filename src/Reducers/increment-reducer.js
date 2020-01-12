import { INCREMENT} from '../Constants/increment-constants'

const counter = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    default:
      return state;
  }
};

export { counter }