// redux
import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

// reducers
import counter  from './reducers/counter';
import counterB from './reducers/counterB';

const reducer = combineReducers({
    counter,
    counterB
});

// export const initializeStore = (preloadedState = initialState) => {
export const initializeStore = (preloadedState = {}) => {
  return createStore(
    reducer,
    undefined, // preloadedStateが使われるのだが初期値とすべき値が思いつかないので一旦なし
    composeWithDevTools(applyMiddleware())
  )
}
