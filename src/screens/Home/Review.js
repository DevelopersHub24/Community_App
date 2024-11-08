import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../../theme/style'
import { Colors } from '../../theme/color'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppBar, HStack } from '@react-native-material/core';
import RBSheet from 'react-native-raw-bottom-sheet';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Review() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg, }]}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>

                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        centerTitle={true}
                        title='4.9 ( 1475 reviews)'
                        titleStyle={[style.s15, { color: Colors.active }]}
                        leading={<TouchableOpacity onPress={() => navigation.goBack()} style={[style.icon]}>
                            <Icon name='arrow-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Text style={[style.m12, { color: Colors.active, textAlign:'right'}]}>See all</Text>

                        <View style={{ padding: 15, backgroundColor: Colors.input, borderRadius: 15,marginTop:15 }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Image source={require('../../../assets/image/s39.png')} resizeMode='stretch' style={{ height: 34, width: 34, }} />
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={[style.m15, { color: Colors.active, }]}>Karl william</Text>
                                    <Text style={[style.r10, { color: Colors.active, marginTop: 5 }]}>I really the finish of the product and size is also perfect for my room</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', height: 20, paddingHorizontal: 10, paddingVertical: 3, backgroundColor: Colors.bg, borderRadius: 10 }}>
                                    <Icon name='star' size={12} color={Colors.primary} style={{ marginTop: 1 }} />
                                    <Text style={[style.m12, { color: Colors.active, marginLeft: 3 }]}>5</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'flex-end', marginTop: 5 }}>
                                <Image source={require('../../../assets/image/s38.png')} resizeMode='stretch' style={{ height: 22, width: 22 }} />
                            </View>
                        </View>

                        <View style={{ padding: 15, backgroundColor: Colors.input, borderRadius: 15, marginTop: 15 }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Image source={require('../../../assets/image/s40.png')} resizeMode='stretch' style={{ height: 34, width: 34, }} />
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={[style.m15, { color: Colors.active, }]}>Kavi</Text>
                                    <Text style={[style.r10, { color: Colors.active, marginTop: 5 }]}>The sofa is reallu nice and texture is also very smooth. My wife love it.</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', height: 20, paddingHorizontal: 10, paddingVertical: 3, backgroundColor: Colors.bg, borderRadius: 10 }}>
                                    <Icon name='star' size={12} color={Colors.primary} style={{ marginTop: 1 }} />
                                    <Text style={[style.m12, { color: Colors.active, marginLeft: 3 }]}>4</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'flex-end', marginTop: 5 }}>
                                <Image source={require('../../../assets/image/s38.png')} resizeMode='stretch' style={{ height: 22, width: 22 }} />
                            </View>
                        </View>

                        <View style={{ padding: 15, backgroundColor: Colors.input, borderRadius: 15, marginTop: 15 }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Image source={require('../../../assets/image/s41.png')} resizeMode='stretch' style={{ height: 34, width: 34, }} />
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={[style.m15, { color: Colors.active, }]}>Jacobs</Text>
                                    <Text style={[style.r10, { color: Colors.active, marginTop: 5 }]}>Just love how it quickly delivered.</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', height: 20, paddingHorizontal: 10, paddingVertical: 3, backgroundColor: Colors.bg, borderRadius: 10 }}>
                                    <Icon name='star' size={12} color={Colors.primary} style={{ marginTop: 1 }} />
                                    <Text style={[style.m12, { color: Colors.active, marginLeft: 3 }]}>5</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'flex-end', marginTop: 5 }}>
                                <Image source={require('../../../assets/image/s38.png')} resizeMode='stretch' style={{ height: 22, width: 22 }} />
                            </View>
                        </View>

                        <View style={{ padding: 15, backgroundColor: Colors.input, borderRadius: 15, marginTop: 15 }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Image source={require('../../../assets/image/s42.png')} resizeMode='stretch' style={{ height: 34, width: 34, }} />
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={[style.m15, { color: Colors.active, }]}>Sarif</Text>
                                    <Text style={[style.r10, { color: Colors.active, marginTop: 5 }]}>It increase beauty to my room. Minimal design looks great.</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', height: 20, paddingHorizontal: 10, paddingVertical: 3, backgroundColor: Colors.bg, borderRadius: 10 }}>
                                    <Icon name='star' size={12} color={Colors.primary} style={{ marginTop: 1 }} />
                                    <Text style={[style.m12, { color: Colors.active, marginLeft: 3 }]}>4</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'flex-end', marginTop: 5 }}>
                                <Image source={require('../../../assets/image/s38.png')} resizeMode='stretch' style={{ height: 22, width: 22 }} />
                            </View>
                        </View>

                        <View style={{ padding: 15, backgroundColor: Colors.input, borderRadius: 15, marginTop: 15, marginBottom: 20 }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Image source={require('../../../assets/image/s43.png')} resizeMode='stretch' style={{ height: 34, width: 34, }} />
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={[style.m15, { color: Colors.active, }]}>Karl william</Text>
                                    <Text style={[style.r10, { color: Colors.active, marginTop: 5 }]}>Really satisfied with the quality of the product.</Text>
                                </View>
                                <View style={{ flexDirection: 'row', alignItems: 'center', height: 20, paddingHorizontal: 10, paddingVertical: 3, backgroundColor: Colors.bg, borderRadius: 10 }}>
                                    <Icon name='star' size={12} color={Colors.primary} style={{ marginTop: 1 }} />
                                    <Text style={[style.m12, { color: Colors.active, marginLeft: 3 }]}>5</Text>
                                </View>
                            </View>
                            <View style={{ alignItems: 'flex-end', marginTop: 5 }}>
                                <Image source={require('../../../assets/image/s38.png')} resizeMode='stretch' style={{ height: 22, width: 22 }} />
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}