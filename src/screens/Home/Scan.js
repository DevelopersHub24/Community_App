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

export default function Scan() {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg, }]}>
            <StatusBar translucent={true} backgroundColor={'transparent'} barStyle={'dark-content'} />
            <ImageBackground source={require('../../../assets/image/s33.png')} resizeMode='stretch' style={{ flex: 1, }}>

                <AppBar
                    style={{ marginHorizontal: 20, backgroundColor: 'transparent', marginTop: Platform.OS === 'ios' ? 10 : 30 }}
                    elevation={0}
                    centerTitle={true}
                    title='Searching...'
                    titleStyle={[style.s15, { color: Colors.active }]}
                    leading={<TouchableOpacity onPress={() => navigation.navigate('MyTabs')} >
                        <Icon name='arrow-back' size={20} color={Colors.active} />
                    </TouchableOpacity>}
                />

                <View style={{ flex: 1, justifyContent: 'flex-end', margin: 20 }}>
                    <View style={{ padding: 15, backgroundColor: Colors.input, borderRadius: 15, flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ height: 55, width: 55, borderRadius: 5, backgroundColor: '#EFEFEF', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../../assets/image/s4.png')} resizeMode='stretch' style={{ height: 44, width: 49, marginLeft: -4 }} />
                        </View>
                        <View style={{ flex: 1, marginLeft: 10 }}>
                            <Text style={[style.r14, { color: Colors.active }]}>Comfy Roaser</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={[style.r12, { color: Colors.active }]}>$24.00</Text>
                                <Text style={[style.r10, { color: Colors.disable, marginLeft: 10, textDecorationLine: 'line-through' }]}>$48.00</Text>
                            </View>
                        </View>
                        <View style={[style.icon,{height:24,width:24}]}>
                            <Icon name='chevron-forward' size={20} color={Colors.disable} />
                        </View>
                    </View>
                </View>

            </ImageBackground>
        </SafeAreaView>

    )
}