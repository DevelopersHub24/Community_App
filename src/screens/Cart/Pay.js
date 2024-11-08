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

export default function Pay() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                    <AppBar
                        title='Payment details'
                        titleStyle={[style.s15, { color: Colors.txt }]}
                        centerTitle={true}
                        style={{ backgroundColor: 'transparent' }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('ShipD')} style={[style.icon]}>
                            <Icon name='arrow-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                    />
                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 30 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={[style.r15, { color: Colors.disable }]}>Sub total</Text>
                            <Text style={[style.m15, { color: Colors.txt }]}>$239.00</Text>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
                            <Text style={[style.r15, { color: Colors.disable }]}>Shipping fee</Text>
                            <Text style={[style.m15, { color: Colors.txt }]}>$25.99</Text>
                        </View>

                        <View style={{ height: 1, width: '100%', borderRadius: 1, borderWidth: 1, borderColor: Colors.disable, borderStyle: 'dashed', zIndex: 0, marginTop: 15 }}>
                            <View style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 1, backgroundColor: 'white', zIndex: 1 }} />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 20 }}>
                            <Text style={[style.r15, { color: Colors.disable }]}>Promo code</Text>
                            <View style={{ backgroundColor: Colors.primary, paddingHorizontal: 15, paddingVertical: 1, borderRadius: 8 }}>
                                <Text style={[style.s12, { color: Colors.txt }]}>Apply</Text>
                            </View>
                        </View>

                        <View style={{ height: 1, width: '100%', borderRadius: 1, borderWidth: 1, borderColor: Colors.disable, borderStyle: 'dashed', zIndex: 0, marginTop: 20 }}>
                            <View style={{ position: 'absolute', left: 0, bottom: 0, width: '100%', height: 1, backgroundColor: 'white', zIndex: 1 }} />
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 15 }}>
                            <Text style={[style.r15, { color: Colors.disable }]}>Total</Text>
                            <Text style={[style.r15, { color: Colors.txt }]}>$260.99</Text>
                        </View>

                    </ScrollView>

                    <TouchableOpacity onPress={() => navigation.navigate('Payment')}
                        style={[style.btn, { marginTop: 20, marginBottom: 70 }]}>
                        <Text style={[style.btntxt, { marginBottom: -4 }]}>Proceed to checkout</Text>
                    </TouchableOpacity>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}