import { View, Text, StatusBar } from 'react-native'
import React, { useState, useEffect } from 'react';
// import { createStackNavigator } from '@react-navigation/stack';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../theme/color';

import Login from '../screens/Login/Login';
import Country from '../screens/Login/Country';
import Cities from'../screens/Login/Cities';
import City from '../screens/Login/City';
import Finger from '../screens/Login/Finger';
import Forgot from '../screens/Login/Forgot';
import NewPass from '../screens/Login/NewPass';
import Signup from '../screens/Signup/Signup';
import Congrates from '../screens/Signup/Congrates';
import Location1 from '../screens/Signup/Location1';
import PayDetail from '../screens/Profile/PayDetail';
import EditS from '../screens/Profile/EditS';
import EditP from '../screens/Profile/EditP';
import Profile from '../screens/Profile/Profile';
import DStatus from '../screens/Cart/DStatus';
import PSuccess from '../screens/Cart/PSuccess';
import Payment from '../screens/Cart/Payment';
import Pay from '../screens/Cart/Pay';
import Shipping from '../screens/Profile/Shipping';
import ShipD from '../screens/Cart/ShipD';
import Splash from '../screens/Splash';
import Intro1 from '../screens/Introduction/Intro1';
import Intro2 from '../screens/Introduction/Intro2';
import Intro3 from '../screens/Introduction/Intro3';
import Otp from '../screens/Login/Otp';
import Otp1 from '../screens/Login/Otp1';
import Otp2 from '../screens/Signup/Otp2';
import Location from '../screens/Signup/Location';
import Home from '../screens/Home/Home';
import Category from '../screens/Category/Category';
import NArrives from '../screens/Home/NArrives';
import Wishlist from '../screens/Home/Wishlist';
import Search from '../screens/Home/Search';
import Scan from '../screens/Home/Scan';
import Notification from '../screens/Notification/Notification';
import SDetail from '../screens/Home/SDetail';
import HDetail from '../screens/Home/HDetail';
import Review from '../screens/Home/Review';
import Cart from '../screens/Cart/Cart';

import MyTabs from './BottomNavigator';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {

  const [showSplashScreen, setshowSplashScreen] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setshowSplashScreen(false);
    }, 4000);


  }, [])

  return (

    <NavigationContainer>

      <Stack.Navigator>

        {
          showSplashScreen ?
            <Stack.Screen
              name="Splash"
              component={Splash}
              options={{ headerShown: false }} />
            : null
        }
        <Stack.Screen
          name="Intro1"
          component={Intro1}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Intro3"
          component={Intro3}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Intro2"
          component={Intro2}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Cart"
          component={Cart}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Review"
          component={Review}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="HDetail"
          component={HDetail}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="SDetail"
          component={SDetail}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Notification"
          component={Notification}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Scan"
          component={Scan}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Wishlist"
          component={Wishlist}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="NArrives"
          component={NArrives}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Category"
          component={Category}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Location"
          component={Location}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Otp1"
          component={Otp1}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Otp2"
          component={Otp2}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="Otp"
          component={Otp}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="ShipD"
          component={ShipD}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Shipping"
          component={Shipping}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Pay"
          component={Pay}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Payment"
          component={Payment}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="PSuccess"
          component={PSuccess}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="DStatus"
          component={DStatus}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="EditP"
          component={EditP}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="EditS"
          component={EditS}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="PayDetail"
          component={PayDetail}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Location1"
          component={Location1}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Congrates"
          component={Congrates}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="NewPass"
          component={NewPass}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Forgot"
          component={Forgot}
          options={{ headerShown: false }} />

        <Stack.Screen
          name="Finger"
          component={Finger}
          options={{ headerShown: false }} />
<Stack.Screen
          name="Country"
          component={Country}
          options={{ headerShown: false }}
        />

        <Stack.Screen
                  name="Cities"
                  component={Cities}
                  options={{ headerShown: false }}
                />

         <Stack.Screen
                            name="City"
                            component={City}
                            options={{ headerShown: false }}
         />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>

  )
}