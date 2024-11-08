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

export default function Payment() {
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
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Pay')} style={[style.icon]}>
                            <Icon name='arrow-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                    />

                    <Text style={[style.apptitle, { color: Colors.txt, marginTop: 10, }]}>Payment method</Text>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 20 }}>

                        <View style={[style.txtinput, { justifyContent: 'center', marginTop: 10 }]}>
                            <Image source={require('../../../assets/image/a1.png')} resizeMode='stretch' style={{ height: 22, width: 22 }}></Image>
                            <Text style={[style.apptitle, { color: Colors.txt, marginLeft: 10, marginBottom: -8 }]}>Pay</Text>
                        </View>

                        <View style={[style.txtinput, { justifyContent: 'center', marginTop: 20 }]}>
                            <Image source={require('../../../assets/image/a9.png')} resizeMode='stretch' style={{ height: 22, width: 72 }}></Image>
                        </View>

                        <View style={[style.txtinput, { justifyContent: 'center', marginTop: 20 }]}>
                            <Image source={require('../../../assets/image/a2.png')} resizeMode='stretch' style={{ height: 22, width: 20, }}></Image>
                            <Text style={[style.apptitle, { color: Colors.txt, marginLeft: 5, marginBottom: -8 }]}>Pay</Text>
                        </View>

                    </ScrollView>

                    <TouchableOpacity onPress={() => navigation.navigate('PSuccess')}
                        style={[style.btn, { marginTop: 20, marginBottom:70}]}>
                        <Text style={[style.btntxt, { marginBottom: -4 }]}>Proceed to checkout</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}