import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import Home from '../assets/icons/home.png';
import Logo from '../assets/icons/logo.png';
import User from '../assets/icons/user.png';
import Main from '../assets/images/main.png';
import SearchField from '../components/SearchField';
import DropDown from '../components/Dropdown';

const UserScreen = ({navigation}) => {
  const handleSearch = (text) => {
    console.log('Search text:', text);
  };

  const handleSubmit = () => {
    console.log('Search submitted');
  };
const handlePressButton=()=>{
  navigation.navigate('main')
}
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView>
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
        <View style={styles.contact}>
          <Text style={styles.contactText}>Contact US</Text>
          <Text style={styles.emailText}>contact@adsPushUp.com</Text>
        </View>
        <View style={styles.workContainer}>
          <Text style={styles.contactText}>How it Works</Text>
          <View>
            <Image style={styles.image} source={Main} />
          </View>
          <View>
            <Text style={styles.audienceText}>Update your Audience profile</Text>
          </View>
          <View style={styles.Searchcontainer}>
            <SearchField
              placeholder="Search"
              onChangeText={handleSearch}
              onSubmit={handleSubmit}
            />
          </View>
        </View>
        <View style={styles.audienceContainer}>
        <Text style={{width:200,color:'#717171',fontSize:14}}>What location are your Audience based?</Text>
        <View>
          <DropDown/>
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
        <View style={styles.navigationBar}>
        <TouchableOpacity style={styles.navigationBarItem} onPress={handlePressButton} >
          <Image source={Home} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={Logo} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navigationBarItem}>
          <Image source={User} />
        </TouchableOpacity>
      </View>
      </ScrollView>
     
    </KeyboardAvoidingView>
  );
};


export default UserScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    fontFamily: 'Poppins',
  },
  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 25,
    paddingHorizontal:20
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

  contact: {
    display: 'flex',
    flexDirection: 'column',
    gap: 4,
    paddingHorizontal: 20,
  },
  contactText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#041632',
  },
  emailText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#041632',

  },
  audienceText:{
    fontSize: 16,
    fontWeight: '700',
    color: '#041632',
    marginBottom:10
  },
  workContainer: {
    padding: 20,
  },

  image: {
    width: '100%',
    resizeMode: 'contain',
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
  audienceContainer:{
    display:'flex',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    marginBottom:13
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
  
  navigationBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical:20
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
