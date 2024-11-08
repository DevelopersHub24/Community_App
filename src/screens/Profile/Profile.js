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

export default function Profile() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                    <AppBar
                        style={{ backgroundColor: 'transparent' }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')} style={[style.icon]}>
                            <Icon name='arrow-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                    />

                    <Image source={require('../../../assets/image/a7.png')} resizeMode='stretch' style={{ height: 67, width: 67, alignSelf: 'center' }}></Image>
                    <Text style={[style.m16, { color: Colors.txt, marginTop: 10, textAlign: 'center' }]}>Sarim Saqlain</Text>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Icons name='ticket-confirmation-outline' size={24} color={Colors.disable}></Icons>
                            <View style={{ flex: 1, marginLeft: 15 }}>
                                <Text style={[style.m12, { color: Colors.txt }]}>Reffer friend give coupon code</Text>
                                <Text style={[style.m12, { color: Colors.txt, textDecorationLine: 'underline', lineHeight: 14 }]}>Learn More</Text>
                            </View>
                        </View>

                        <View style={[style.divider, { backgroundColor: Colors.disable, height: 0.5, marginVertical: 15 }]}></View>

                        <Text style={[style.m16, { color: Colors.txt, marginTop: 10 ,}]}>Account Settings</Text>


                        <TouchableOpacity onPress={() => navigation.navigate('EditP')}
                        style={{ flexDirection: 'row', alignItems: 'center' ,marginTop:15}}>
                            <Icon1 name='user' size={24} color={Colors.disable}></Icon1>
                            <Text style={[style.m12, { color: Colors.txt ,marginLeft:15,lineHeight:16,flex:1}]}>Personal information</Text>
                            <Icon1 name='chevron-right' size={20} color={Colors.disable}></Icon1>
                        </TouchableOpacity>

                        <View style={[style.divider, { backgroundColor: Colors.disable, height: 0.5, marginVertical: 15 }]}></View>

                        <TouchableOpacity onPress={() => navigation.navigate('Shipping')}
                        style={{ flexDirection: 'row', alignItems: 'center' ,}}>
                            <Icon1 name='book' size={24} color={Colors.disable}></Icon1>
                            <Text style={[style.m12, { color: Colors.txt ,marginLeft:15,lineHeight:16,flex:1}]}>Address Book</Text>
                            <Icon1 name='chevron-right' size={20} color={Colors.disable}></Icon1>
                        </TouchableOpacity>
                        
                        <View style={[style.divider, { backgroundColor: Colors.disable, height: 0.5, marginVertical: 15 }]}></View>

                        <TouchableOpacity onPress={() => navigation.navigate('PayDetail')}
                        style={{ flexDirection: 'row', alignItems: 'center' ,}}>
                            <Icon1 name='credit-card' size={24} color={Colors.disable}></Icon1>
                            <Text style={[style.m12, { color: Colors.txt ,marginLeft:15,lineHeight:16,flex:1}]}>My payment option</Text>
                            <Icon1 name='chevron-right' size={20} color={Colors.disable}></Icon1>
                        </TouchableOpacity>
                        
                        <View style={[style.divider, { backgroundColor: Colors.disable, height: 0.5, marginVertical: 15 }]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' ,}}>
                            <Icon1 name='bell' size={24} color={Colors.disable}></Icon1>
                            <Text style={[style.m12, { color: Colors.txt ,marginLeft:15,lineHeight:16,flex:1}]}>Notification</Text>
                            <Icon1 name='chevron-right' size={20} color={Colors.disable}></Icon1>
                        </View>
                        
                        <View style={[style.divider, { backgroundColor: Colors.disable, height: 0.5, marginVertical: 15 }]}></View>

                        <Text style={[style.m16, { color: Colors.txt, marginTop: 15 }]}>My Order</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center' ,marginTop:15}}>
                            <Icon1 name='heart' size={24} color={Colors.disable}></Icon1>
                            <Text style={[style.m12, { color: Colors.txt ,marginLeft:15,lineHeight:16,flex:1}]}>Wishlist</Text>
                            <Icon1 name='chevron-right' size={20} color={Colors.disable}></Icon1>
                        </View>

                        <View style={[style.divider, { backgroundColor: Colors.disable, height: 0.5, marginVertical: 15 }]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' ,}}>
                            <Icon1 name='codesandbox' size={24} color={Colors.disable}></Icon1>
                            <Text style={[style.m12, { color: Colors.txt ,marginLeft:15,lineHeight:16,flex:1}]}>My order</Text>
                            <Icon1 name='chevron-right' size={20} color={Colors.disable}></Icon1>
                        </View>
                        
                        <View style={[style.divider, { backgroundColor: Colors.disable, height: 0.5, marginVertical: 15 }]}></View>

                        <Text style={[style.m16, { color: Colors.txt, marginTop: 15 }]}>Support</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center' ,marginTop:15}}>
                            <Icon1 name='help-circle' size={24} color={Colors.disable}></Icon1>
                            <Text style={[style.m12, { color: Colors.txt ,marginLeft:15,lineHeight:16,flex:1}]}>Get help</Text>
                            <Icon1 name='chevron-right' size={20} color={Colors.disable}></Icon1>
                        </View>

                        <View style={[style.divider, { backgroundColor: Colors.disable, height: 0.5, marginVertical: 15 }]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' ,}}>
                            <Icon1 name='activity' size={24} color={Colors.disable}></Icon1>
                            <Text style={[style.m12, { color: Colors.txt ,marginLeft:15,lineHeight:16,flex:1}]}>Order Tracking</Text>
                            <Icon1 name='chevron-right' size={20} color={Colors.disable}></Icon1>
                        </View>
                        
                        <View style={[style.divider, { backgroundColor: Colors.disable, height: 0.5, marginVertical: 15 }]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' ,}}>
                            <Icon1 name='edit-3' size={24} color={Colors.disable}></Icon1>
                            <Text style={[style.m12, { color: Colors.txt ,marginLeft:15,lineHeight:16,flex:1}]}>Give us feedback</Text>
                            <Icon1 name='chevron-right' size={20} color={Colors.disable}></Icon1>
                        </View>
                        
                        <View style={[style.divider, { backgroundColor: Colors.disable, height: 0.5, marginVertical: 15 }]}></View>

                        <Text style={[style.m16, { color: Colors.txt, marginTop: 15 }]}>Legal</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'center' ,marginTop:15}}>
                            <Icon name='shield-checkmark-outline' size={24} color={Colors.disable}></Icon>
                            <Text style={[style.m12, { color: Colors.txt ,marginLeft:15,lineHeight:16,flex:1}]}>Term & conditions</Text>
                            <Icon1 name='chevron-right' size={20} color={Colors.disable}></Icon1>
                        </View>

                        <View style={[style.divider, { backgroundColor: Colors.disable, height: 0.5, marginVertical: 15 }]}></View>

                        <View style={{ flexDirection: 'row', alignItems: 'center' ,}}>
                            <Icon1 name='shield' size={24} color={Colors.disable}></Icon1>
                            <Text style={[style.m12, { color: Colors.txt ,marginLeft:15,lineHeight:16,flex:1}]}>Privacy policy</Text>
                            <Icon1 name='chevron-right' size={20} color={Colors.disable}></Icon1>
                        </View>
                        
                        <View style={[style.divider, { backgroundColor: Colors.disable, height: 0.5, marginVertical: 15,marginBottom:20 }]}></View>

                       {/* <View style={[style.verticaldivider,{borderWidth:1, borderStyle:'dashed', borderRadius:1,borderColor:'black',marginBottom:20}]}></View> */}

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}