import React, { useState } from "react";
import { View, Button, Text } from "react-native";

function CounterScreen () {
    const [counter, setCounter] = useState(0);
    return(
        <view style={{ flex:1, alignItems:'center', justifyContent: 'center'}}>
            <Button title="Incrementa"
                    onPress={() => setCounter(counter+1)}
            />

            <Text>{counter}</Text>
        </view>
    );
}

export default CounterScreen;