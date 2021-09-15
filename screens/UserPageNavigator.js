import React from 'react';
import {StyleSheet} from 'react-native';
import Users from "../components/Users";
import UserDetails from "./UserDetails";

import {createStackNavigator} from "@react-navigation/stack";

let StackNavigator = createStackNavigator();

const UserPageNavigator = () => {

    return (
            <StackNavigator.Navigator initialRouteName='Users'>
                <StackNavigator.Screen name={'Users'} component={Users}/>
                <StackNavigator.Screen name={'UserDetails'} component={UserDetails}/>
            </StackNavigator.Navigator>
    );
}

export default UserPageNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,255,255,0.17)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%'
    },
});
