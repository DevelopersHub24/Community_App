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

export default function Cart() {
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
                        title='My cart'
                        titleStyle={[style.s15, { color: Colors.active }]}
                        leading={<TouchableOpacity style={[style.icon]}>
                            <Icon name='arrow-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <View style={{ padding: 15, backgroundColor: Colors.input, borderRadius: 15, marginTop: 0, }}>
                            <View style={{ alignItems: 'flex-end', }}>
                                <View style={[style.icon, { height: 20, width: 20, backgroundColor: Colors.bord }]}>
                                    <Icon name='close' size={15} color={Colors.active} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -7 }}>
                                <View style={{ height: 55, width: 55, borderRadius: 5, backgroundColor: '#EFEFEF', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../../assets/image/s4.png')} resizeMode='stretch' style={{ height: 44, width: 49, marginLeft: -4 }} />
                                </View>
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={[style.r14, { color: Colors.active, }]}>Comfy Roaser</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>$24.00</Text>
                                        <Text style={[style.r10, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$48.00</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: -7 }}>
                                <View style={[style.icon, { height: 20, width: 20, backgroundColor: Colors.bord }]}>
                                    <Icon name='remove' size={15} color={Colors.active} />
                                </View>
                                <Text style={[style.r10, { color: Colors.active, marginHorizontal: 8 }]}>01</Text>
                                <View style={[style.icon, { height: 20, width: 20, backgroundColor: Colors.bord }]}>
                                    <Icon name='add' size={15} color={Colors.active} />
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 15, backgroundColor: Colors.input, borderRadius: 15, marginTop: 15, }}>
                            <View style={{ alignItems: 'flex-end', }}>
                                <View style={[style.icon, { height: 20, width: 20, backgroundColor: Colors.bord }]}>
                                    <Icon name='close' size={15} color={Colors.active} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -7 }}>
                                <View style={{ height: 55, width: 55, borderRadius: 5, backgroundColor: '#EFEFEF', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../../assets/image/s13.png')} resizeMode='stretch' style={{ height: 38, width: 40, marginLeft: -4 }} />
                                </View>
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={[style.r14, { color: Colors.active, }]}>Croosa</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>$23.00</Text>
                                        <Text style={[style.r10, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$50.00</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: -7 }}>
                                <View style={[style.icon, { height: 20, width: 20, backgroundColor: Colors.bord }]}>
                                    <Icon name='remove' size={15} color={Colors.active} />
                                </View>
                                <Text style={[style.r10, { color: Colors.active, marginHorizontal: 8 }]}>01</Text>
                                <View style={[style.icon, { height: 20, width: 20, backgroundColor: Colors.bord }]}>
                                    <Icon name='add' size={15} color={Colors.active} />
                                </View>
                            </View>
                        </View>

                        <View style={{ padding: 15, backgroundColor: Colors.input, borderRadius: 15, marginTop: 15, }}>
                            <View style={{ alignItems: 'flex-end', }}>
                                <View style={[style.icon, { height: 20, width: 20, backgroundColor: Colors.bord }]}>
                                    <Icon name='close' size={15} color={Colors.active} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: -7 }}>
                                <View style={{ height: 55, width: 55, borderRadius: 5, backgroundColor: '#EFEFEF', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image source={require('../../../assets/image/s18.png')} resizeMode='stretch' style={{ height: 41, width: 41, }} />
                                </View>
                                <View style={{ marginLeft: 10, flex: 1 }}>
                                    <Text style={[style.r14, { color: Colors.active, }]}>Siira Brows</Text>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 5 }}>
                                        <Text style={[style.r10, { color: Colors.active }]}>$99.00</Text>
                                        <Text style={[style.r10, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$199.00</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', marginTop: -7 }}>
                                <View style={[style.icon, { height: 20, width: 20, backgroundColor: Colors.bord }]}>
                                    <Icon name='remove' size={15} color={Colors.active} />
                                </View>
                                <Text style={[style.r10, { color: Colors.active, marginHorizontal: 8 }]}>01</Text>
                                <View style={[style.icon, { height: 20, width: 20, backgroundColor: Colors.bord }]}>
                                    <Icon name='add' size={15} color={Colors.active} />
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('ShipD')}
                        style={[style.btn, { marginVertical: 20 }]}>
                        <Text style={[style.btntxt]}>Proceed to checkout</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}