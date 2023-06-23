import React from 'react';
import TextField from '../../../components/TextField';
import { Image, View, FlatList } from 'react-native';
import S from '../../../styles/global.js';

export default function Item({ item: { name, img } }) {
    return (
        <>
            <View style={S.cartItem} key={name}>
                <Image source={img} style={S.cartImg} />
                <TextField style={S.cartTxt}>{name}</TextField>
            </View>
        </>
    );
}
