import { React, useState } from "react";
import { View, Text, TextInput, Button } from "react-native";
import ResultMedia from "../result";

export default function Form(){

    
const [nota1, setNota1] = useState(null)
const [nota2, setNota2] = useState(null)
const [messageMedia, setMessageMedia] = useState("Preencha os dados")
const [media, setMedia] = useState(null)



    return(
        <View style={{ flex:2, alignItems:'center', justifyContent: 'center'}}>
            <View>
                

                <Text>Nota 1</Text>

                <TextInput
                onChangeText={setNota1}
                placeholder=" Ex. 70"
                keyboardType="numeric"
                style={{
                       borderLeftWidth:1,
                       borderRightWidth:1,
                       borderTopWidth:1,
                       borderBottomWidth:1                
               }}
                />


                <Text>Nota 2</Text>
                
                <TextInput
                onChangeText={setNota2}
                placeholder=" Ex. 70"
                 keyboardType="numeric"
                 style={{
                        borderLeftWidth:1,
                        borderRightWidth:1,
                        borderTopWidth:1,
                        borderBottomWidth:1                
                }}
                />


                <Button 
                    title="Calcular média"
                    onPress={()=>validationMedia()}
                />

                
            <view>
                <ResultMedia messageResultMedia={messageMedia} resultMedia={media}></ResultMedia>
            </view>

            </View>
        </View>
    );
   
    function mediaCalculator(){
        setMedia(((parseFloat(nota1)+parseFloat(nota2))/2).toFixed(2))
    }

    function validationMedia(){
        if(nota1 != null && nota2 != null){
            setMessageMedia("Sua média é:")
            mediaCalculator()
        }


 }



}