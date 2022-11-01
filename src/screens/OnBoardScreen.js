import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

import {SafeAreaView} from 'react-native-safe-area-context';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import Button from '../components/Button';
import colors from '../consts/colors';

const OnBoardScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.screen.header}>
        <Image
          style={styles.screen.header.image}
          source={require('../images/onboardImage.png')}
        />
      </View>
      <View style={styles.screen.main}>
        <View style={styles.screen.main.heading}>
          <Text style={styles.screen.main.heading.title}>Delecious Food</Text>
          <Text style={styles.screen.main.heading.subtitle}>
            We help you to find best and delicious food
          </Text>
        </View>
        <View style={styles.screen.main.indicators}>
          <View style={styles.screen.main.indicators.current}></View>
          <View style={styles.screen.main.indicators.indicator}></View>
          <View style={styles.screen.main.indicators.indicator}></View>
        </View>
        <Button title="Get Started" type='primary' onPress={()=>navigation.navigate("Home")}/>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.white,
    header: {
      height: 400,
      image: {
        width: '100%',
        resizeMode: 'contain',
        top: -150,
      },
    },

    main: {
      flex: 1,
      paddingHorizontal: 50,
      justifyContent: 'space-between',
      paddingBottom: 40,
      heading: {
        title: {
          color: '#000',
          fontSize: 32,
          fontWeight: 'bold',
          textAlign: 'center',
        },
        subtitle: {
          color: '#000',
          marginTop: 20,
          fontSize: 18,
          textAlign: 'center',
        },
      },
      indicators: {
        height: 50,
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        current: {
          height: 12,
          width: 30,
          borderRadius: 10,
          backgroundColor: colors.red,
          marginHorizontal: 5,
        },
        indicator: {
          height: 12,
          width: 12,
          overflow: 'hidden',
          borderRadius: 60,
          backgroundColor: colors.red,
          marginHorizontal: 5,
        },
      },
    },
  },
});

export default OnBoardScreen;
