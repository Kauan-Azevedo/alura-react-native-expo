import React from "react";
import { Image } from "react-native";
import TextField from "../../../components/TextField";
import S from "../../../styles/global.js"

export default function Header({ title, img }) {
    return (
        <>
            <Image source={img} style={S.headerImg} />
            <TextField style={S.headerTxt}>{title}</TextField>
        </>
    )
}