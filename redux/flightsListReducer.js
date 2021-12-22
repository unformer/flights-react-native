import { takeEvery, call, put, fork, all } from 'redux-saga/effects'
import { flightsAPI } from '../api/flightsApi'
import { updateObjectInArray } from '../utils/object-helpers'
import 'react-native-get-random-values'
import { v4 as uuidv4 } from 'uuid'
import Moment from 'moment'

export const GET_FLIGHTS_LIST = 'GET-FLIGHTS-LIST'
const FLIGHTS_RECEIVED = 'FLIGHTS-RECEIVED'
export const TOGGLE_WISHLIST = 'TOGGLE-WISHLIST'
const TOGGLE_WISHLIST_ASYNC = 'TOGGLE-WISHLIST-ASYNC'

const initialState = {
    flightsList: []
}

const flightsListReducer = (state = initialState, action) => {
    switch (action.type) {
        case FLIGHTS_RECEIVED:
            return {
                ...state,
                flightsList: action.flys
            }
        case TOGGLE_WISHLIST_ASYNC:
            return {
                ...state,
                flightsList: updateObjectInArray(state.flightsList, action.flyId)
            }
        default:
            return state;
    }
}

// Saga

export function* rootSaga() {
    yield all([
        fork(watchFlightsList),
        fork(watchToggle),
    ])
}

function* watchFlightsList() {
    yield takeEvery(GET_FLIGHTS_LIST, getFlightsInfo)
}

function* getFlightsInfo() {
    const flights = yield call(() => flightsAPI.getflights())
    
    Moment.locale('en')
    const now = Moment().format('YYYY-MM-DD')
    const range = Moment().add(10, 'days').format('YYYY-MM-DD')

    const items = flights.best_prices.filter( item =>
        Moment(Moment(item.depart_date).format('YYYY-MM-DD')).isSameOrAfter(now)
        && Moment(Moment(item.depart_date).format('YYYY-MM-DD')).isSameOrBefore(range))
   
    const flys = items.map(fly => ({
        id: uuidv4(),
        date: Moment(fly.depart_date).format('YYYY-MM-DD'),
        price: fly.value,
        company: fly.gate,
        inWish: false
    }))
    
    yield put({ type: FLIGHTS_RECEIVED, flys })
}


function* watchToggle() {
    yield takeEvery(TOGGLE_WISHLIST, toggleWish)
}

function* toggleWish(action) {
    yield put({ type: TOGGLE_WISHLIST_ASYNC, flyId: action.flyId })
}

export default flightsListReducer
