import React from 'react'
import { View, Text, Image, StyleSheet, TouchableWithoutFeedback, ScrollView } from 'react-native'
import Moment from 'moment'
import wishYes from '../../assets/images/wish-yes.png'
import wishNo from '../../assets/images/wish-no.png'
import singleBg from '../../assets/images/single-bg.png'
import singleArrow from '../../assets/images/single-arrow.png'
import gallery1 from '../../assets/images/gallery1.png'
import gallery2 from '../../assets/images/gallery2.png'

const SingleFlyInfoPopup = (props) => {

    const { flyId, date, price } = props.route.params

    const inWish = props.list.filter(l => l.id === flyId)[0].inWish

    return (
        <ScrollView style={styles.wrap}>
            <TouchableWithoutFeedback onPress={() => props.navigation.goBack()}>
                <Image
                    style={styles.bg}
                    source={singleBg}
                />
            </TouchableWithoutFeedback>
            <View style={styles.content}>

                <TouchableWithoutFeedback onPress={() => { props.toggleWishList(flyId) }}>
                    <View style={styles.wishWrap}>
                        <Image
                            style={styles.wishIcon}
                            source={inWish ? wishYes : wishNo}
                        />
                    </View>
                </TouchableWithoutFeedback>

                <View style={styles.dateWrap}>
                    <View style={styles.placeBlock}>
                        <Text style={styles.date}>{Moment(date).format('DD MMM,  YYYY')}</Text>
                        <Text style={styles.place}>SVO</Text>
                        <Text style={styles.city}>Moskow</Text>
                    </View>
                    <View>
                        <Image
                            style={styles.singleArrow}
                            source={singleArrow}
                        />
                    </View>
                    <View style={styles.placeBlock}>
                        <Text style={styles.date}>15:30</Text>
                        <Text style={styles.place}>JFK</Text>
                        <Text style={styles.city}>New York City</Text>
                    </View>
                </View>
                <View style={styles.boardWrap}>
                    <View style={styles.boardBlock}>
                        <Text style={styles.boardTitle}>Price</Text>
                        <Text style={styles.timePrice}>{price} ₽</Text>
                    </View>
                    <Text style={styles.sep}></Text>
                    <View style={styles.boardBlock}>
                        <Text style={styles.boardTitle}>Boarding</Text>
                        <Text style={styles.timePrice}>19:20</Text>
                    </View>
                </View>
                <ScrollView
                    style={styles.gallery}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={10}>
                    <Image
                        style={styles.galleryItem}
                        source={gallery1}
                    />
                    <Image
                        style={styles.galleryItem}
                        source={gallery2}
                    />
                    <Image
                        style={styles.galleryItem}
                        source={gallery1}
                    />
                    <Image
                        style={styles.galleryItem}
                        source={gallery2}
                    />
                    <Image
                        style={styles.galleryItem}
                        source={gallery1}
                    />
                </ScrollView>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    wrap: {
        height: '100%',
        margin: 'auto'
    },
    bg: {
        maxWidth: 375,
        height: 385,
    },
    content: {
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOpacity: 0.15,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -32,
        maxWidth: 375,
        padding: 30,
        paddingBottom: 25
    },
    dateWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    placeBlock: {
        width: 75
    },
    singleArrow: {
        width: 8.67,
        height: 17.33,
        marginLeft: 60,
        marginRight: 75
    },
    date: {
        fontFamily: 'SFPro',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 13,
        lineHeight: 13,
        letterSpacing: -0.408,
        color: '#878787',
    },
    place: {
        fontFamily: 'Abel',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 36,
        lineHeight: 36,
        letterSpacing: -0.408,
        color: '#404040',
        paddingTop: 10,
        paddingBottom: 5
    },
    city: {
        fontFamily: 'SFPro',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 13,
        lineHeight: 13,
        letterSpacing: -0.408,
        color: '#878787',
    },
    boardWrap: {
        flexDirection: 'row',
        justifyContent: 'center',
        width: '100%',
        height: 80,
        backgroundColor: '#1157A7',
        shadowRadius: 2,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowColor: '#000000',
        shadowOpacity: 0.3,
        borderRadius: 10,
        paddingTop: 15,
        paddingBottom: 15,
        marginTop: 15
    },
    boardBlock: {
        width: 75
    },
    boardTitle: {
        fontFamily: 'SFPro',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 13,
        lineHeight: 22,
        letterSpacing: -0.408,
        color: '#FFFFFF',
        marginBottom: 3,
        textAlign: 'center'
    },
    timePrice: {
        fontFamily: 'Abel',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: 20,
        lineHeight: 22,
        letterSpacing: -0.408,
        color: '#FFFFFF',
        textAlign: 'center'
    },
    sep: {
        width: 1,
        height: 50,
        backgroundColor: '#FFFFFF',
        marginLeft: 30,
        marginRight: 30
    },
    wishWrap: {
        position: 'absolute',
        right: 0,
        zIndex: 999,
        paddingHorizontal: 10,
        paddingVertical: 10
    },
    wishIcon: {
        width: 17.42,
        height: 15.19,
        marginTop: 15,
        marginRight: 12.58,
    },
    gallery: {
        marginTop: 23,
        width: 345,
        overflow: 'hidden'
    },
    galleryItem: {
        width: 139,
        height: 200,
        marginRight: 10
    }
})

export default SingleFlyInfoPopup