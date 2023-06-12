import React from 'react';
import { Text, StyleSheet, View, ScrollView, Image, Dimensions } from 'react-native';
import useSWR from 'swr';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const fetcher = (url) => fetch(url).then((response) => response.json());

const convertBase64ToImage = (base64String) => {
  return `data:image/jpeg;base64,${base64String}`;
};

const Feed = () => {
  const { data: posts, error: postsError } = useSWR(
    'https://api-mobile.herokuapp.com/users/1/posts',
    fetcher
  );

  if (postsError) {
    return <Text>Error loading posts</Text>;
  }

  if (!posts) {
    return <Text>Loading posts...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      {posts.map((post) => (
        <View key={post.id} style={styles.postContainer}>
          {post.content && (
            <Image
              source={{ uri: convertBase64ToImage(post.content) }}
              style={styles.contentImage}
            />
          )}
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  postContainer: {
    marginBottom: 10,
  },
  contentImage: {
    width: windowWidth,
    height: windowWidth,
    marginBottom: 10,
  },
});

export default Feed;
