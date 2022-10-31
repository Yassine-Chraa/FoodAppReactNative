import React from 'react';
import { Text, View, StyleSheet, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Colors } from 'react-native/Libraries/NewAppScreen';
const CartCard = ({food}) => {
  return (
    <View style={styles.cartCard}>
        <Image source={food.image} style={{height: 80, width: 80}} />
        <View
          style={{
            height: 100,
            marginLeft: 10,
            paddingVertical: 20,
            flex: 1,
          }}>
          <Text style={{fontWeight: 'bold', fontSize: 16}}>{food.name}</Text>
          <Text style={{fontSize: 13, color: Colors.grey}}>
            {food.ingredients}
          </Text>
          <Text style={{fontSize: 17, fontWeight: 'bold'}}>${food.price}</Text>
        </View>
        <View style={{marginRight: 20, alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>3</Text>
          <View style={styles.actionBtn}>
            <Icon name="remove" size={25} color={Colors.white} />
            <Icon name="add" size={25} color={Colors.white} />
          </View>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
    cartCard:{
        flexDirection: 'row',
        alignItems: 'center',
        elevation: 15,
        borderRadius: 10,
        backgroundColor: Colors.white,
        marginVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 10,
    },
    actionBtn:{
        backgroundColor: Colors.primary,
        borderRadius: 16,
        paddingHorizontal: 12,
        paddingVertical: 3,
        marginTop: 4,
        flexDirection: 'row',
        justifyContent: 'center',
        alignContent: 'center',
    }
});
export default CartCard;
