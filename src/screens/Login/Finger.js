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

export default function Finger() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                    <AppBar
                        style={{ backgroundColor: 'transparent' }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Otp')} style={[style.icon]}>
                            <Icon name='arrow-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                    />


                    <Text style={[style.apptitle, { color: Colors.txt ,marginTop:20}]}>Enable biometric Access</Text>
                    <Text style={[style.r12, { color: Colors.disable }]}>Login quickly and securely with the fingerprint stored on this device</Text>
                    
                    <View style={{ marginTop: 10, flex: 1, alignItems: 'center', justifyContent: 'center' }}>

                        <Image source={require('../../../assets/image/a3.png')} resizeMode='stretch' style={{ height: 120, width: 120, alignSelf: 'center', marginTop: 50 }}></Image>

                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('MyTabs')}
                        style={[style.btn, { marginTop: 20 }]}>
                        <Text style={[style.btntxt, { marginBottom: -5 }]}>Unable</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('Country')}
                        style={[style.btn, { marginTop: 20, backgroundColor: Colors.secondary, marginBottom: 20 }]}>
                        <Text style={[style.btntxt, { marginBottom: -5, color: Colors.txt }]}>I’ll do this later</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}