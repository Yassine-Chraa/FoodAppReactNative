import React from 'react';
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import categories from '../consts/categories';

const ListCategories = () => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingVertical: 30,
        alignItems: 'center',
      }}>
      {categories.map((category,ind) => (
        <TouchableOpacity key={ind} activeOpacity={0.8} onPress={()=>setSelectedCategoryIndex(ind)}>
          <View
            style={{
              backgroundColor:
                selectedCategoryIndex == ind ? Colors.primary : '#e4e',
              ...styles.categoryBtn,
            }}>
            <View style={styles.categoryBtn.image}>
              <Image
                source={category.image}
                style={{height: 35, width: 35, resizeMode: 'cover'}}
              />
            </View>
            <Text
              style={{
                fontSize: 15,
                fontWeight: 'bold',
                marginLeft: 10,
                color: selectedCategoryIndex == ind ? Colors.white : '#222',
              }}>
              {category.name}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
      
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryBtn: {
    flexDirection: 'row',
    width: 120,
    height: 45,
    marginRight: 7,
    alignItems: 'center',
    borderRadius: 30,
    paddingHorizontal: 5,
    image: {
      height: 35,
      width: 35,
      backgroundColor: Colors.white,
      borderRadius: 30,
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
});
export default ListCategories;
