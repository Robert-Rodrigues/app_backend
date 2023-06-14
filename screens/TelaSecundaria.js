import React, { useEffect } from 'react';
import { Text, StyleSheet, View, ScrollView, Image, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import useSWR from 'swr';
import { actionTypes } from './store';
import { Card, Avatar } from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const fetcher = (url) => fetch(url).then((response) => response.json());

const convertBase64ToImage = (base64String) => {
  return `data:image/jpeg;base64,${base64String}`;
};

const Feed = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts);

  const { data: fetchedPosts, error: postsError } = useSWR(
    'https://api-mobile.herokuapp.com/users/1/posts',
    fetcher
  );

  useEffect(() => {
    if (fetchedPosts) {
      dispatch({ type: actionTypes.SET_POSTS, payload: fetchedPosts });
    }
  }, [dispatch, fetchedPosts]);

  if (postsError) {
    return <Text>Error loading posts</Text>;
  }

  if (!posts) {
    return <Text>Loading posts...</Text>;
  }

  return (
    <ScrollView style={styles.container}>
      {posts.map((post) => (
        <Card key={post.id} style={styles.card}>
          <Card.Title
            title="Pierre Aronnax"
            left={(props) => (
              <Avatar.Image
                {...props}
                source={require('../assets/avatar.png')}
              />
            )}
          />
          {post.content && (
            <Image
              source={{ uri: convertBase64ToImage(post.content) }}
              style={styles.contentImage}
            />
          )}
          <Card.Content style={styles.cardContent}>
            <Text style={styles.title}>{post.title}</Text>
            <Text style={styles.description}>{post.description}</Text>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 2,
  },
  contentImage: {
    width: '100%',
    height: 500,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  cardContent: {
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#888',
  },
});

export default Feed;
