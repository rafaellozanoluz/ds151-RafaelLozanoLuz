import React from "react";
import { View, Text, Button } from "react-native";


function HomeScreen ({navigation}) {
    return (
        <View style={{ flex:2, alignItems:'center', justifyContent: 'center'}}>
            <h1>Tela Inicial</h1>
            <Button title="Ir para tela 2" 
                onPress={ () => navigation.navigate('Home2')}
            />
            <Button title="Calculo de média"
                    onPress={ () => navigation.navigate('Form')}
            />
            <Button title="Contador"
                    onPress={ () => navigation.navigate('CounterScreen')}
            />
            <Button title="ColorList"
                    onPress={ () => navigation.navigate('ColorList')}
            />
        </View>
    );
}


export default HomeScreen;

