import { combineReducers, createStore, applyMiddleware } from 'redux';
import { users }  from './Reducers/user-reducer'
import { counter }  from './Reducers/increment-reducer'

import { fetchUserEpic }  from './Epics/user-epics'
import { incrementIfOddEpic }  from './Epics/increment-epics'

import { combineEpics, createEpicMiddleware } from 'redux-observable';

const rootReducer = combineReducers({ users, counter });
const rootEpic = combineEpics(fetchUserEpic, incrementIfOddEpic);
const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export default store