import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import Cart from './src/pages/Cart';

export default function App() {
    return (
        <SafeAreaView>
            <StatusBar />
            <Cart />
        </SafeAreaView>
    );
}
