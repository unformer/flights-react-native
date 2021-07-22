import React from 'react'
import { StyleSheet, ScrollView } from 'react-native'
import ListItem from '../listItem'

const FlightsList = (props) => {
    return (
        <ScrollView style={styles.container}>
            {props.flightsList.map(f =>
                <ListItem key={f.id} {...props} item={f} toggleWishList={props.toggleWishList} />
            )}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        backgroundColor: '#F8F8F8'
    }
})

export default FlightsList