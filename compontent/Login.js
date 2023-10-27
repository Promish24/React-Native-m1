
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity , StyleSheet,Image } from 'react-native';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    navigation.navigate('Listofpatient')
  };

  return (
    <View style={styles.container}>
        <Image
        source={require('../assets/Logo.jpg')} 
        style={styles.image}
      />
      <Text style={styles.title}>CLINICAL DBMS</Text>
      <TextInput 
        style={styles.input}
        placeholder="ENTER YOUR PIN"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="SIGN IN"
        secureTextEntry={true}
        value={password}
        onChangeText={setPassword}
      />
       <TouchableOpacity
        onPress={handleLogin}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    // backgroundColor:"#123248",
    alignItems:"center",
  },
  image: {
    width: 200, // Adjust the width as needed
    height: 200, // Adjust the height as needed
    marginBottom:20,
  },  
  button: {
    backgroundColor: "#123248",
    padding:10,
    alignItems:'center',
    marginBottom:10
  },
  buttonText:{
    color:'#fff'
  },
});

export default Login;
