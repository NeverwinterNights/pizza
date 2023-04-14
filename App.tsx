import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import Pizzas from "./src/Pizzas";
import {NavigationContainer} from "@react-navigation/native";


export default function App() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Pizzas/>
                <StatusBar style="auto"/>
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
