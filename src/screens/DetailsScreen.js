import React from 'react';
import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Button from '../components/Button';
import colors from '../consts/colors';

const DetailsScreen = ({navigation, route}) => {
  const food = route.params;
  return (
    <SafeAreaView style={{backgroundColor: Colors.white}}>
      <View style={styles.header}>
        <Icon
          name="arrow-back-ios"
          size={28}
          color={'#000'}
          onPress={navigation.goBack}
        />
        <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
          Details
        </Text>
      </View>
      <ScrollView>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 30,
          }}>
          <Image source={food.image} style={{width: 220, height: 220}} />
        </View>
        <View style={styles.details}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <Text
              style={{fontSize: 25, fontWeight: 'bold', color: Colors.white}}>
              {food.name}
            </Text>
            <View style={styles.iconContainer}>
              <Icon name="favorite-border" color={colors.red} size={25} />
            </View>
          </View>
          <Text style={styles.detailsText}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries.
          </Text>
          <View style={{marginTop: 40, marginBottom: 40}}>
            <Button title="Add To Cart" type="secondary" />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    marginHorizontal: 20,
  },
  iconContainer: {
    backgroundColor: Colors.white,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
  },
  detailsText: {
    color: Colors.white,
    marginTop: 10,
    lineHeight: 22,
    fontSize: 16,
  },
  details: {
    paddingHorizontal: 20,
    paddingTop: 40,
    paddingBottom: 60,
    backgroundColor: colors.red,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
  },
});

export default DetailsScreen;
