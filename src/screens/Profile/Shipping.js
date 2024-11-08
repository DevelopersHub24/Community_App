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

export default function Shipping() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                    <AppBar
                        title=' Shipping details'
                        titleStyle={[style.s15, { color: Colors.txt }]}
                        centerTitle={true}
                        style={{ backgroundColor: 'transparent' }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Profile')} style={[style.icon]}>
                            <Icon name='arrow-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <View style={[style.shadow, { margin: 5, shadowColor: Colors.disable, backgroundColor: Colors.secondary, flexDirection: 'row', alignItems: 'center', borderRadius: 15, padding: 15, marginTop: 10 }]}>
                            <Image source={require('../../../assets/image/a10.png')} resizeMode='stretch' style={{ height: 52, width: 52 }}></Image>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.m18, { color: Colors.txt }]}>Home</Text>
                                    <View style={{ backgroundColor: '#10101008', borderRadius: 10, alignItems: 'center', justifyContent: 'center', paddingVertical: 3, paddingHorizontal: 12, marginLeft: 10 }}>
                                        <Text style={[style.s10, { color: Colors.txt }]}>Default</Text>
                                    </View>
                                </View>
                                <Text style={[style.r12, { color: Colors.disable1 }]}>61480 Sunbrook Park, PC 5679</Text>
                            </View>
                            <TouchableOpacity onPress={() => navigation.navigate('EditS')}>
                                <Image source={require('../../../assets/image/a11.png')} resizeMode='stretch' style={{ height: 24, width: 24 }}></Image>
                            </TouchableOpacity>
                        </View>

                        <View style={[style.shadow, { margin: 5, shadowColor: Colors.disable, backgroundColor: Colors.secondary, flexDirection: 'row', alignItems: 'center', borderRadius: 15, padding: 15, marginTop: 10 }]}>
                            <Image source={require('../../../assets/image/a10.png')} resizeMode='stretch' style={{ height: 52, width: 52 }}></Image>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={[style.m18, { color: Colors.txt }]}>Office</Text>
                                <Text style={[style.r12, { color: Colors.disable1 }]}>6993 Meadow Valley Terra, PC 3637</Text>
                            </View>
                           <TouchableOpacity onPress={() => navigation.navigate('EditS')}>
                                <Image source={require('../../../assets/image/a11.png')} resizeMode='stretch' style={{ height: 24, width: 24 }}></Image>
                            </TouchableOpacity>
                        </View>

                        <View style={[style.shadow, { margin: 5, shadowColor: Colors.disable, backgroundColor: Colors.secondary, flexDirection: 'row', alignItems: 'center', borderRadius: 15, padding: 15, marginTop: 10 }]}>
                            <Image source={require('../../../assets/image/a10.png')} resizeMode='stretch' style={{ height: 52, width: 52 }}></Image>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={[style.m18, { color: Colors.txt }]}>Apartment</Text>
                                <Text style={[style.r12, { color: Colors.disable1 }]}>21833 Clyde Gallagher, PC 4662</Text>
                            </View>
                           <TouchableOpacity onPress={() => navigation.navigate('EditS')}>
                                <Image source={require('../../../assets/image/a11.png')} resizeMode='stretch' style={{ height: 24, width: 24 }}></Image>
                            </TouchableOpacity>
                        </View>

                        <View style={[style.shadow, { margin: 5, shadowColor: Colors.disable, backgroundColor: Colors.secondary, flexDirection: 'row', alignItems: 'center', borderRadius: 15, padding: 15, marginTop: 10 }]}>
                            <Image source={require('../../../assets/image/a10.png')} resizeMode='stretch' style={{ height: 52, width: 52 }}></Image>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={[style.m18, { color: Colors.txt }]}>Parent's House</Text>
                                <Text style={[style.r12, { color: Colors.disable1 }]}>5259 Blue Bill Park, PC 4627</Text>
                            </View>
                           <TouchableOpacity onPress={() => navigation.navigate('EditS')}>
                                <Image source={require('../../../assets/image/a11.png')} resizeMode='stretch' style={{ height: 24, width: 24 }}></Image>
                            </TouchableOpacity>
                        </View>

                        <View style={[style.shadow, { margin: 5, shadowColor: Colors.disable, backgroundColor: Colors.secondary, flexDirection: 'row', alignItems: 'center', borderRadius: 15, padding: 15, marginTop: 10 }]}>
                            <Image source={require('../../../assets/image/a10.png')} resizeMode='stretch' style={{ height: 52, width: 52 }}></Image>
                            <View style={{ flex: 1, marginLeft: 10 }}>
                                <Text style={[style.m18, { color: Colors.txt }]}>Town Square</Text>
                                <Text style={[style.r12, { color: Colors.disable1 }]}>5375 Summerhouse, PC 4627</Text>
                            </View>
                           <TouchableOpacity onPress={() => navigation.navigate('EditS')}>
                                <Image source={require('../../../assets/image/a11.png')} resizeMode='stretch' style={{ height: 24, width: 24 }}></Image>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}