import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Button } from 'react-native-paper';

const TelaInicial = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image
          source={require('../assets/logo.png')}
          style={styles.profilePicture}
        />
        <Text style={styles.description}>
          Bem-vindo(a) MyCircle, a melhor plataforma para se conectar e compartilhar momentos com amigos e familiares.
        </Text>
        <Text style={styles.description}>
          Explore postagens, faça amizades, curta e comente. Vamos começar!
        </Text>
        <Button icon="login" mode="contained" onPress={() => navigation.navigate('TelaSecundaria')}>
          Acessar
        </Button>
      </View>
    </View>
  );
};

export default TelaInicial;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
  },
  content: {
    alignItems: 'center',
    paddingHorizontal: 20,
    marginTop: 50,
    marginBottom: 50,
  },
  profilePicture: {
    width: 250,
    height: 250,
    borderRadius: 125,
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    marginBottom: 20,
    color: '#6B6E72',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#1E88E5',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
