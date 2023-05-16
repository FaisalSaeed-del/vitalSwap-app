import {
  View,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from 'react-native';
import Search from '../assets/icons/search.png';
import React from 'react';

const SearchField = ({placeholder, onChangeText, onSubmit}) => {
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#C0C0C0"
          onSubmitEditing={onSubmit}
        />
        <TouchableOpacity style={styles.searchIcon}>
          <Image style={styles.Icon} source={Search} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchField;

const styles = StyleSheet.create({
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    width: 300,
    height: 48,
  },
  searchIcon: {
    backgroundColor: '#041632',
    width: 64,
    height: 48,
    position: 'absolute',
    right: 10,
  },
  Icon: {
    color: '#FFFFFF',
    position: 'absolute',
    top: '30%',
    left: '35%',
  },
});
