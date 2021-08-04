import React from 'react'
import { Text, View, Image, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Moment from 'moment'
import plane from '../assets/images/plane.svg'
import wishYes from '../assets/images/wish-yes.svg'
import wishNo from '../assets/images/wish-no.svg'
import placeArrow from '../assets/images/place-arrow.svg'


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
                    <Text style={styles.date}>SVO - {Moment(props.item.date).format('DD MMMM,  YYYY')} - 15:30</Text>
                    <Text style={styles.company}>{props.item.company}</Text>
                </View>
                <View>
                    <TouchableWithoutFeedback onPress={() => toggle(props.item.id)}>
                        <Image
                            style={styles.wishIcon}
                            source={props.item.inWish ? wishYes : wishNo}
                        />
                    </TouchableWithoutFeedback>
                </View>
                <View style={styles.priceWrap}>
                    <Text style={styles.price}>price:
                        <Text style={styles.sum}>{props.item.price} ₽</Text>
                    </Text>
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
        shadowRadius: 2,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowColor: '#000000',
        shadowOpacity: 0.15,
        borderRadius: 8,
        marginBottom: 20,
        display: 'flex',
        flexWrap: 'wrap',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 'auto'
    },
    planeBg: {
        borderRadius: 100,
        padding: '15 0',
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
    wishIcon: {
        width: 17.42,
        height: 15.19,
        marginTop: 15,
        marginRight: 12.58
    },
    placeArrow: {
        width: 12,
        height: 8,
        marginRight: 12,
        marginLeft: 20
    },
    routeInfo: {
        marginTop: 20,
        marginRight: 20
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
        justifyContent: 'center'
    },
    price: {
        width: 299,
        textAlign: 'right',
        borderTopColor: 'rgba(196, 196, 196, 0.5)',
        borderStyle: 'solid',
        borderTopWidth: 1,
        paddingTop: 7.5,
        fontFamily: 'Abel',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 11,
        lineHeight: 22,
        letterSpacing: -0.408,
        color: '#878787'
    },
    sum: {
        fontFamily: 'SFPro',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.408,
        color: '#000000',
        marginLeft: 10
    }
})

export default ListItem