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

export default function NArrives() {
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
                        title='New arrivals'
                        titleStyle={[style.s15, { color: Colors.active }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')} style={[style.icon]}>
                            <Icon name='arrow-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('HDetail')}
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
                            <View style={{ marginHorizontal: 10 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('HDetail')}
                                style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
                                <Image source={require('../../../assets/image/s5.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3.5, alignSelf: 'center' }} />
                                <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>Sera Core</Text>
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

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('HDetail')}
                                style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
                                <Image source={require('../../../assets/image/s14.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3.5, alignSelf: 'center', }} />
                                <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>Beast Treas</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.r8, { color: Colors.active }]}>$34.00</Text>
                                            <Text style={[style.r8, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$55.00</Text>
                                        </View>
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

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <TouchableOpacity onPress={() => navigation.navigate('HDetail')}
                                style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
                                <Image source={require('../../../assets/image/s17.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3.5, alignSelf: 'center', }} />
                                <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>Stood 3 Piece</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.r8, { color: Colors.active }]}>$48.00</Text>
                                            <Text style={[style.r8, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$67.00</Text>
                                        </View>
                                    </View>
                                    <View style={[style.icon, { height: 18, width: 18, backgroundColor: Colors.box }]}>
                                        <Icon name='add' size={10} color={Colors.active} style={{}} />
                                    </View>
                                </View>
                            </TouchableOpacity>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <TouchableOpacity onPress={() => navigation.navigate('HDetail')}
                                style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
                                <Image source={require('../../../assets/image/s15.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3.5, alignSelf: 'center', }} />
                                <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>Cheel aera</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.r8, { color: Colors.active }]}>$25.00</Text>
                                            <Text style={[style.r8, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$52.00</Text>
                                        </View>
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
                                <Image source={require('../../../assets/image/s13.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3.5, alignSelf: 'center', }} />
                                <View style={[style.divider, { backgroundColor: Colors.disable, marginVertical: 5 }]}></View>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>Croosa</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                            <Text style={[style.r8, { color: Colors.active }]}>$23.00</Text>
                                            <Text style={[style.r8, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$50.00</Text>
                                        </View>
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

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}