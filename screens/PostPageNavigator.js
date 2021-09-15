import React from 'react';
import {StyleSheet} from 'react-native';
import {createStackNavigator} from "@react-navigation/stack";
import Posts from "../components/Posts";
import PostDetails from "./PostDetails";

let StackNavigator = createStackNavigator();

const PostPageNavigator = () => {

    return (
        <StackNavigator.Navigator initialRouteName='Posts'>
            <StackNavigator.Screen name={'Posts'} component={Posts}/>
            <StackNavigator.Screen name={'PostDetails'} component={PostDetails}/>
        </StackNavigator.Navigator>
    );
}

export default PostPageNavigator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,255,255,0.17)',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '10%'
    },
});
