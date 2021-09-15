import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from "@react-navigation/native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from "./components/Home";
import UserPageNavigator from "./screens/UserPageNavigator";
import PostPageNavigator from "./screens/PostPageNavigator";

let BottomTabNavigator = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <BottomTabNavigator.Navigator tabBarOption={{tabStyle: {justifyContent: 'center', alignItems: 'center'}}}>
                <BottomTabNavigator.Screen options={{headerShown: false}} name={'home'} component={Home}/>
                <BottomTabNavigator.Screen options={{headerShown: false}} name={'users'} component={UserPageNavigator}/>
                <BottomTabNavigator.Screen options={{headerShown: false}} name={'posts'} component={PostPageNavigator }/>
            </BottomTabNavigator.Navigator>

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


