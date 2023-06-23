import React from 'react';
import Header from './components/header';
import Details from './components/details';
import { View, FlatList } from 'react-native';
import Item from './components/item';

export default function Cart({ header, details, itens }) {
    return (
        <>
            <FlatList
                data={itens.list}
                renderItem={Item}
                keyExtractor={({ name }) => name}
                ListHeaderComponent={() => {
                    return (
                        <>
                            <Header {...header} />
                            <View>
                                <Details {...details} />
                            </View>
                        </>
                    );
                }}
            />
        </>
    );
}
