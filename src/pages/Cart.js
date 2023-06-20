import React from 'react';
import { StyleSheet, Image, Dimensions, Text } from 'react-native';

import topo from '../../assets/topo.png';

const width = Dimensions.get('screen').width;

export default function Cart() {
    return (
        <>
            <Image source={topo} style={styles.topo} />
            <Text style={styles.header}>Detalhes da Cesta.</Text>
            <Text>Largura do celular: {parseInt(width)}px</Text>
        </>
    );
}

const styles = StyleSheet.create({
    topo: {
        width: '100%',
        height: (578 / 768) * width,
    },
    header: {
        width: '100%',
        textAlign: 'center',
        color: '#f3f3f3',
        fontSize: '24px',
        fontWeight: 'bold',
        position: 'absolute',
        top: 10,
    },
});
