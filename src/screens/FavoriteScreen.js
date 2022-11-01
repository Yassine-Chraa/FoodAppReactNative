import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../consts/colors';
import favorites from '../consts/favorites';

const FavoriteScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={styles.header}>
        <Icon
          name="arrow-back-ios"
          color={'#000'}
          size={28}
          onPress={navigation.goBack}
        />
        <Text style={{color: '#000', fontSize: 20, fontWeight: 'bold'}}>
          Favorite
        </Text>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingBottom: 80}}
        data={favorites}
        renderItem={({item}) => (
          <View style={styles.cartCard}>
            <Image source={item.image} style={{height: 80, width: 80}} />
            <View
              style={{
                height: 100,
                marginLeft: 10,
                paddingVertical: 20,
                flex: 1,
              }}>
              <View style={{flexDirection: 'row',justifyContent: 'space-between'}}>
                <Text style={{color: '#000', fontWeight: 'bold', fontSize: 16}}>
                  {item.name}
                </Text>
                <TouchableOpacity activeOpacity={0.8}><Icon name="favorite" color={colors.red} size={25} /></TouchableOpacity>
              </View>
              <Text style={{fontSize: 13, color: '#1e5128', fontWeight: '500'}}>
                {item.ingredients}
              </Text>
              <Text style={{color: '#000', fontSize: 17, fontWeight: 'bold'}}>
                ${item.price}
              </Text>
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
  cartCard: {
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 15,
    borderRadius: 10,
    backgroundColor: Colors.white,
    marginVertical: 10,
    marginHorizontal: 20,
    paddingHorizontal: 10,
  },
});

export default FavoriteScreen;
