import React from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'
import ListItem from '../listItem'

const FlightsList = (props) => {
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
    }
})

export default FlightsList