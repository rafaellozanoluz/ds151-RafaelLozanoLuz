import { React, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";

export default function Form(){

    
const [nota1, setNota1] = useState(null)
const [nota2, setNota2] = useState(null)
const [messageMedia, setMessageMedia] = useState("preencha os dados")
const [media, setMedia] = useState(null)
const [textButton, setTextButton] = useState("Nota")



    return(
        <View>
            <View>
                
                <Text>{'\n'}</Text>

                <Text>Nota 1</Text>

                <TextInput
                placeholder=" Ex. 70"
                keyboardType="numeric"
                style={{
                       borderLeftWidth:1,
                       borderRightWidth:1,
                       borderTopWidth:1,
                       borderBottomWidth:1                
               }}
                />

                <Text>{'\n'}</Text>

                <Text>Nota 2</Text>
                
                <TextInput
                placeholder=" Ex. 70"
                 keyboardType="numeric"
                 style={{
                        borderLeftWidth:1,
                        borderRightWidth:1,
                        borderTopWidth:1,
                        borderBottomWidth:1                
                }}
                />

                <Text>{'\n'}</Text>

                <Button 
                    title="Calcular média"
                    onPress={validationMedia}
                />

            </View>
        </View>
    );
   
    function mediaCalculator(){
        return setMedia(((nota1+nota2)/2).toFixed(2))
    }

    function validationMedia(){
        if(nota1 != null && nota2 != null){
        mediaCalculator()
        setMessageMedia("Sua média é: ")
        setTextButton("Calcular Novamente")
        return
    }

    setMedia(null)
    setTextButton("Calcular")   
    setMessageMedia("preencha os dados")
 }



}