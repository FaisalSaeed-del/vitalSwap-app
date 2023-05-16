import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, TextInput } from 'react-native';
import Msg from '../assets/images/msg.png';

const Mailscreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [showTokenField, setShowTokenField] = useState(false);
  const [token, setToken] = useState('');

  const handleEmailChange = (text) => {
    setEmail(text);
  };

  const handleContinue = () => {
    setShowTokenField(true);
  };

  const handleTokenChange = (text) => {
    setToken(text);
  };

  const handleTokenContinue = () => {
    navigation.navigate('passcode'); // Replace 'PasswordScreen' with the actual name of your password screen component
  };

  return (
    <View style={styles.container}>
      <Image source={Msg} />
      <Text style={styles.text}>
        Enter your email or swapTag from vitalswap to complete your login
      </Text>

      {!showTokenField && (
        <TextInput
          style={styles.input}
          placeholder="Enter your email or swapTag"
          value={email}
          onChangeText={handleEmailChange}
        />
      )}

      {showTokenField && (
        <>
          <TextInput
            style={styles.input}
            placeholder="Enter your token"
            value={token}
            onChangeText={handleTokenChange}
          />

          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={handleTokenContinue}>
              <Text style={styles.buttonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </>
      )}

      {!showTokenField && (
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={handleContinue}>
            <Text style={styles.buttonText}>Continue</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Mailscreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
    display: 'flex',
    flexDirection: 'column',
    gap: 40,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 18,
    textAlign: 'center',
    color: '#222222',
    width: 273,
    lineHeight: 30,
  },
  input: {
    width: 273,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderColor: '#D8D8D8',
    borderWidth: 1,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 100,
    paddingVertical: 10,
    backgroundColor: '#041632',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 40,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontFamily: 'Poppins',
    fontWeight: 'normal',
  },
});
