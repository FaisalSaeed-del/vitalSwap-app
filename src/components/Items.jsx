import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Item from '../assets/images/item.png';
import Eye from '../assets/icons/eye.png';
import Copy from '../assets/icons/copy.png';
import Share from '../assets/icons/share.png';
import React from 'react';

const Items = () => {

  const navigation = useNavigation();
  const handlePressButton=()=>{
    navigation.navigate('user')
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.itemContainer}>
        {[1, 2, 3, 4, 5].map((item) => (
          <View key={item} style={styles.item}>
            <Image source={Item} style={styles.itemImage}  />
            <View style={styles.itemContent}>
              <Text style={styles.itemTitle}>Buy awesome Table top Gadget</Text>
              <View style={styles.navigationBar}>
                <TouchableOpacity style={styles.navigationBarItem} onPress={handlePressButton}>
                  <Image source={Eye} />
                  <Text style={styles.icons}>View</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navigationBarItem}>
                  <Image source={Copy} />
                  <Text style={styles.icons}>Copy</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.navigationBarItem}>
                  <Image source={Share} />
                  <Text style={styles.icons}>Share</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.information}>
                <TouchableOpacity style={styles.informationItem}>
                  <Text style={styles.informationText}>Open {''} |</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.informationItem}>
                  <Text style={styles.informationText}>0 View {''} |</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.informationItem}>
                  <Text style={styles.informationText}>$100 available</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Items;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F6F6F6',
    fontFamily: 'Poppins',
    paddingHorizontal: 15,
  },
  itemContainer: {
    borderRightColor: '#9E9E9E',
    borderRightWidth: 1,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    marginBottom: 15,
    padding: 10,
  },
  itemImage: {
    width: 90,
    height: 90,
    marginRight: 10,
  },
  itemContent: {
    flex: 1,
  },
  itemTitle: {
    fontSize: 14,
    fontFamily: 'Poppins',
    fontWeight: '500',
    color: '#041632',
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  navigationBarItem: {
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 28,
    paddingHorizontal: 10,
  },
  icons: {
    fontSize: 10,
    fontFamily: 'Poppins',
    fontWeight: '400',
    color: '#9E9E9E',
    marginTop: 3,
  },
  information: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  informationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
  },
  informationText:{
    color:'#57B160',
    fontFamily:'Poppins',
    fontWeight:'600',
    fontSize:12,
  }
});
