import React from 'react';
import {StyleSheet, Text, View, Image, TextInput, ScrollView, FlatList} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

//Components
import ListCategories from '../components/ListCategories';
import Card from '../components/Card';

//Data
import foods from '../consts/foods';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screen.header}>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{color: '#000', fontSize: 26}}>Hello,</Text>
            <Text
              style={{
                color: '#000',
                fontSize: 26,
                fontWeight: 'bold',
                marginLeft: 10,
              }}>
              Yassine
            </Text>
          </View>
          <Text style={styles.screen.header.subtitle}>What do you want</Text>
        </View>
        <Image
          style={styles.screen.header.profil}
          source={require('../images/person.jpg')}
        />
      </View>
      <View
        style={{marginTop: 40, flexDirection: 'row',paddingHorizontal: 20,}}>
        <View style={styles.screen.inputContainer}>
          <Icon name="search" size={26}/>
          <TextInput style={{flex: 1,fontSize: 18}} placeholder='Search for food'/>
        </View>
        <View style={styles.screen.sortBtn}>
          <Icon name='tune' color={Colors.white} size={28}/>
        </View>
      </View>
      <View style={{paddingHorizontal: 20,}}><ListCategories/></View>
      <FlatList key={'#'} horizontal={false} showsVerticalScrollIndicator={false} numColumns={2} data={foods} renderItem={({item})=><Card food={item} navigation={navigation}/>}/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
    header: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: 20,
      marginTop: 20,
      subtitle: {
        fontSize: 18,
        marginTop: 5,
      },
      profil: {
        height: 50,
        width: 50,
        borderRadius: 25,
      },
    },
    inputContainer: {
      flex: 1,
      height: 50,
      borderRadius: 10,
      flexDirection: 'row',
      backgroundColor: Colors.light,
      alignItems: 'center',
      paddingHorizontal: 20,
    },
    sortBtn: {
      width: 50,
      height: 50,
      marginLeft: 10,
      backgroundColor: Colors.primary,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
    }
  },
});

export default HomeScreen;
