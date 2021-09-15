import React from "react";
import {StyleSheet} from "react-native";
import {View, Text} from "react-native";

const PostDetails = (props) => {
    console.log(props);

    let {route: {params: {data}}, navigation} = props;

    return <View style={styles.postDetail}>
        <Text>
            Id post: {data.id}.
            Post title: {data.title},
            Text: {data.body}

            (user Id: {data.userId})
        </Text>
    </View>;

};
export default PostDetails;

const styles = StyleSheet.create({
    postDetail: {
        flex: 1,
        backgroundColor: 'rgb(0,255,255)',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5,
        borderRadius: 10
    },
});
