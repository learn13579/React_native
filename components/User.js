import React from "react";
import {StyleSheet} from "react-native";
import {View, Text, Button, TouchableOpacity} from "react-native";

const User = (props) => {
    let {item, nav: {navigate}} = props;
    console.log(props);

    let onPress = () => {
        // console.log('press');
        navigate('UserDetails', {data: item});
    };

    return <View style={styles.user}>
        <Text> {item.id}. {item.name} </Text>
        <Button title={'user details'} onPress={onPress}/>
    </View>;

};
export default User;

const styles = StyleSheet.create({
    user: {
        flex: 1,
        backgroundColor: 'rgb(0,255,255)',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 10
    },
});
