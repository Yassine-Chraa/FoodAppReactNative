import React from 'react';
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
const Button = ({title,type, onPress = () => {}}) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View
        style={{
          ...styles.btnContainer,
          backgroundColor: type == 'primary' ? Colors.primary : '#dd4444',
        }}>
        <Text
          style={{
            ...styles.title,
            color: type == 'primary' ? Colors.white : Colors.white,
          }}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnContainer: {
    backgroundColor: '#d44',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignContent: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
export default Button;
