import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../../theme/style'
import { Colors } from '../../theme/color'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppBar } from '@react-native-material/core';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Location() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg, }]}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>

                    <AppBar
                        color={Colors.bg}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Congrates')} style={[style.icon]}>
                            <Icon name='arrow-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                    />

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <Text style={[style.apptitle, { color: Colors.active, marginTop: 10 }]}>Location accesss</Text>
                        <Text style={[style.r12, { color: Colors.disable, marginTop: 5 }]}>Arino needs to know your location in order to give you better shopping and delivery experience.</Text>

                        <Image source={require('../../../assets/image/s1.png')} resizeMode='stretch' style={{ height: height / 4, width: width /1.6,alignSelf:'center',marginTop:50 }} />

                    </ScrollView>

                    <TouchableOpacity onPress={() => navigation.navigate('Location1')}
                        style={[style.btn, { marginVertical: 20 }]}>
                        <Text style={[style.btntxt, {}]}>Find my location</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}