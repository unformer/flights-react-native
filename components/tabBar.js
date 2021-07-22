import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import FlightsListContainer from './flightslist/flightsListContainer'
import WishListContainer from './wishList/wishListContainer'

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
                    textAlign: 'center',
                    letterSpacing: -0.408,
                    color: '#000000',
                },
                tabStyle: {
                },
                indicatorStyle: {
                    width: 147.5,
                    left: 20,
                    right: 20,
                    height: 3,
                    backgroundColor: '#1157A7',
                    borderRadius: 2,
                    marginBottom: 5
                },
                style: {
                    alignItems: 'space-between',
                    textAlign: 'center',
                    boxShadow: 'none',
                    backgroundColor: 'rgba(255, 255, 255, 0.94)',
                    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.15)'
                },
            }}>
            <Tab.Screen name="Browse" component={FlightsListContainer} options={{ tabBarLabel: 'Browse' }} />
            <Tab.Screen name="Favourites" component={WishListContainer} options={{ tabBarLabel: 'Favourites' }} />
        </Tab.Navigator>
    )
}

export default Tabs
