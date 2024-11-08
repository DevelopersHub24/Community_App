import React, { useContext, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from "react-native-vector-icons/Ionicons"
import Icons from 'react-native-vector-icons/MaterialCommunityIcons'
import { Colors } from '../theme/color';
import style from '../theme/style';

import Profile from '../screens/Profile/Profile';
import Home from '../screens/Home/Home';
import Category from '../screens/Category/Category';
import Notification from '../screens/Notification/Notification';
import { Card } from 'react-native-paper';
import Cart from '../screens/Cart/Cart';

const Tab = createBottomTabNavigator();

export default function MyTabs() {

  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { height: 70, backgroundColor: '#FFFFFF', borderTopColor: Colors.bord, paddingBottom: 8 },
        tabBarShowLabel: false,

      }}>

      <Tab.Screen name="Home" component={Home}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image source={require('../../assets/image/t1.png')} resizeMode='stretch'
              style={{ height: 24, width: 24, marginTop: 5 ,tintColor:focused ? Colors.primary : Colors.disable}} />
          },

          headerShown: false,
        }}
      />

      <Tab.Screen name="Category" component={Category}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image source={ require('../../assets/image/t2.png')} resizeMode='stretch'
              style={{ height: 25, width: 25, marginTop: 5 ,tintColor:focused ? Colors.primary : Colors.disable}} />
          },

          headerShown: false,
        }} />
{/* 
      <Tab.Screen name="CPost" component={CPost}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image source={require('../../assets/image/t5.png')} resizeMode='stretch' style={{ height: 24, width: 24,marginTop:5}}></Image>
          },
          headerShown: false,
          tabBarStyle: { display: 'none' },
        }} /> */}

      <Tab.Screen name="Notification" component={Notification}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image source={ require('../../assets/image/t3.png')} resizeMode='stretch'
              style={{ height: 25, width: 23, marginTop: 5 ,tintColor:focused ? Colors.primary : Colors.disable}} />
          },

          headerShown: false,
        }} />

      <Tab.Screen name="Cart" component={Cart}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused, color }) => {
            return <Image source={ require('../../assets/image/t4.png')} resizeMode='stretch'
              style={{ height: 24, width: 24, marginTop: 5 ,tintColor:focused ? Colors.primary : Colors.disable}} />
          },

          headerShown: false,
        }} />


    </Tab.Navigator>
  );
}


