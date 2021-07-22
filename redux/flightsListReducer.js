import { takeEvery, call, put, fork, all } from 'redux-saga/effects'
import { flightsAPI } from '../api/flightsApi'
import Moment from 'moment'
import { updateObjectInArray } from '../utils/object-helpers'

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

    const qoutes = flights.Quotes.filter(q =>
        Moment(Moment(q.OutboundLeg.DepartureDate).format('YYYY-MM-DD')).isSameOrAfter(now)
        && Moment(Moment(q.OutboundLeg.DepartureDate).format('YYYY-MM-DD')).isSameOrBefore(range))

    const flys = qoutes.map(q => ({
        id: q.QuoteId,
        date: Moment(q.OutboundLeg.DepartureDate).format('YYYY-MM-DD'),
        price: q.MinPrice,
        company: flights.Carriers.filter(c => c.CarrierId === q.OutboundLeg.CarrierIds[0])[0].Name,
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
