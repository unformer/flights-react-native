import React from 'react'
import { connect } from 'react-redux'
import { TOGGLE_WISHLIST } from '../../redux/flightsListReducer'
import SingleFlyInfoPopup from './singleFlyInfoPopup'


const SingleFlyInfoPopupContainer = (props) => {
  return (
    <SingleFlyInfoPopup {...props} list={props.flightsList.flightsList} toggleWishList={props.toggleWishList} />
  )
}

const mapStateToProps = (state) => {
  return ({
    flightsList: state.flightsList
  })
}

const mapDispatchToProps = (dispatch) => ({
  toggleWishList: (flyId) => {
    dispatch({
      type: TOGGLE_WISHLIST,
      flyId: flyId
    })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(SingleFlyInfoPopupContainer)




