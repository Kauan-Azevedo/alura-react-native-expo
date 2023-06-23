import React from 'react';
import { Image, View } from 'react-native';
import TextField from '../../../components/TextField';
import Button from '../../../components/Button';
import S from '../../../styles/global.js';

export default function Details({
    title,
    owner,
    description,
    price,
    img,
    button,
}) {
    return (
        <>
            <TextField style={S.cartTitle}>{title}</TextField>

            <View style={S.cartOwner}>
                <Image source={img} style={S.ownerImg} />
                <TextField style={S.ownerTxt}>{owner}</TextField>
            </View>

            <TextField style={S.description}>{description}</TextField>
            <TextField style={S.valueTxt}>{price}</TextField>

            <Button style={S.button}>{button}</Button>
        </>
    );
}
