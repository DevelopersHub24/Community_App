import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../../theme/style'
import { Colors } from '../../theme/color'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppBar } from '@react-native-material/core';
import OtpInputs from 'react-native-otp-inputs'
import Clipboard from '@react-native-clipboard/clipboard'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Otp1() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg, }]}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>

                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Forgot')} style={[style.icon]}>
                            <Icon name='arrow-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Text style={[style.apptitle, { color: Colors.active, marginTop: 10 }]}>Verify it’s you</Text>
                        <Text style={[style.r12, { color: Colors.disable, marginTop: 5 }]}>We have send a verification code to your email please enter the code below.</Text>

                        <OtpInputs
                            Clipboard={Clipboard}
                            numberOfInputs={5}
                            selectionColor={Colors.primary}
                            style={{ flexDirection: 'row', justifyContent: 'space-evenly', }}
                            inputStyles={{
                                marginTop: 40,
                                backgroundColor: Colors.input,
                                borderRadius: 12,
                                textAlign: 'center',
                                height: 56,
                                width: 56,
                                fontSize: 16,
                                color: Colors.active,
                                fontFamily: 'Poppins-SemiBold',
                            }}
                        />
                        <Text style={[style.r12, { color: Colors.disable, marginTop: 10 }]}>You can resend the code after 1 minute ( 00:56 )</Text>

                    </ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('NewPass')}
                        style={[style.btn, { marginVertical: 20 }]}>
                        <Text style={[style.btntxt, {}]}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}