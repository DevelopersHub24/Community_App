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

export default function Wishlist() {
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
                        title='Wishlist'
                        titleStyle={[style.s15, { color: Colors.active }]}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')} style={[style.icon]}>
                            <Icon name='arrow-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 10 }}>
                            <View style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
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
                            </View>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <View style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
                                <Image source={require('../../../assets/image/s19.png')} resizeMode='stretch' style={{ height: height / 7.5, width: width / 3.5, alignSelf: 'center', }} />
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
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <View style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
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
                            </View>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <View style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
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
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20 }}>
                            <View style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
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
                            </View>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <View style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
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
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 20,marginBottom:20 }}>
                            <View style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
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
                            </View>
                            <View style={{ marginHorizontal: 10 }}></View>
                            <View style={{ flex: 1, padding: 12, backgroundColor: Colors.bord, borderRadius: 10 }}>
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
                            </View>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}