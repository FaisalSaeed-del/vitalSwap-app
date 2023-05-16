import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import Home from '../assets/icons/home.png';
import Logo from '../assets/icons/logo.png';
import User from '../assets/icons/user.png';
import React from 'react';
import Items from '../components/Items';
import DropDown from '../components/Dropdown';

const MainScreen = ({navigation}) => {
  const handleButtonPress = () => {
    navigation.navigate('user');
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.LeftContent}>
          <Text style={{fontSize: 18, fontWeight: 'normal'}}>
            Hi, {''}
            <Text style={{fontWeight: '700', color: '#041632'}}>Jhonson</Text>
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontWeight: '600',
                fontStyle: 'normal',
                color: '#041632',
                fontSize: 14,
                textDecorationLine: 'underline',
              }}>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.RightContent}>
          <Text style={{fontSize: 10, fontWeight: '500'}}>
            Available Ads Revenue
          </Text>
          <Text style={{fontSize: 18, fontWeight: '600', color: '#041632'}}>
            $2,000
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Cash Out</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{flex: 2}}>
        <Items />
      </View>
      <View>
        <Text style={styles.text}>
          Get more adds when you update your audience profile
        </Text>
      </View>
      <View style={styles.audienceContainer}>
        <Text style={{width: 200, color: '#717171', fontSize: 14}}>
          What location are your Audience based?
        </Text>
        <View>
          <DropDown />
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingHorizontal: 15,
        }}>
        <Text style={{width: 180, color: '#717171', fontSize: 14}}>
          Are most of your audience Male?
        </Text>
        <View style={styles.audienceButton1}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.buttonText1}>Yes</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.audienceButton2}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.buttonText2}>No</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* Bottom Navigation Bar */}
      <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navigationBarItem}>
          <Image source={Home} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Logo} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navigationBarItem}
          >
          <Image source={User} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    fontFamily: 'Poppins',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 25,
  },
  LeftContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: 10,
  },
  RightContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 10,
  },
  text: {
    fontFamily: 'Poppins',
    fontWeight: '500',
    fontSize: 18,
    textAlign: 'center',
    color: '#222222',
    width: 283,
    lineHeight: 25,
    marginTop: 40,
    margin: 30,
  },
  buttonContainer: {
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 5,
    backgroundColor: '#041632',
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: 'Poppins',
    fontWeight: 'normal',
  },
  buttonText1: {
    color: '#FFFFFF',
    fontSize: 10,
    fontFamily: 'Poppins',
    fontWeight: 'normal',
  },
  buttonText2: {
    color: '#222222',
    fontSize: 10,
    fontFamily: 'Poppins',
    fontWeight: 'normal',
  },

  audienceButton1: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#041632',
  },
  audienceButton2: {
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    color: 'black',
  },
  audienceContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 13,
  },

  navigationBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  navigationBarItem: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    paddingHorizontal: 30,
    paddingVertical: 15,
    marginBottom: 10,
  },
});
