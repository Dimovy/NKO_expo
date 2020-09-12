import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Text, Button, Switch, TouchableOpacity } from 'react-native';

export const OtherTargetForm = ({ navigation }) => {
    const [isEnabledDate, setIsEnabledDate] = useState(true);
    const toggleSwitch = () => setIsEnabledDate(previousState => !previousState); 

    return (
        <View style={styles.block}>
            <Text style={styles.inputDescription}>Автор</Text>
            <TextInput style={styles.input} placeholder='Фамилия Имя' />
            <Text style={styles.inputDescription}>Сбор завершится</Text>
            <View style={styles.switchs}> 
            <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabledDate ? "#f4f3f4" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={isEnabledDate} />
                <Text style={styles.switchDescription}>Когда соберем сумму</Text>
                </View>
                <View style={styles.switchs}>
            <Switch trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={isEnabledDate ? "#f4f3f4" : "#f4f3f4"}
                onValueChange={toggleSwitch}
                value={!isEnabledDate} />
                <Text style={styles.switchDescription}>В определенную дату</Text>
                </View>
            {!isEnabledDate ? <Text style={styles.inputDescription}>Дата окончания</Text>:null}
            {!isEnabledDate ?<TextInput dataDetectorTypes='calendarEvent' style={styles.input} placeholder='Выберите дату' />:null}
            <TouchableOpacity onPress={() => navigation.navigate('Пожертвования')}>
                <View style={styles.button}>
                    <Button
                        color='#fff'
                        title='Создать сбор'
                        onPress={() => navigation.navigate('Пожертвования')}
                    ></Button>
                </View>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    block: {
        paddingHorizontal: '3,4%',
    },
    switchs: {
        alignItems: 'center',
        flexDirection:'row',
        paddingTop:'2%'
    },
    switchDescription: {
        color: '#000000',
        fontSize: 16,
        fontWeight: 'normal',
        paddingLeft: 15
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
        color: '#6D7885'
    }
})