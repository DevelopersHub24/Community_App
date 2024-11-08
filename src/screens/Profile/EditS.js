import { View, Text, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../../theme/style'
import { Colors } from '../../theme/color'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper'
import { AppBar } from '@react-native-material/core';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function EditS() {
    const navigation = useNavigation();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor='transparent' translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                    <AppBar
                        style={{ backgroundColor: 'transparent' }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Shipping')} style={[style.icon]}>
                            <Icon name='arrow-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                    />


                    <Text style={[style.apptitle, { color: Colors.txt, marginTop: 20 }]}>Edit shipping details</Text>

                    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 10 }}>

                        <View style={[style.txtinput, { marginTop: 20, backgroundColor: Colors.input, }]}>
                            <Icons name='account-outline' size={24} color={Colors.disable}></Icons>
                            <TextInput placeholder='Sarim Saqlain'
                                placeholderTextColor={Colors.active}
                                selectionColor={Colors.primary}
                                style={[style.r14, { color: Colors.active, flex: 1, marginBottom: -5, marginLeft: 10 }]}
                            />
                        </View>

                        <View style={[style.txtinput, { marginTop: 18, backgroundColor: Colors.input, }]}>
                            <Icon name='mail-outline' size={24} color={Colors.icon}></Icon>
                            <TextInput placeholder='arinolabs@gmail.com'
                                placeholderTextColor={Colors.active}
                                selectionColor={Colors.primary}
                                style={[style.r14, { color: Colors.active, flex: 1, marginBottom: -5, marginLeft: 10 }]}
                            />
                        </View>

                        <View style={[style.txtinput, { marginTop: 18, backgroundColor: Colors.input, }]}>
                            <Icons name='lock-outline' size={24} color={Colors.icon}></Icons>
                            <TextInput placeholder='Password'
                                placeholderTextColor={Colors.active}
                                secureTextEntry={!isPasswordVisible}
                                selectionColor={Colors.primary}
                                style={[style.r14, { color: Colors.txt, flex: 1, marginBottom: -5, marginLeft: 10 }]}
                            />
                            <TouchableOpacity onPress={() => setIsPasswordVisible(!isPasswordVisible)} >
                                <Icon name={!isPasswordVisible ? 'eye-off' : 'eye'} color={Colors.icon} size={20} />
                            </TouchableOpacity>
                        </View>

                        <View style={[style.txtinput, { marginTop: 18, backgroundColor: Colors.input, }]}>
                            <Icon name='location-outline' size={24} color={Colors.icon}></Icon>
                            <TextInput placeholder='Free town, NYC'
                                placeholderTextColor={Colors.active}
                                selectionColor={Colors.primary}
                                style={[style.r14, { color: Colors.active, flex: 1, marginBottom: -5, marginLeft: 10 }]}
                            />
                        </View>



                    </ScrollView>
                    <TouchableOpacity onPress={() => navigation.navigate('Shipping')}
                        style={[style.btn, { marginTop: 20 ,marginBottom:30}]}>
                        <Text style={[style.btntxt, { marginBottom: -4 }]}>Save changes</Text>
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}