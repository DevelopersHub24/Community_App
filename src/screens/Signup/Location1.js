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

export default function Location1() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                    <AppBar
                        style={{ backgroundColor: 'transparent' }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Login')} style={[style.icon]}>
                            <Icon name='arrow-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                    />


                    <Text style={[style.apptitle, { color: Colors.txt, marginTop: 20 }]}>Location accesss</Text>
                    <Text style={[style.r12, { color: Colors.disable }]}>Arino needs to know your location in order to give you better shopping and delivery experience.</Text>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>
                        
                        <View style={[style.txtinput, { marginTop: 30, backgroundColor: Colors.input, }]}>
                            <Icon name='location-outline' size={24} color={Colors.icon}></Icon>
                            <TextInput placeholder='Free town, NYC'
                                placeholderTextColor={Colors.active}
                                selectionColor={Colors.primary}
                                style={[style.r14, { color: Colors.active, flex: 1, marginBottom: -5, marginLeft: 10 }]}
                            />
                        </View>

                        <Text style={[style.m12,{color:Colors.txt,textDecorationLine:'underline',marginTop:8}]}>Change my location</Text>

                    </ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('Otp2')}
                        style={[style.btn, { marginTop: 20 ,marginBottom:20}]}>
                        <Text style={[style.btntxt, { marginBottom: -5 }]}>Confirm</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}