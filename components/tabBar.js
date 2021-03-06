import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import FlightsListContainer from './flightslist/flightsListContainer'
import WishListContainer from './wishlist/wishListContainer'

const Tab = createMaterialTopTabNavigator()

const Tabs = () => {

    return (
        <Tab.Navigator
            initialRouteName="Browse"
            tabBarOptions={{
                labelStyle: {
                    fontSize: 17,
                    fontFamily: 'Abel',
                    textTransform: 'none',
                    fontStyle: 'normal',
                    fontWeight: 'normal',
                    lineHeight: 22,
                    letterSpacing: -0.408,
                    color: '#000000',
                },
                tabStyle: {
                },
                indicatorStyle: {
                    width: '50%',
                    height: 3,
                    backgroundColor: '#1157A7',
                    borderRadius: 2,
                    marginBottom: 5
                },
                style: {
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowColor: '#000000',
                    shadowOpacity: 0.15,
                },
            }}>
            <Tab.Screen name="Browse" component={FlightsListContainer} options={{ tabBarLabel: 'Browse' }} />
            <Tab.Screen name="Favourites" component={WishListContainer} options={{ tabBarLabel: 'Favourites' }} />
        </Tab.Navigator>
    )
}

export default Tabs
