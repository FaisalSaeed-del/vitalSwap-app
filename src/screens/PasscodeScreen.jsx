import { View, Text, Image, StyleSheet, TouchableOpacity, TextInput } from 'react-native';
import Phone from '../assets/images/phone.png';
import React, { useState } from 'react';

const PasscodeScreen = ({ navigation }) => {
  const [password, setPassword] = useState('');

  const handleButtonPress = () => {
    navigation.navigate('login');
  };

  const handlePasswordChange = (value) => {
    setPassword(value);
  };

  return (
    <View style={styles.container}>
      <Image source={Phone} />
      <Text style={styles.text}>
        Secure your account, create a 4-digit passcode to continue.
      </Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          secureTextEntry
          keyboardType="numeric"
          maxLength={1}
          value={password.charAt(0)}
          onChangeText={(value) => handlePasswordChange(value)}
        />
        <TextInput
          style={styles.passwordInput}
          secureTextEntry
          keyboardType="numeric"
          maxLength={1}
          value={password.charAt(1)}
          onChangeText={(value) => handlePasswordChange(password.charAt(0) + value)}
        />
        <TextInput
          style={styles.passwordInput}
          secureTextEntry
          keyboardType="numeric"
          maxLength={1}
          value={password.charAt(2)}
          onChangeText={(value) => handlePasswordChange(password.charAt(0) + password.charAt(1) + value)}
        />
        <TextInput
          style={styles.passwordInput}
          secureTextEntry
          keyboardType="numeric"
          maxLength={1}
          value={password.charAt(3)}
          onChangeText={(value) =>
            handlePasswordChange(password.charAt(0) + password.charAt(1) + password.charAt(2) + value)
          }
        />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
          <Text style={styles.buttonText}>Create a passcode</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PasscodeScreen;

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
  passwordContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  passwordInput: {
    width: 60,
    height: 60,
    marginHorizontal: 5,
    paddingHorizontal: 10,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    borderColor: '#D8D8D8',
    borderWidth: 1,
    fontSize: 24,
    textAlign: 'center',
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
