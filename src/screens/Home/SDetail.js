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

export default function SDetail() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg, }]}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>

                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Search')} style={[style.icon]}>
                            <Icon name='arrow-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <View style={{ padding: 15, backgroundColor: Colors.bord, borderRadius: 15 }}>
                            <View style={{ alignItems: 'flex-end' }}>
                                <Image source={require('../../../assets/image/s2.png')} resizeMode='stretch' style={{ height: 40, width: 40 }} />
                            </View>
                            <Image source={require('../../../assets/image/s29.png')} resizeMode='stretch' style={{ height: height / 3.5, width: width / 1.2, alignSelf: 'center', marginTop: -40 }} />
                            <View style={{ marginBottom: 15, marginTop: 10, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 20, paddingVertical: 10, backgroundColor: Colors.input, borderRadius: 15, marginHorizontal: 20 }}>
                                <Image source={require('../../../assets/image/s37.png')} resizeMode='stretch' style={{ height: 25, width: 25 }} />
                                <View style={[style.icon, { height: 25, width: 25, backgroundColor: '#00BE91' }]}></View>
                                <View style={[style.icon, { height: 25, width: 25, backgroundColor: '#000638' }]}></View>
                                <View style={[style.icon, { height: 25, width: 25, backgroundColor: '#FF9839' }]}></View>
                            </View>
                        </View>

                        <Text style={[style.apptitle, { color: Colors.active, marginTop: 10 }]}>Breezo</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={[style.r12, { color: Colors.active }]}>$159.00</Text>
                            <Text style={[style.r12, { color: Colors.disable, marginLeft: 15, textDecorationLine: 'line-through' }]}>$250.00</Text>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('Review')}
                        activeOpacity={10} style={{ marginTop: 15, padding: 12, backgroundColor: Colors.input, borderRadius: 10, flexDirection: 'row', alignItems: 'center' }}>
                            <Icon name='star' size={12} color={Colors.primary} style={{ marginTop: -3 }} />
                            <Text style={[style.r10, { color: Colors.disable, marginLeft: 10, flex: 1 }]}><Text style={[style.m10, { color: Colors.active }]}>4.9</Text> Ratings</Text>
                            <Text style={[style.r10, { color: Colors.disable, marginRight: 10, }]}><Text style={[style.m10, { color: Colors.active }]}>1456</Text> Reviews</Text>
                            <Icon name='chevron-forward' size={15} color={Colors.disable} style={{ marginTop: -3 }} />
                        </TouchableOpacity>

                        <Text style={[style.m16, { color: Colors.active, marginTop: 15 }]}>Description</Text>

                        <Text style={[style.r12, { color: Colors.disable, marginTop: 10, marginBottom: 10 }]}>Extremely comfy made with highly flexible materials
                            having the smooth texture on the cover. Inside of the
                            sofa is made up of fine wood having the extra long
                            life.</Text>

                    </ScrollView>

                    <TouchableOpacity onPress={() => this.RBSheet.open()}
                        style={[style.btn, { marginVertical: 20 }]}>

                        <RBSheet ref={ref => {
                            this.RBSheet = ref;
                        }}
                            height={250}
                            openDuration={100}
                            customStyles={{
                                container: {
                                    borderTopRightRadius: 20,
                                    borderTopLeftRadius: 20,
                                    backgroundColor: Colors.bg
                                }
                            }}>
                            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
                                <Text style={[style.m16, { color: Colors.active, textAlign: 'center' }]}>Item successfully added!</Text>

                                <TouchableOpacity onPress={() => this.RBSheet.close()}
                                    style={[style.btn,{marginVertical:20}]}>
                                    <Text style={[style.btntxt]}>Continue shopping</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => {this.RBSheet.close(),navigation.navigate('MyTabs')}}
                                    style={[style.btnoutline,{marginBottom:20}]}>
                                    <Text style={[style.btntxt]}>View cart</Text>
                                </TouchableOpacity>
                            </View>
                        </RBSheet>

                        <Text style={[style.btntxt]}>Add to cart</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}