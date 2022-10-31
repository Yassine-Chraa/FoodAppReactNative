import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import foods from '../consts/foods';
import Button from '../components/Button';
import CartCard from '../components/CartCard';

const CartScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Icon name="arrow-back-ios" size={28} onPress={navigation.goBack} />
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Cart</Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={foods}
        renderItem={({item}) => <CartCard food={item} navigation={navigation}/>}
        ListFooterComponentStyle={{paddingHorizontal: 20, marginTop: 20}}
        ListFooterComponent={() => (
          <View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginVertical: 15,
              }}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Total Price
              </Text>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>$50</Text>
            </View>
            <View style={{marginHorizontal: 30}}>
              <Button title="CHECKOUT" type='primary'/>
            </View>
          </View>
        )}
      />
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
});

export default CartScreen;
