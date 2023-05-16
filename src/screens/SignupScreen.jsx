import React from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Vitals from '../assets/icons/vitals.png';
import Phone from '../assets/images/phone.png';
import Flow from '../assets/images/flow.png';

const SignupScreen = ({navigation}) => {
  const handleButtonPress = () => {
    navigation.navigate('mail');
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image source={Phone} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.imageContainer}>
          <Image source={Flow} style={styles.image} resizeMode="contain" />
        </View>
        <View style={styles.buttonContainer} >
          <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
            <Image
              source={Vitals}
              style={styles.vitalsIcon}
              resizeMode="contain"
            />
            <Text style={styles.buttonText}>Sign In with VitalSwap</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonContainer}>
          <Text style={styles.line}>
            If you don't have a Vitalswap Account,{' '}
            <Text style={styles.click}>download</Text> in 1 click
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F6F6F6',
  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 40,
  },
  imageContainer: {
    marginBottom: 30,
  },
  image: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  vitalsIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  button: {
    padding: 10,
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
  line: {
    fontFamily: 'Poppins',
    fontWeight: 'normal',
    fontSize: 16,
    textAlign: 'center',
    color: '#222222',
    width: 312,
    lineHeight:25,
  },
  click: {
    color: '#008EFF',
  },
});

export default SignupScreen;
