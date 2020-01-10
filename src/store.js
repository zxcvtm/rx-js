import { combineReducers, createStore, applyMiddleware } from 'redux';
import { users }  from './user-reducer'
import { fetchUserEpic }  from './user-epics'

import { combineEpics, createEpicMiddleware } from 'redux-observable';

const rootReducer = combineReducers({ users });
const rootEpic = combineEpics(fetchUserEpic);
const epicMiddleware = createEpicMiddleware();

const store = createStore(rootReducer,
  applyMiddleware(epicMiddleware)
);

epicMiddleware.run(rootEpic);

export default store