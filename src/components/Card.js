import React from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
  Dimensions,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

//Get screen width
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const Card = ({food,navigation}) => {
  return (
    <TouchableHighlight
      underlayColor={Colors.white}
      activeOpacity={0.9}
      onPress={() => navigation.navigate('DetailsScreen', food)}>
      <View style={styles.card}>
        <View style={{alignItems: 'center', top: -40}}>
          <Image source={food.image} style={{height: 120, width: 120}} />
        </View>
        <View style={{marginHorizontal: 20}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>{food.name}</Text>
          <Text style={{fontSize: 14, color: '#444', marginTop: 2}}>
            {food.ingredients}
          </Text>
        </View>
        <View
          style={{
            marginTop: 10,
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>${food.price}</Text>
          <View style={styles.addToCartBtn}>
            <Icon name="add" size={20} color={Colors.white} />
          </View>
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: Colors.white,
  },
  addToCartBtn: {
    height: 30,
    width: 30,
    borderRadius: 20,
    backgroundColor: Colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
export default Card;
