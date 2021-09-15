import React, {useEffect, useState} from "react";
import {FlatList, StyleSheet} from "react-native";
import {View} from "react-native";
import {getPosts} from "../services/post.service";
import Post from "./Post";

const Posts = (props) => {
    console.log(props);

    let {navigation} = props;

    let [posts, setPosts] = useState();

    useEffect(() => {
        getPosts().then(value => setPosts([...value]))
    }, []);

    return <View>
        <FlatList
            data={posts}
            renderItem={({item}) => <Post item={item} nav={navigation}/>}
            keyExtractor={item => '' + item.id}
        />
    </View>;

};
export default Posts;

const style = StyleSheet.create({
    usersBox: {
        marginTop: '5%',
        backgroundColor: 'green',
    }
});
