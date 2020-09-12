import React from 'react';
import { StyleSheet, View, TextInput, ScrollView, Text, Button, TouchableOpacity } from 'react-native';

export const TargetForm = ({ navigation }) => {
    return (
        <ScrollView style={styles.block}>
            <View style={styles.image}>
            <TouchableOpacity>
                <Text style={styles.imageDescription}>Загрузить обложку</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.inputDescription}>Название сбора</Text>
            <TextInput style={styles.input} placeholder='Название сбора' />
            <Text style={styles.inputDescription}>Сумма, руб.</Text>
            <TextInput keyboardType = 'numeric' style={styles.input} placeholder='Сколько нужно собрать?' />
            <Text style={styles.inputDescription}>Цель</Text>
            <TextInput style={styles.input} placeholder='Например, лечение человека' />
            <Text style={styles.inputDescription}>Описание</Text>
            <TextInput style={styles.input} placeholder='На что пойдут деньги и как они кому-то помогут?' />
            <Text style={styles.inputDescription}>Куда получать деньги</Text>
            <TextInput style={styles.input} placeholder='куда получать деньги' />
            <TouchableOpacity  onPress={() => navigation.navigate('Продолжение')}>
            <View style={styles.button}>
                <Button
                    color='#fff'
                    title='Далее'
                    onPress={() => navigation.navigate('Продолжение')}
                ></Button>
            </View>
            </TouchableOpacity>
        </ScrollView>
    )
}
const styles = StyleSheet.create({
    block: {
        paddingHorizontal: '3,4%',
    },
    image: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor:'#3F8AE0',
        borderWidth: 2,
        borderStyle: 'dashed',
        marginTop: 25,
        alignItems: "center",
        height: '25%',
    },
    imageDescription:{
        color:'#3F8AE0',
        paddingVertical: '19,5%',
        fontSize: 18,
        fontWeight:'500'
    },
    input: {
        borderStyle: 'solid',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#B8C1CC',
        backgroundColor: '#F2F3F5',
        height: 40,
        alignItems: 'center',
        paddingHorizontal: '3,4%'
    },
    button: {
        backgroundColor: '#3F8AE0',
        borderRadius: 10,
        marginTop: 25,
        alignItems: "center",
        height: 40,
    },
    inputDescription: {
        paddingBottom: 5,
        paddingTop: 20,
        color:'#6D7885'
    }
})