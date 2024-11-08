import { View, Text, TextInput, FlatList, SafeAreaView, Dimensions, StatusBar, KeyboardAvoidingView, ImageBackground, TouchableOpacity, Image, ScrollView, } from 'react-native'
import React, { useState, useContext, } from 'react'
import { useNavigation } from '@react-navigation/native'
import style from '../../theme/style'
import { Colors } from '../../theme/color'
import Icon from 'react-native-vector-icons/Ionicons';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';
import { AppBar } from '@react-native-material/core';

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default function Congrates() {
    const navigation = useNavigation();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false)

    setTimeout(() => {
      navigation.navigate('Location')  
    }, 2000);

    return (
        <SafeAreaView style={[style.area, { backgroundColor: Colors.bg }]}>
            <StatusBar backgroundColor={'transparent'} translucent={true} barStyle={'dark-content'} />
            <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : null}>
                <View style={[style.main, { backgroundColor: Colors.bg, marginTop: Platform.OS === 'ios' ? 10 : 30 }]}>
                    <AppBar
                        style={{ backgroundColor: 'transparent', }}
                        elevation={0}
                        leading={<TouchableOpacity onPress={() => navigation.navigate('Signup')} style={[style.icon]}>
                            <Icon name='arrow-back' size={20} color={Colors.active} />
                        </TouchableOpacity>}
                    />
                    <Text style={[style.subtitle, { color: Colors.active, marginTop: 100 ,textAlign:'center'}]}>Congratulations!</Text>

                    <Image source={require('../../../assets/image/a4.png')} resizeMode='stretch' style={{height:85,width:85,alignSelf:'center',marginVertical:50}}></Image>

                    <Text style={[style.r12, { color: Colors.disable, textAlign:'center'}]}>Your has been successfully created. Please add further information to make your shopping better.</Text>

                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )
}