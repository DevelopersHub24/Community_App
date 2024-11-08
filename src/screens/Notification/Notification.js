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

export default function Notification() {
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
                        title='Notification'
                        titleStyle={[style.s15, { color: Colors.active }]}
                        leading={<TouchableOpacity style={[style.icon]}>
                            <Icon name='arrow-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <View style={{ padding: 15, backgroundColor: Colors.input, borderRadius: 15, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: '#FFF9E4', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../../assets/image/s34.png')} resizeMode='stretch' style={{ height: 22, width: 20, }} />
                            </View>
                            <Text style={[style.r14, { color: Colors.active, marginLeft: 15, flex: 1 }]}>Additional 10% discount on pre bookings</Text>
                        </View>

                        <View style={{ marginTop:20,padding: 15, backgroundColor: Colors.input, borderRadius: 15, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: '#FFF9E4', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../../assets/image/s35.png')} resizeMode='stretch' style={{ height: 20, width: 20, }} />
                            </View>
                            <Text style={[style.r14, { color: Colors.active, marginLeft: 15, flex: 1 }]}>A reminder to checkout on your cart items.</Text>
                        </View>

                        <View style={{ marginTop:20,padding: 15, backgroundColor: Colors.input, borderRadius: 15, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: '#FFF9E4', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../../assets/image/s36.png')} resizeMode='stretch' style={{ height: 20, width: 20, }} />
                            </View>
                            <Text style={[style.r14, { color: Colors.active, marginLeft: 15, flex: 1 }]}>Invite your friend and get $10 voucher for your next  purchase.</Text>
                        </View>

                        <View style={{ marginTop:20,marginBottom:20,padding: 15, backgroundColor: Colors.input, borderRadius: 15, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ height: 50, width: 50, borderRadius: 25, backgroundColor: '#FFF9E4', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={require('../../../assets/image/s34.png')} resizeMode='stretch' style={{ height: 22, width: 20, }} />
                            </View>
                            <Text style={[style.r14, { color: Colors.active, marginLeft: 15, flex: 1 }]}>Additional 10% discount on new arrivals.</Text>
                        </View>

                    </ScrollView>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}