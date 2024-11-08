import { View, Text, TextInput, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../../theme/style'
import { Colors } from '../../theme/color'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppBar } from '@react-native-material/core';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Login() {
    const navigation = useNavigation();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor={'transparent'} translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 70 : 100 }]}>

                    <Text style={[style.subtitle, { color: Colors.active }]}>Hi there!</Text>
                    <Text style={[style.r12, { color: Colors.disable1, }]}>Welcome back, Sign in to your account</Text>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <View style={[style.txtinput, { marginTop: 30,  backgroundColor: Colors.input, }]}>
                            <Icon name='mail-outline' size={24} color={Colors.icon}></Icon>
                            <TextInput placeholder='Email'
                                placeholderTextColor={Colors.lable}
                                selectionColor={Colors.primary}
                                style={[style.r14, { color: Colors.active, flex: 1, marginBottom: -5, marginLeft: 10 }]}
                            />
                        </View>

                        <View style={[style.txtinput, { marginTop: 18, backgroundColor: Colors.input, }]}>
                            <Icons name='lock-outline' size={24} color={Colors.icon}></Icons>
                            <TextInput placeholder='Password'
                                placeholderTextColor={Colors.lable}
                                secureTextEntry={!isPasswordVisible}
                                selectionColor={Colors.primary}
                                style={[style.r14, { color: Colors.txt, flex: 1, marginBottom: -5, marginLeft: 10 }]}
                            />
                            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} >
                                <Icon name={!isPasswordVisible ? 'eye-off' : 'eye'} color={Colors.icon} size={20} />
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('Forgot')} style={{ marginTop: 15 }}>
                            <Text style={[style.m16, { color: Colors.txt }]}>Forgot Password?</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => navigation.navigate('Otp')}
                            style={[style.btn, { marginTop: 40 }]}>
                            <Text style={[style.btntxt, { marginBottom: -4 }]}>Sign In</Text>
                        </TouchableOpacity>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25 }}>

                            <View style={[style.divider, { backgroundColor: '#F2F2F2', flex: 1 }]}></View>
                            <Text style={[style.r14, { color: Colors.lable, marginHorizontal: 20 }]}>OR</Text>
                            <View style={[style.divider, { backgroundColor: '#F2F2F2', flex: 1 }]}></View>

                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 25, marginBottom: 20 }}>
                            <TouchableOpacity
                                style={[style.btnoutline, { flexDirection: 'row', alignItems: 'center', flex: 1 ,borderColor:Colors.bord}]}>
                                <Image source={require('../../../assets/image/a1.png')} resizeMode='stretch' style={{ height: 22, width: 22 }}></Image>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[style.btnoutline, { flexDirection: 'row', alignItems: 'center', flex: 1, marginLeft: 20 ,borderColor:Colors.bord}]}>
                                <Image source={require('../../../assets/image/a2.png')} resizeMode='stretch' style={{ height: 23, width: 20 }}></Image>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 20, justifyContent: 'center', marginTop: 50 }}>
                            <Text style={[style.r12, { color: Colors.disable, textAlign: 'center' }]}>Don't have any account?</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                                <Text style={[style.m12, { color: Colors.txt, textAlign: 'center' }]}> Sign Up</Text>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}