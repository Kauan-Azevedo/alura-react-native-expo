import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Cart from './src/pages/Cart';
import {
    useFonts,
    Montserrat_400Regular,
    Montserrat_700Bold,
} from '@expo-google-fonts/montserrat';
import mock from './src/mocks/cart.js';
import AppLoading from 'expo-app-loading';

export default function App() {
    const [loadFont] = useFonts({
        MontserratRegular: Montserrat_400Regular,
        MontserratBold: Montserrat_700Bold,
    });

    if (!loadFont) {
        return <AppLoading />;
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <Cart {...mock} />
        </SafeAreaView>
    );
}
