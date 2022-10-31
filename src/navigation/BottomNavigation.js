import React from 'react';
import {View, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import HomeScreen from '../screens/HomeScreen';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import CartScreen from '../screens/CartScreen';
const Tab = createBottomTabNavigator();

const BottomNavigation = ({navigation}) => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarItemStyle: {
          height: 55,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarShowLabel: false,
        tabBarActiveTintColor: Colors.primary,
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="home-filled" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="LocalMall"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="local-mall" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <View
              style={{
                height:50,
                width: 50,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.white,
                borderColor: Colors.primary,
                borderWidth: 2,
                borderRadius: 30,
                top: -25,
                elevation: 5,
              }}>
              <Icon name="search" color={Colors.primary} size={28} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="favorite" color={color} size={28} />
          ),
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="shopping-cart" color={color} size={28} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;
