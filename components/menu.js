import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import SingleFlyInfoPopupContainer from './single/singleFlyInfoPopupContainer'
import Tabs from './tabBar'

const Popup = createStackNavigator()

const Menu = () => {
    return (
        <NavigationContainer>
            <Popup.Navigator>
                <Popup.Screen
                    name="Home"
                    component={Tabs}
                    options={{
                        title: 'Flights',
                        headerStyle: {
                            borderBottomWidth: 0
                        },
                        headerTitleStyle: {
                            fontFamily: 'Abel',
                            fontStyle: 'normal',
                            fontWeight: 'normal',
                            fontSize: 17,
                            lineHeight: 22,
                            textAlign: 'center',
                            letterSpacing: -0.408,
                            color: 'black',
                            paddingTop: 25,
                            paddingBottom: 10
                        },
                        safeAreaInsets: 'top',
                    }} />
                <Popup.Screen name="SingleFly" component={SingleFlyInfoPopupContainer} options={{headerShown: false}} />
            </Popup.Navigator>
        </NavigationContainer>
    )
}

export default Menu
