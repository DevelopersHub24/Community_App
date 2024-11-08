import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../../theme/style'
import { Colors } from '../../theme/color'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper'
import { AppBar } from '@react-native-material/core';
import Icon1 from 'react-native-vector-icons/Feather'

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function DStatus() {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>

                    <Text style={[style.apptitle, { color: Colors.txt, textAlign: 'center', marginTop: 40 }]}>Delivery status</Text>

                    <Text style={[style.r14, { color: Colors.disable, textAlign: 'center' }]}>Estimate delivery</Text>

                    <Text style={[style.m14, { color: Colors.txt, marginTop: 5, textAlign: 'center' }]}>20 june 2022: 05:30 PM</Text>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 25 }}>
                            <Text style={[style.s14, { color: Colors.txt }]}>Track order</Text>
                            <Text style={[style.r12, { color: Colors.disable }]}>NYC1054C</Text>
                        </View>

                        <View style={[style.divider, { backgroundColor: '#C5C5C5', height: 0.5, marginVertical: 15, }]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 15 }}>
                            <View style={{ height: 30, width: 30, backgroundColor: '#28A138', borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon1 name='check' size={16} color={Colors.secondary}></Icon1>
                            </View>
                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <Text style={[style.s12, { color: Colors.txt }]}>Pick-up request accepted</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon1 name='clock' size={16} color={Colors.disable1} style={{ marginTop: -3 }}></Icon1>
                                    <Text style={[style.m12, { color: Colors.disable, marginLeft: 10 }]}>9:10 AM, 19 june 2022</Text>
                                </View>
                            </View>
                        </View>

                        <View style={[style.verticaldivider, { borderWidth: 0.8, borderStyle: 'dashed',  borderColor: '#686868', height: height / 20, marginLeft:14}]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center',}}>
                            <View style={{ height: 30, width: 30, backgroundColor: '#FCD240', borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon1 name='check' size={16} color={Colors.secondary}></Icon1>
                            </View>
                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <Text style={[style.s12, { color: Colors.txt }]}>Product picked & started journey</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon1 name='clock' size={16} color={Colors.disable1} style={{ marginTop: -3 }}></Icon1>
                                    <Text style={[style.m12, { color: Colors.disable, marginLeft: 10 }]}>12:40 PM, 19 june 2022</Text>
                                </View>
                            </View>
                        </View>

                        <View style={[style.verticaldivider, { borderWidth: 0.8, borderStyle: 'dashed',  borderColor: '#686868', height: height / 20, marginLeft:14}]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center',}}>
                            <View style={{ height: 30, width: 30, backgroundColor: '#28A138', borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon1 name='gift' size={16} color={Colors.secondary}></Icon1>
                            </View>
                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <Text style={[style.s12, { color: Colors.primary }]}>Dispatch in local warehouse</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon1 name='clock' size={16} color={Colors.disable1} style={{ marginTop: -3 }}></Icon1>
                                    <Text style={[style.m12, { color: Colors.disable, marginLeft: 10 }]}>1:10 AM, 20 june 2022</Text>
                                </View>
                            </View>
                        </View>

                        <View style={[style.verticaldivider, { borderWidth: 0.8, borderStyle: 'dashed',  borderColor: '#686868', height: height / 20, marginLeft:14}]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center',}}>
                            <View style={{ height: 30, width: 30, backgroundColor: '#686868', borderRadius: 15, alignItems: 'center', justifyContent: 'center' }}>
                                <Icon1 name='heart' size={16} color={Colors.secondary}></Icon1>
                            </View>
                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <Text style={[style.s12, { color: Colors.disable1 }]}>Parcel delivered!</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Icon1 name='clock' size={16} color={Colors.disable1} style={{ marginTop: -3 }}></Icon1>
                                    <Text style={[style.m12, { color: Colors.disable, marginLeft: 10 }]}>05:30 AM, 20 june 2022</Text>
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}