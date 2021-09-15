import React from "react";
import {StyleSheet} from "react-native";
import {View, Text, Button} from "react-native";

const About = () => {

    return <View style={styles.about}>
        <Text> Add different types of users in your Business Manager based on your business needs. Your Business
            Settings lists 3 types of users. It's important to know the differences between them so you can add the
            right users in the right places.

            The 3 types of users are:

            People: People are individuals that you add to your Business Manager by email. People are granted access to
            your Business Manager and assets through a 2-layer permissions system.
            Partners: Partners are other businesses, such as agencies or clients, with whom you work. Add partners to
            your Business Manager so that you can share your assets with each other. Unlike people, you can't give
            partners access to your Business Manager as admins or employees. You can only share permissions to assets
            with your partners.
            System Users: System users represent servers or software that make API calls to assets owned or managed by a
            Business Manager.
            Note: Not all accounts have access to system users. </Text>
    </View>;
};

export default About;

const styles = StyleSheet.create({
    about: {
        flex: 1,
        backgroundColor: 'rgb(0,255,255)',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 10
    },
});


