import React from 'react'
import FlightsList from './flightsList'
import { connect } from 'react-redux'
import { GET_FLIGHTS_LIST, TOGGLE_WISHLIST } from '../../redux/flightsListReducer'

const FlightsListContainer = (props) => {

  props.flightsList.flightsList.length < 1 && props.getFlightsList()

  return (
    <FlightsList {...props} flightsList={props.flightsList.flightsList} toggleWishList={props.toggleWishList} />
  )
}

const mapStateToProps = (state) => {
  return ({
    flightsList: state.flightsList
  })
}

const mapDispatchToProps = (dispatch) => ({
  getFlightsList: () => {
    dispatch({
      type: GET_FLIGHTS_LIST
    })
  },
  toggleWishList: (flyId) => {
    dispatch({
      type: TOGGLE_WISHLIST,
      flyId: flyId
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(FlightsListContainer)




