import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

const DropDown = () => {
  const [selectedValue, setSelectedValue] = useState(''); // Set default value to "Africa"
  const [isOpen, setIsOpen] = useState(false);
  const dropdownItems = [
    { label: '1', value: 'option1' },

  ];

  return (
    <View style={styles.container}>
      <DropDownPicker
        items={dropdownItems}
        defaultValue={selectedValue}
        containerStyle={styles.dropdownContainer}
        style={styles.dropdown}
        dropDownStyle={styles.dropdownMenu}
        onChangeItem={(item) => setSelectedValue(item.value)}
        onOpen={() => setIsOpen(true)}
        onClose={() => setIsOpen(false)}
        open={isOpen}
      />
      {selectedValue && (
        <Text style={styles.selectedValue}>
          {selectedValue}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dropdownContainer: {
    height: 38,
    width: 78,
    backgroundColor: '#FFFFFF',
    borderRadius: 5,
    marginBottom: 20,
  },
  dropdownMenu: {
    backgroundColor: '#FFFFFF',
  },
  selectedValue: {
    fontSize: 10,
  },
});

export default DropDown;
