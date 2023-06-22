import React from "react";
import { Image, View, TouchableOpacity } from "react-native";
import TextField from "../../../components/TextField";
import S from "../../../styles/global.js"

export default function Details({ title, owner, description, price, img, button }) {
    return (
        <>
            <View style={S.cartDiv}>
                <TextField style={S.cartTitle}>{title}</TextField>

                <View style={S.cartOwner}>
                    <Image source={img} style={S.ownerImg} />
                    <TextField style={S.ownerTxt}>
                        {owner}
                    </TextField>
                </View>

                <TextField style={S.description}>
                    {description}
                </TextField>
                <TextField style={S.valueTxt}>{price}</TextField>

                <TouchableOpacity style={S.button}>
                    <TextField style={S.btnText}>{button}</TextField>
                </TouchableOpacity>
            </View>
        </>
    )
}