import {StatusBar} from 'expo-status-bar';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Users from "./components/Users";
import UserDetails from "./components/UserDetails";
import {NavigationContainer} from "@react-navigation/native";
// import StackNavigator from "@react-navigation/stack/src/navigators/createStackNavigator";
import {createStackNavigator} from "@react-navigation/stack";

let StackNavigator = createStackNavigator();


export default function App() {
    return (

        <NavigationContainer>
            <StackNavigator.Navigator initialRouteName='Users'>
                <StackNavigator.Screen name={'Users'} component={Users}/>
                <StackNavigator.Screen name={'UserDetails'} component={UserDetails}/>
            </StackNavigator.Navigator>
        </NavigationContainer>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,255,255,0.17)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%'
    },
});
// <View style={styles.container}>
//
//     <StatusBar style="auto"/>
//     <Users/>
//
// </View>
