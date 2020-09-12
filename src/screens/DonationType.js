import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export const DonationType = ({ navigation }) => {
    let donations = 0
    return (
        <View style={styles.block}>
            <TouchableOpacity onPress={() => navigation.navigate('Целевой сбор')}>
                <View style={styles.button}>
                    <Text style={styles.header}>Целевой сбор</Text>
                    <Text style={styles.description}>Когда есть определенная цель</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Регулярный сбор')}>
                <View style={styles.button}>
                    <Text style={styles.header}>Регулярный сбор</Text>
                    <Text style={styles.description}>Если помощь нужна ежемесячно</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    block: {
        marginTop: '55%',
        backgroundColor: '#fff',
        paddingHorizontal: 10,
        paddingVertical: 30,
    },
    button: {
        backgroundColor: '#F2F3F5',
        borderRadius: 10,
        padding: 5,
        marginTop: 15,
        paddingLeft:30,
        paddingVertical: 6,
        alignItems: "flex-start",
    },
    header: {
        color: '#000000',
        fontSize: 18,
        fontWeight: '500',
        paddingBottom: 4,
        paddingLeft: 5
    },
    description: {
        color: '#818C99',
        fontSize: 13,
        fontWeight: 'normal',
        paddingBottom: 5,
        paddingLeft: 5
    }
})