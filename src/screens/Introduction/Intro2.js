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

export default function Intro2() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg, }]}>
            <StatusBar translucent={true} backgroundColor='transparent' barStyle={'dark-content'} />
            <ImageBackground source={require('../../../assets/image/img_4.png')} resizeMode='stretch' style={{ flex: 1, justifyContent: 'space-between', paddingVertical: 50 }}>

                <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                    <Text style={[style.title, { color: Colors.active }]}>Minimal Look Better quality</Text>
                    <Text style={[style.r12, { color: Colors.input }]}>Shopee adds new designs every day. Explore and find the best furniture for ypur home and offices.</Text>
                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                        <View style={[style.indicator]}></View>
                        <View style={[style.indicator, { backgroundColor: Colors.primary }]}></View>
                        <View style={[style.indicator]}></View>
                    </View>
                </View>

                <TouchableOpacity onPress={() => navigation.navigate('Intro3')}
                    style={[style.icon, { height: 70, width: 70, backgroundColor: Colors.primary, alignSelf: 'center' }]}>
                    <Icon name='arrow-forward' size={30} color='#323232' />
                </TouchableOpacity>

            </ImageBackground>
        </SafeAreaView>
    )
}