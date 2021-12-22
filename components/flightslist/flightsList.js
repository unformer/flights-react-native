import React from 'react'
import { Text, StyleSheet, View, ScrollView } from 'react-native'
import ListItem from '../listItem'

const FlightsList = (props) => {
    console.log('test:'+props.flightsList)
    if(props.flightsList.length === 0){
        return (
            <View style={styles.preload}>
                <Text>Loading...</Text>
            </View>   
        )     
    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {props.flightsList.map(f =>
                <ListItem key={f.id} {...props} item={f} toggleWishList={props.toggleWishList} />
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: '#F8F8F8',
        minHeight: '100%'
    },
    preload: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    }
})

export default FlightsList