import React from 'react'
import WishList from './wishList'
import { connect } from 'react-redux'
import { GET_FLIGHTS_LIST, TOGGLE_WISHLIST } from '../../redux/flightsListReducer'

const WishListContainer = (props) => {
    return (        
        <WishList {...props} wishList={props.flightsList.flightsList} toggleWishList={props.toggleWishList} />  
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

export default connect(mapStateToProps, mapDispatchToProps)(WishListContainer)




