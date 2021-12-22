import React from 'react'
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Moment from 'moment'
import plane from '../assets/images/plane.png'
import wishYes from '../assets/images/wish-yes.png'
import wishNo from '../assets/images/wish-no.png'
import placeArrow from '../assets/images/place-arrow.png'


const ListItem = (props) => {

    const toggle = (flyId) => {
        props.toggleWishList(flyId)
    }

    return (
        <TouchableWithoutFeedback onPress={() => props.navigation.navigate('SingleFly', {
            flyId: props.item.id,
            date: props.item.date,
            price: props.item.price
        }
        )}>
            <View key={props.item.id} style={styles.flyBlock}>
                <View style={styles.planeBg}>
                    <Image
                        style={styles.plane}
                        source={plane}
                    />
                </View>
                <View style={styles.routeInfo}>
                    <Text style={styles.route}>Moskow <Image style={styles.placeArrow} source={placeArrow} /> New York</Text>
                    <Text style={styles.date}>MOW - {Moment(props.item.date).format('DD MMMM,  YYYY')} - 15:30</Text>
                    <Text style={styles.company}>{props.item.company}</Text>
                </View>

                <TouchableWithoutFeedback  onPress={() => toggle(props.item.id)}>
                    <View style={styles.wishIconWrap}>
                        <Image
                            style={styles.wishIcon}
                            source={props.item.inWish ? wishYes : wishNo}
                        />
                    </View>
                </TouchableWithoutFeedback>

                <View style={styles.priceWrap}>
                    <Text style={styles.price}>price:</Text>
                    <Text style={styles.sum}>{props.item.price} ₽</Text>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    flyBlock: {
        width: 335,
        height: 135,
        backgroundColor: '#FFFFFF',        
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowColor: '#000000',
        shadowOpacity: 1,
        shadowRadius: 2,
        borderRadius: 8,
        elevation: 1,
        marginBottom: 20,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    planeBg: {
        borderRadius: 100,
        paddingVertical: 15,
        width: 60,
        height: 60,
        backgroundColor: 'rgba(0, 119, 255, 0.05)',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 19,
        marginRight: 20,
        marginLeft: 20,

    },
    plane: {
        width: 33,
        height: 33
    },
    wishIconWrap: {
        paddingHorizontal: 15,
        paddingVertical: 15
    },
    wishIcon: {
        width: 17.42,
        height: 15.19,
    },
    placeArrow: {
        width: 12,
        height: 8
    },
    routeInfo: {
        marginTop: 20,
    },
    route: {
        fontFamily: 'Abel',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.408,
        color: '#000000'
    },
    date: {
        fontFamily: 'SFPro',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 13,
        lineHeight: 22,
        letterSpacing: -0.408,
        color: '#878787',
        marginTop: 2
    },
    company: {
        fontFamily: 'SFPro',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 13,
        lineHeight: 22,
        letterSpacing: -0.408,
        color: '#878787'
    },
    priceWrap: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        borderTopColor: 'rgba(196, 196, 196, 0.5)',
        borderStyle: 'solid',
        borderTopWidth: 1,
        paddingTop: 7.5,
        marginTop: 7.5
    },
    price: {        
        textAlign: 'right',      
        fontFamily: 'Abel',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 11,
        lineHeight: 22,
        letterSpacing: -0.408,
        color: '#878787',
        marginRight: 10
    },
    sum: {
        fontFamily: 'SFPro',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.408,
        color: '#000000',
        marginRight: 15
    }
})

export default ListItem