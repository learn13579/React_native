import React from "react";
import {StyleSheet} from "react-native";
import {View, Text, Button, TouchableOpacity} from "react-native";

const UserDetails = (props) => {
    console.log(props);

    let {route: {params: {data}}, navigation} = props;

    return <View style={styles.userDetail}>
        <Text>
            Id user: {data.id}.
            Name: {data.name},
            Surname: {data.username},
            Email: {data.email},
            Phone: {data.phone},
            Website: {data.website}
            {/*Id user: <b>{data.id}</b>*/}
            {/*<br/>Name: <b>{data.name}</b>*/}
            {/*<br/>Surname: <b>{data.username}</b>*/}
            {/*<br/>Email: <b>{data.email}</b>*/}
            {/*<br/>Phone: <b>{data.phone}</b>*/}
            {/*<br/>Website: <b>{data.website}</b>*/}
        </Text>
    </View>;

};
export default UserDetails;

const styles = StyleSheet.create({
    userDetail: {
        flex: 1,
        backgroundColor: 'rgb(0,255,255)',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 10
    },
});
