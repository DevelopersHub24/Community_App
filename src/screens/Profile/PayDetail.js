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

export default function PayDetail() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                    <AppBar
                        style={{ backgroundColor: 'transparent' }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Profile')} style={[style.icon]}>
                            <Icon name='arrow-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                    />


                    <Text style={[style.apptitle, { color: Colors.txt, marginTop: 20 }]}>Edit your payment detail</Text>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 30 }}>
                            <Image source={require('../../../assets/image/a5.png')} resizeMode='stretch' style={{ height: 48, width: 70 }}></Image>
                            <View style={{}}>
                                <Text style={[style.m12, { color: Colors.txt }]}>421689******1560</Text>
                                <Text style={[style.r12, { color: Colors.disable }]}>Expires 09/23</Text>
                            </View>
                            <View style={{ backgroundColor: '#FCD240', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 12, paddingVertical: 3, borderRadius: 10 }}>
                                <Text style={[style.m10, { color: Colors.txt, }]}>Default</Text>
                            </View>
                        </View>

                        <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 30, height: 0.5 }]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                            <Image source={require('../../../assets/image/a6.png')} resizeMode='stretch' style={{ height: 48, width: 70 }}></Image>
                            <View style={{}}>
                                <Text style={[style.m12, { color: Colors.txt }]}>421689******1560</Text>
                                <Text style={[style.r12, { color: Colors.disable }]}>Expires 09/23</Text>
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center', paddingHorizontal: 27, paddingVertical: 3, borderRadius: 10 }}>
                            </View>
                        </View>

                        <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 30, height: 0.3 }]}></View>



                    </ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}
                        style={[style.btn, { marginTop: 20, marginBottom: 70 }]}>
                        <Text style={[style.btntxt, { marginBottom: -5 }]}>Edit details</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}