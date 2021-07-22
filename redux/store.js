import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'
import flightsListReducer, { rootSaga } from './flightsListReducer'

let reducer = combineReducers({
  flightsList: flightsListReducer
})

const sagaMiddleware = createSagaMiddleware()
const store = createStore(reducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)

window.__store__ = store

export default store