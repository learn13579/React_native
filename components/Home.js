import React from "react";
import {createDrawerNavigator} from '@react-navigation/drawer'
import About from "./about";
import Users from "./Users";
import Posts from "./Posts";

const Drawer = createDrawerNavigator();
const Home = () => {

    return <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="Users" component={Users} />
        <Drawer.Screen name="Posts" component={Posts} />
    </Drawer.Navigator>
};

export default Home;
