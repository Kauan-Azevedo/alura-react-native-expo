import React from 'react';
import { Text } from 'react-native';

export default function TextField({ children, style }) {
    const textStyle = {
        fontFamily: style?.fontWeight === "bold" ? 'MontserratBold' : 'MontserratRegular',
        ...style,
    };

    return <Text style={textStyle}>{children}</Text>;
}
