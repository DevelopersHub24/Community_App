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

export default function Search() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg, }]}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>

                    <View style={[style.search, { marginTop: 10 }]}>
                        <TextInput placeholder='Search' placeholderTextColor={Colors.disable}
                            selectionColor={Colors.primary}
                            style={[style.r12, { color: Colors.active, flex: 1 }]}
                        />
                        <Icons name='fullscreen' size={24} color={Colors.disable} />
                        <Icon name='search' size={20} color={Colors.disable} style={{ marginLeft: 5 }} />
                    </View>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Text style={[style.m16, { color: Colors.active, }]}>Recent searches</Text>

                        <View style={{ marginTop: 5 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>
                                <View style={{ paddingHorizontal: 15, paddingVertical: 3, borderRadius: 20, backgroundColor: Colors.input }}>
                                    <Text style={[style.r10, { color: Colors.disable, }]}>Sofa</Text>
                                </View>
                                <View style={{ marginHorizontal: 10, paddingHorizontal: 15, paddingVertical: 3, borderRadius: 20, backgroundColor: Colors.input }}>
                                    <Text style={[style.r10, { color: Colors.disable, }]}>Minimal</Text>
                                </View>
                                <View style={{ paddingHorizontal: 15, paddingVertical: 3, borderRadius: 20, backgroundColor: Colors.input }}>
                                    <Text style={[style.r10, { color: Colors.disable, }]}>Office</Text>
                                </View>
                                <View style={{ marginLeft: 10, paddingHorizontal: 15, paddingVertical: 3, borderRadius: 20, backgroundColor: Colors.input }}>
                                    <Text style={[style.r10, { color: Colors.disable, }]}>Bed</Text>
                                </View>
                            </ScrollView>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('SDetail')}
                                style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
                                <Image source={require('../../../assets/image/s18.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3.5, alignSelf: 'center', }} />
                                <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>Siira Brows</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.r8, { color: Colors.active }]}>$99.00</Text>
                                            <Text style={[style.r8, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$199.00</Text>
                                        </View>
                                    </View>
                                    <View style={[style.icon, { height: 18, width: 18, backgroundColor: Colors.box }]}>
                                        <Icon name='add' size={10} color={Colors.active} style={{}} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('SDetail')}
                                style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
                                <Image source={require('../../../assets/image/s29.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3, alignSelf: 'center', }} />
                                <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>Breezo</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.r8, { color: Colors.active }]}>$159.00</Text>
                                            <Text style={[style.r8, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$250.00</Text>
                                        </View>
                                    </View>
                                    <View style={[style.icon, { height: 18, width: 18, backgroundColor: Colors.box }]}>
                                        <Icon name='add' size={10} color={Colors.active} style={{}} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('SDetail')}
                                style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
                                <Image source={require('../../../assets/image/s31.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3.5, alignSelf: 'center' }} />
                                <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>Chillsa</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.r8, { color: Colors.active }]}>$139.00</Text>
                                            <Text style={[style.r8, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$330.00</Text>
                                        </View>
                                    </View>
                                    <View style={[style.icon, { height: 18, width: 18, backgroundColor: Colors.box }]}>
                                        <Icon name='add' size={10} color={Colors.active} style={{}} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('SDetail')}
                                style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
                                <Image source={require('../../../assets/image/s32.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3.5, alignSelf: 'center', }} />
                                <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>Soorner</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.r8, { color: Colors.active }]}>$200.00</Text>
                                            <Text style={[style.r8, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$440.00</Text>
                                        </View>
                                    </View>
                                    <View style={[style.icon, { height: 18, width: 18, backgroundColor: Colors.box }]}>
                                        <Icon name='add' size={10} color={Colors.active} style={{}} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('SDetail')}
                                style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
                                <Image source={require('../../../assets/image/s30.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3.5, alignSelf: 'center', }} />
                                <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>Crella</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.r8, { color: Colors.active }]}>$24.00</Text>
                                            <Text style={[style.r8, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$35.00</Text>
                                        </View>
                                    </View>
                                    <View style={[style.icon, { height: 18, width: 18, backgroundColor: Colors.box }]}>
                                        <Icon name='add' size={10} color={Colors.active} style={{}} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('SDetail')}
                                style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
                                <Image source={require('../../../assets/image/s16.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3.5, alignSelf: 'center', }} />
                                <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>Circlo</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.r8, { color: Colors.active }]}>$12.00</Text>
                                            <Text style={[style.r8, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$35.00</Text>
                                        </View>
                                    </View>
                                    <View style={[style.icon, { height: 18, width: 18, backgroundColor: Colors.box }]}>
                                        <Icon name='add' size={10} color={Colors.active} style={{}} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('SDetail')}
                                style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
                                <Image source={require('../../../assets/image/s20.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3.5, marginLeft: -8 }} />
                                <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>Solid cerve</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.r8, { color: Colors.active }]}>$12.00</Text>
                                            <Text style={[style.r8, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$35.00</Text>
                                        </View>
                                    </View>
                                    <View style={[style.icon, { height: 18, width: 18, backgroundColor: Colors.box }]}>
                                        <Icon name='add' size={10} color={Colors.active} style={{}} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('SDetail')}
                                style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
                                <Image source={require('../../../assets/image/s4.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3.5, alignSelf: 'center' }} />
                                <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>Comfy Roaser</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.r8, { color: Colors.active }]}>$24.00</Text>
                                            <Text style={[style.r8, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$48.00</Text>
                                        </View>
                                    </View>
                                    <View style={[style.icon, { height: 18, width: 18, backgroundColor: Colors.box }]}>
                                        <Icon name='add' size={10} color={Colors.active} style={{}} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}