import { applyMiddleware, combineReducers, createStore } from "redux"
import logger from "redux-logger"

const reducer = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default: 
      return state
  }
}

const middleware = applyMiddleware(logger())
const store = createStore(reducer, middleware)

//store.display({type: "FOO"})
// receive actions and returns the state
/*const reducer1 = function(state={}, action){
  switch(action.type){
    case "INC": {
      state = {...state, name: action.payload}
      break;
    }
  }
  return state;
}

const reducer2 = function(state={}, action){
  switch(action.type){
    case "DEC": {
      state = {...state, name: action.payload}
      break;
    }
  }
  return state;
}

const reducers = combineReducers({
  reducer1: reducer1,
  reducer2: reducer2
})*/
//const store = createStore(reducers);

export default store