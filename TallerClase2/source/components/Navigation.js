import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

import Home from "../screens/Home";
import Agregar from "../screens/Agregar";

const Stack = createNativeStackNavigator();

function Mystack() {
    return(
        <Stack.Navigator>
            <Stack.Screen name="Inicio" component={Home}/>
            <Stack.Screen name="Agregar" component={Agregar} options={{presentation: 'card'}}/>
        </Stack.Navigator>
    )
}

export default function Navigation(){
    return(
        <NavigationContainer>
            <Mystack/>
        </NavigationContainer>
    )
}

