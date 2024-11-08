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

export default function NewPass() {
    const navigation = useNavigation();
    const [isFocused, setIsFocused] = useState(false)
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)
    const [isPasswordVisible1, setIsPasswordVisible1] = useState(false)
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                    <AppBar
                        style={{ backgroundColor: 'transparent' }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Otp1')} style={[style.icon]}>
                            <Icon name='arrow-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Text style={[style.apptitle, { color: Colors.txt }]}>Create new password</Text>
                        <Text style={[style.r12, { color: Colors.disable }]}>Please create a secure password for your account to ensure security of the account.</Text>

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

                        <View style={[style.txtinput, { marginTop: 18, backgroundColor: Colors.input,  }]}>
                            <Icons name='lock-outline' size={24} color={Colors.icon}></Icons>
                            <TextInput placeholder='Re-type password'
                                placeholderTextColor={Colors.lable}
                                secureTextEntry={!isPasswordVisible1}
                                selectionColor={Colors.primary}
                                style={[style.r14, { color: Colors.txt, flex: 1, marginBottom: -5, marginLeft: 10 }]}
                            />
                            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible1)} >
                                <Icon name={!isPasswordVisible1 ? 'eye-off' : 'eye'} color={Colors.icon} size={20} />
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')}
                        style={[style.btn, { marginTop: 20 ,marginBottom:20}]}>
                        <Text style={[style.btntxt, { marginBottom: -5 }]}>Set password</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}