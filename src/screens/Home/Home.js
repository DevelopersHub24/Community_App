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

export default function Home() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg, }]}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>

                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        leading={<Text style={[style.s16, { color: Colors.active }]}>ACE</Text>}
                        trailing={<HStack>
                            <TouchableOpacity onPress={() => navigation.navigate('Wishlist')}>
                                <Image source={require('../../../assets/image/s2.png')} resizeMode='stretch' style={{ height: 40, width: 40 }} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                                <Image source={require('../../../assets/image/s3.png')} resizeMode='stretch' style={{ height: 40, width: 40, marginLeft: 10 }} />
                            </TouchableOpacity>
                        </HStack>}
                    />

                    <View style={[style.search, { marginTop: 10 }]}>
                        <TextInput placeholder='Search' placeholderTextColor={Colors.disable}
                            selectionColor={Colors.primary}
                            style={[style.r12, { color: Colors.active, flex: 1 }]}
                        />
                        <TouchableOpacity onPress={() => navigation.navigate('Scan')}>
                            <Icons name='fullscreen' size={24} color={Colors.disable} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
                            <Icon name='search' size={20} color={Colors.disable} style={{ marginLeft: 5 }} />
                        </TouchableOpacity>
                    </View>

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

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <Text style={[style.apptitle, { color: Colors.active, flex: 1 }]}>New arrivals</Text>
                            <TouchableOpacity onPress={() => navigation.navigate('NArrives')}
                                style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={[style.m10, { color: Colors.active }]}>View all</Text>
                                <Icon name='chevron-forward' size={10} color={Colors.active} style={{ marginLeft: 2, marginTop: -2 }} />
                            </TouchableOpacity>
                        </View>

                        <View style={{ marginTop: 20 }}>
                            <ScrollView horizontal showsHorizontalScrollIndicator={false} nestedScrollEnabled={true}>

                                <TouchableOpacity onPress={() => navigation.navigate('HDetail')}
                                    style={{ padding: 12, backgroundColor: Colors.bord, borderRadius: 10, width: width / 2.2 }}>
                                    <Image source={require('../../../assets/image/s4.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3.5, alignSelf: 'center' }} />
                                    <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={[style.r10, { color: Colors.active }]}>Comfy Roaser</Text>
                                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={[style.r8, { color: Colors.active }]}>$24.00</Text>
                                                <Text style={[style.r8, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$48.00</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={[style.icon, { height: 18, width: 18, backgroundColor: Colors.box }]}>
                                            <Icon name='add' size={10} color={Colors.active} style={{}} />
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => navigation.navigate('HDetail')}
                                    style={{ marginHorizontal: 10, padding: 12, backgroundColor: Colors.bord, borderRadius: 10, width: width / 2.2 }}>
                                    <Image source={require('../../../assets/image/s5.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3.5, alignSelf: 'center' }} />
                                    <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={[style.r10, { color: Colors.active }]}>Sera Core</Text>
                                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={[style.r8, { color: Colors.active }]}>$24.00</Text>
                                                <Text style={[style.r8, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$48.00</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={[style.icon, { height: 18, width: 18, backgroundColor: Colors.box }]}>
                                            <Icon name='add' size={10} color={Colors.active} style={{}} />
                                        </View>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity onPress={() => navigation.navigate('HDetail')}
                                    style={{ padding: 12, backgroundColor: Colors.bord, borderRadius: 10, width: width / 2.2 }}>
                                    <Image source={require('../../../assets/image/s6.png')} resizeMode='stretch' style={{ height: height / 6.5, width: width / 3, alignSelf: 'center', marginTop: -15 }} />
                                    <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={[style.r10, { color: Colors.active }]}>Beast Treas</Text>
                                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text style={[style.r8, { color: Colors.active }]}>$24.00</Text>
                                                <Text style={[style.r8, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$48.00</Text>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={[style.icon, { height: 18, width: 18, backgroundColor: Colors.box }]}>
                                            <Icon name='add' size={10} color={Colors.active} style={{}} />
                                        </View>
                                    </View>
                                </TouchableOpacity>

                            </ScrollView>
                        </View>

                        <Text style={[style.apptitle, { color: Colors.active, marginTop: 20 }]}>Categories</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5, justifyContent: 'space-between' }}>
                            <Image source={require('../../../assets/image/s7.png')} resizeMode='stretch' style={{ height: 39, width: 39 }} />
                            <Image source={require('../../../assets/image/s8.png')} resizeMode='stretch' style={{ height: 39, width: 39, }} />
                            <Image source={require('../../../assets/image/s9.png')} resizeMode='stretch' style={{ height: 39, width: 39 }} />
                            <Image source={require('../../../assets/image/s10.png')} resizeMode='stretch' style={{ height: 39, width: 39, }} />
                            <Image source={require('../../../assets/image/s11.png')} resizeMode='stretch' style={{ height: 39, width: 39 }} />
                            <Image source={require('../../../assets/image/s12.png')} resizeMode='stretch' style={{ height: 39, width: 39, }} />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('HDetail')}
                                style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
                                <Image source={require('../../../assets/image/s13.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3.5, alignSelf: 'center', }} />
                                <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>Croosa</Text>
                                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.r8, { color: Colors.active }]}>$23.00</Text>
                                            <Text style={[style.r8, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$50.00</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={[style.icon, { height: 18, width: 18, backgroundColor: Colors.box }]}>
                                        <Icon name='add' size={10} color={Colors.active} style={{}} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('HDetail')}
                                style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
                                <Image source={require('../../../assets/image/s14.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3.5, alignSelf: 'center', }} />
                                <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>Beast Treas</Text>
                                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.r8, { color: Colors.active }]}>$34.00</Text>
                                            <Text style={[style.r8, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$55.00</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={[style.icon, { height: 18, width: 18, backgroundColor: Colors.box }]}>
                                        <Icon name='add' size={10} color={Colors.active} style={{}} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('HDetail')}
                                style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
                                <Image source={require('../../../assets/image/s15.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3.5, alignSelf: 'center', }} />
                                <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>Cheel aera</Text>
                                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.r8, { color: Colors.active }]}>$25.00</Text>
                                            <Text style={[style.r8, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$52.00</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={[style.icon, { height: 18, width: 18, backgroundColor: Colors.box }]}>
                                        <Icon name='add' size={10} color={Colors.active} style={{}} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('HDetail')}
                                style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
                                <Image source={require('../../../assets/image/s16.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3.5, alignSelf: 'center', }} />
                                <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>Circlo</Text>
                                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.r8, { color: Colors.active }]}>$12.00</Text>
                                            <Text style={[style.r8, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$35.00</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={[style.icon, { height: 18, width: 18, backgroundColor: Colors.box }]}>
                                        <Icon name='add' size={10} color={Colors.active} style={{}} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('HDetail')}
                                style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
                                <Image source={require('../../../assets/image/s17.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3.5, alignSelf: 'center', }} />
                                <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>Stood 3 Piece</Text>
                                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.r8, { color: Colors.active }]}>$48.00</Text>
                                            <Text style={[style.r8, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$67.00</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={[style.icon, { height: 18, width: 18, backgroundColor: Colors.box }]}>
                                        <Icon name='add' size={10} color={Colors.active} style={{}} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('HDetail')}
                                style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
                                <Image source={require('../../../assets/image/s18.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3.5, alignSelf: 'center', }} />
                                <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>Siira Brows</Text>
                                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.r8, { color: Colors.active }]}>$99.00</Text>
                                            <Text style={[style.r8, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$199.00</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={[style.icon, { height: 18, width: 18, backgroundColor: Colors.box }]}>
                                        <Icon name='add' size={10} color={Colors.active} style={{}} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('HDetail')}
                                style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
                                <Image source={require('../../../assets/image/s19.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3.5, alignSelf: 'center', }} />
                                <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>Stood 3 Piece</Text>
                                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.r8, { color: Colors.active }]}>$48.00</Text>
                                            <Text style={[style.r8, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$67.00</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={[style.icon, { height: 18, width: 18, backgroundColor: Colors.box }]}>
                                        <Icon name='add' size={10} color={Colors.active} style={{}} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('HDetail')}
                                style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
                                <Image source={require('../../../assets/image/s20.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3.5, marginLeft: -8 }} />
                                <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>Solid cerve</Text>
                                        <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.r8, { color: Colors.active }]}>$12.00</Text>
                                            <Text style={[style.r8, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$35.00</Text>
                                        </TouchableOpacity>
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