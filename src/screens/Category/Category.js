import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../../theme/style'
import { Colors } from '../../theme/color'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppBar, HStack } from '@react-native-material/core';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Category() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg, }]}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>

                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        leading={<Text style={[style.s16, { color: Colors.active }]}>Arino</Text>}
                        trailing={<HStack>
                            <Image source={require('../../../assets/image/s2.png')} resizeMode='stretch' style={{ height: 40, width: 40 }} />
                            <Image source={require('../../../assets/image/s3.png')} resizeMode='stretch' style={{ height: 40, width: 40, marginLeft: 10 }} />
                        </HStack>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <View style={{ padding: 15, backgroundColor: '#FFF9E4', borderRadius: 15, flexDirection: 'row', marginTop: 50 }}>
                            <View style={{ flex: 1 }}>
                                <Text style={[style.s15, { color: Colors.active }]}>33%{'\n'}Off on {'\n'}New arrivals</Text>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={[style.r10, { color: Colors.active }]}>Explore</Text>
                                    <Icon name='arrow-forward' size={11} color={Colors.active} style={{ marginLeft: 2 }} />
                                </View>
                            </View>
                            <Image source={require('../../../assets/image/s4.png')} resizeMode='stretch' style={{ height: height / 5.5, width: width / 2.5, marginTop: -50 }} />
                        </View>

                        <Text style={[style.apptitle, { color: Colors.active, marginTop: 20 }]}>Shop By Room</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, }}>
                            <View style={{ flex: 1 }}>
                                <ImageBackground source={require('../../../assets/image/s21.png')} resizeMode='stretch' style={{ height: height / 4.2, padding: 10 }} >
                                    <Text style={[style.m16, { color: Colors.secondary }]}>Bedroom</Text>
                                </ImageBackground>
                            </View>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <View style={{ flex: 1 }}>
                                <ImageBackground source={require('../../../assets/image/s22.png')} resizeMode='stretch' style={{ height: height / 4.2, padding: 10 }} >
                                    <Text style={[style.m16, { color: Colors.secondary }]}>Kitchen</Text>
                                </ImageBackground>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, }}>
                            <View style={{ flex: 1 }}>
                                <ImageBackground source={require('../../../assets/image/s23.png')} resizeMode='stretch' style={{ height: height / 4.2, padding: 10 }} >
                                    <Text style={[style.m16, { color: Colors.secondary }]}>Dinning</Text>
                                </ImageBackground>
                            </View>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <View style={{ flex: 1 }}>
                                <ImageBackground source={require('../../../assets/image/s24.png')} resizeMode='stretch' style={{ height: height / 4.2, padding: 10 }} >
                                    <Text style={[style.m16, { color: Colors.secondary }]}>Living</Text>
                                </ImageBackground>
                            </View>
                        </View>

                        <Text style={[style.apptitle, { color: Colors.active, marginTop: 20 }]}>Shop By Style</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, }}>
                            <View style={{ flex: 1 }}>
                                <ImageBackground source={require('../../../assets/image/s25.png')} resizeMode='stretch' style={{ height: height / 4.2, padding: 10 }} >
                                    <Text style={[style.m16, { color: Colors.secondary }]}>Minimal</Text>
                                </ImageBackground>
                            </View>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <View style={{ flex: 1 }}>
                                <ImageBackground source={require('../../../assets/image/s26.png')} resizeMode='stretch' style={{ height: height / 4.2, padding: 10 }} >
                                    <Text style={[style.m16, { color: Colors.secondary }]}>Modern</Text>
                                </ImageBackground>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
                            <View style={{ flex: 1 }}>
                                <ImageBackground source={require('../../../assets/image/s27.png')} resizeMode='stretch' style={{ height: height / 4.2, padding: 10 }} >
                                    <Text style={[style.m16, { color: Colors.secondary }]}>Classic</Text>
                                </ImageBackground>
                            </View>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <View style={{ flex: 1 }}>
                                <ImageBackground source={require('../../../assets/image/s28.png')} resizeMode='stretch' style={{ height: height / 4.2, padding: 10 }} >
                                    <Text style={[style.m16, { color: Colors.secondary }]}>Stylish</Text>
                                </ImageBackground>
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}