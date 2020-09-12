import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export const DonationsList = ({navigation}) => {
    let donations = 0
    return (
        <View style={styles.block}>
            {donations === 0 ? <Text style={styles.text}>У Вас пока нет сборов.{"\n"} Начните доброе дело.</Text> : null}
            <View style={styles.button}>
                <Button style={styles.buttonText} 
                color='#fff' 
                title='Создать сбор'
                onPress={()=> navigation.navigate('Тип сбора')}></Button>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    block: {
        marginTop: '70%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        margin: 10,
        fontSize: 20
    },
    button: {
        backgroundColor: '#3F8AE0',
        borderRadius: 10,
        padding: 1,
        marginTop: 15,
        paddingHorizontal: 7,
        alignItems: "center"
    },
    text: {
        color: '#818C99',
        fontSize: 18,
        fontWeight: 'normal',
        paddingBottom: 10
    }
})