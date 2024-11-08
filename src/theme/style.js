import { StyleSheet, Dimensions } from "react-native";
import { Colors } from "./color";

const width = Dimensions.get('screen').width
const height = Dimensions.get('screen').height

export default StyleSheet.create({
    area: {
        flex: 1,
    },
    main: {
        flex: 1,
        marginHorizontal: 20
    },
    title: {
        fontSize: 32,
        color: Colors.active,
        fontFamily: 'Poppins-SemiBold'
    },

    apptitle: {
        fontSize: 24,
        color: Colors.active,
        fontFamily: 'Poppins-Medium'
    },
    subtitle: {
        fontSize: 20,
        fontFamily: 'Poppins-Medium',
        color: Colors.active,
    },

    s24: {
        fontSize: 24,
        color: Colors.active,
        fontFamily: 'Poppins-SemiBold'
    },

    r5: {
        fontSize: 5,
        color: Colors.disable,
        fontFamily: 'Poppins-Regular',
    },
    r8: {
        fontSize: 8,
        color: Colors.disable,
        fontFamily: 'Poppins-Regular',
    },

    r10: {
        fontSize: 10,
        color: Colors.disable,
        fontFamily: 'Poppins-Regular',
    },
    s10: {
        fontSize: 10,
        color: Colors.disable,
        fontFamily: 'Poppins-SemiBold',
    },
    m10: {
        fontSize: 10,
        color: Colors.disable,
        fontFamily: 'Poppins-Medium',
    },
   
    r12: {
        fontSize: 12,
        color: Colors.disable,
        fontFamily: 'Poppins-Regular',
    },
    s12: {
        fontSize: 12,
        color: Colors.disable,
        fontFamily: 'Poppins-SemiBold',
    },
    m12: {
        fontSize: 12,
        color: Colors.disable,
        fontFamily: 'Poppins-Medium',
    },
    b12: {
        fontSize: 12,
        color: Colors.disable,
        fontFamily: 'Poppins-Bold',
    },

    r14: {
        fontSize: 14,
        color: Colors.disable,
        fontFamily: 'Poppins-Regular',
    },
    s14: {
        fontSize: 14,
        color: Colors.disable,
        fontFamily: 'Poppins-SemiBold',
    },
    m14: {
        fontSize: 14,
        color: Colors.disable,
        fontFamily: 'Poppins-Medium',
    },
    b14: {
        fontSize: 14,
        color: Colors.disable,
        fontFamily: 'Poppins-Bold',
    },

    r15: {
        fontSize: 15,
        color: Colors.disable,
        fontFamily: 'Poppins-Regular',
    },
    s15: {
        fontSize: 15,
        color: Colors.disable,
        fontFamily: 'Poppins-SemiBold',
    },
    m15: {
        fontSize: 15,
        color: Colors.disable,
        fontFamily: 'Poppins-Medium',
    },
    b15: {
        fontSize: 15,
        color: Colors.disable,
        fontFamily: 'Poppins-Bold',
    },

    r16: {
        fontSize: 16,
        color: Colors.disable,
        fontFamily: 'Poppins-Regular'
    },
    s16: {
        fontSize: 16,
        color: Colors.disable,
        fontFamily: 'Poppins-SemiBold',
    },
    m16: {
        fontSize: 16,
        color: Colors.disable,
        fontFamily: 'Poppins-Medium',
    },
    b16: {
        fontSize: 16,
        color: Colors.disable,
        fontFamily: 'Poppins-Bold'
    },


    r18: {
        fontSize: 18,
        color: Colors.disable,
        fontFamily: 'Poppins-Regular'
    },
    s18: {
        fontSize: 18,
        color: Colors.disable,
        fontFamily: 'Poppins-SemiBold',
    },
    m18: {
        fontSize: 18,
        color: Colors.disable,
        fontFamily: 'Poppins-Medium',
    },
    b18: {
        fontSize: 18,
        color: Colors.disable,
        fontFamily: 'Poppins-Bold'
    },

    icon: {
        height: 31, width: 31, borderRadius: 40, alignItems: 'center', justifyContent: 'center',backgroundColor:'#F9FAFB'
    },
   
    btn: {
        backgroundColor: Colors.primary,
        alignItems: 'center',
        height: 56,
        borderRadius: 12,
        justifyContent: 'center'
    },
    btntxt: {
        fontSize: 16,
        color: Colors.txt,
        fontFamily: 'Poppins-SemiBold'
    },
    btnoutline: {
        borderColor:Colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        height: 56,
        borderRadius: 12,
        borderWidth: 1,
    },
    txtinput: {
        paddingHorizontal: 10,
        height: 56,
        borderRadius: 16,
        backgroundColor: '#F9FAFB',
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        borderRadius: 20,
        paddingHorizontal: 15,
        height: 52,
        borderColor: '#128C7E',
        borderWidth:1,
    },
    search:{
        paddingHorizontal: 10,
        height: 43,
        borderRadius: 43,
        backgroundColor: '#F9FAFB',
        flexDirection: 'row',
        alignItems: 'center'
    },

    indicator: {
        borderColor: '#F9FAFB',
        height: 12,
        width: 12,
        borderRadius: 20,
        backgroundColor: '#F9FAFB',
        marginHorizontal: 5
    },


    shadow: {
        shadowColor: Colors.active,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 10,
        elevation: 5,
        backgroundColor: Colors.bg,

    },

    radio: {
        borderWidth: 1,
        borderRadius: 30,
        paddingHorizontal: 10,
        borderColor: Colors.bord,
        color: Colors.disable,
    },

    divider: {
        height: 1,
        backgroundColor: Colors.border,
    },

    divider1: {
        height: 1.5,
        backgroundColor: Colors.border,
        marginTop: 20,
        marginBottom: 20,
        flex: 1
    },

    dividertxt: {
        color: Colors.disable,
        fontFamily: 'Poppins-Regular'
    },

    
    verticaldivider: {
        height: '60%',
        width: 1,
    },

    modalcontainer: {
        flex: 1,
        borderRadius: 20,
        paddingHorizontal: 10,
        // marginVertical: 140,
        paddingTop: 20,
        marginHorizontal: -10,
        alignSelf: 'center',
    },

    follow: {
        paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5, backgroundColor: Colors.primary
    },
    following: {
        paddingHorizontal: 10, paddingVertical: 5, borderRadius: 5, borderColor: Colors.primary, borderWidth: 1
    },
    categoryTextSelected: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        backgroundColor: Colors.active,
        borderColor: Colors.active,
        color: Colors.secondary,
        fontFamily: 'Poppins-Regular'
    },
    categoryText: {
        fontSize: 14,
        color: Colors.primary,
        borderWidth: 2,
        borderColor: Colors.input,
        borderRadius: 5,
        paddingBottom: 5,
        paddingTop: 7,
        paddingHorizontal: 10,
        marginHorizontal: 5,
        fontFamily: 'Poppins-Regular'
    },
    categorycontainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 30,
        justifyContent: 'space-between',
    },

}
);