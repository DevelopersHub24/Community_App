import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../../theme/style'
import { Colors } from '../../theme/color'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper'
import { AppBar } from '@react-native-material/core';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function PSuccess() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>


                    <View style={{ marginTop: 10, flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                        <Image source={require('../../../assets/image/a8.png')} resizeMode='stretch' style={{ height: height/2.5, width: width-40, alignSelf: 'center', marginTop: 50 }}></Image>
                        <Text style={[style.apptitle, { color: Colors.txt, marginTop: 20 ,textAlign:'center'}]}>Payment successful</Text>
                        <Text style={[style.r12, { color: Colors.disable ,textAlign:'center'}]}>Your order has been place and will be deliver to you shortly.</Text>

                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('DStatus')}
                        style={[style.btn, { marginTop: 40 }]}>
                        <Text style={[style.btntxt, { marginBottom: -5 }]}>Track your parcel</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}
                        style={[style.btn, { marginTop: 20, backgroundColor: Colors.secondary, marginBottom: 70 }]}>
                        <Text style={[style.btntxt, { marginBottom: -5, color: Colors.txt }]}>Home page</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}