import React from "react";
import {StyleSheet} from "react-native";
import {View, Text, Button, TouchableOpacity} from "react-native";

const Post = (props) => {
    let {item, nav: {navigate}} = props;
    console.log(props);

    let onPress = () => {
        navigate('PostDetails', {data: item});
    };

    return <View style={styles.post}>
        <Text> {item.id}. {item.title} </Text>
        <Button title={'post details'} onPress={onPress}/>
    </View>;

};
export default Post;

const styles = StyleSheet.create({
    post: {
        flex: 1,
        backgroundColor: 'rgb(0,255,255)',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 10
    },
});
