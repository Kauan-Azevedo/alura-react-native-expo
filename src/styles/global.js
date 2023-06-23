import { Dimensions, StyleSheet } from 'react-native';

const width = Dimensions.get('screen').width;
const proportion = (578 / 768).toFixed(2);

export default StyleSheet.create({
    headerImg: {
        width: '100%',
        height: proportion * width,
    },
    headerTxt: {
        width: '100%',
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 24,
        lineHeight: 26,
        position: 'absolute',
        top: 25,
    },
    cartDiv: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    cartTitle: {
        color: '#464646',
        fontSize: 26,
        lineHeight: 42,
        fontWeight: 'bold',
    },
    cartOwner: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 12,
        marginLeft: 12,
    },
    ownerImg: {
        width: 32,
        height: 32,
    },
    ownerTxt: {
        fontSize: 16,
        lineHeight: 26,
    },
    description: {
        color: '#a3a3a3',
        fontSize: 16,
        lineHeight: 26,
    },
    valueTxt: {
        color: '#2a9f85',
        fontWeight: 'bold',
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8,
    },
    button: {
        marginTop: 16,
        backgroundColor: '#2A9f85',
        paddingVertical: 16,
        borderRadius: 6,
    },
    btnText: {
        textAlign: 'center',
        color: '#fff',
        fontSize: 16,
        lineHeight: 26,
        fontWeight: 'bold',
    },
    cartList: {
        width: '100%',
        fontFamily: 'MontserratBold',
        fontSize: 26,
        lineHeight: 42,
        textAlign: 'center',
    },
    cartItem: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 6,
        padding: 7,
        borderRadius: 12,
        gap: 12,
        borderBottomWidth: 2,
        borderColor: '#ececec',
    },
    cartImg: {
        borderRadius: 999,
        width: 46,
        height: 46,
    },
    cartTxt: {
        fontSize: 16,
        lineHeight: 26,
        fontFamily: 'MontserratRegular',
        color: '#464646',
    },
});
