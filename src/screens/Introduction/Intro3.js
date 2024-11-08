import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../../theme/style'
import { Colors } from '../../theme/color'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppBar } from '@react-native-material/core';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Intro3() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg, }]}>
            <StatusBar translucent={true} backgroundColor='transparent' barStyle={'dark-content'} />
            <ImageBackground source={require('../../../assets/image/img_5.png')} resizeMode='stretch' style={{ flex: 1, justifyContent: 'space-between', paddingVertical: 50 }}>

                <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                    <Text style={[style.title, { color: Colors.active }]}>Fastest home delivery</Text>
                    <Text style={[style.r12, { color: Colors.input }]}>Shopee adds new designs every day. Explore and find the best furniture for ypur home and offices.</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <View style={[style.indicator]}></View>
                        <View style={[style.indicator]}></View>
                        <View style={[style.indicator, { backgroundColor: Colors.primary }]}></View>
                    </View>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Login')}
                    style={[style.btn,{marginHorizontal:20}]}>
                    <Text style={[style.btntxt]}>Get started</Text>
                </TouchableOpacity>

            </ImageBackground>
        </SafeAreaView>
    )
}