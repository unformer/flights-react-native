import React from 'react'
import { View, StyleSheet } from 'react-native'
import ListItem from '../listItem'

const WishList = (props) => {       

    return (
        <View style={styles.container}>
            {props.wishList.filter(item => item.inWish === true).map(f =>
                <ListItem key={f.id} {...props} item={f} toggleWishList={props.toggleWishList} />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: 20,
        backgroundColor: '#F8F8F8'
    }
})

export default WishList