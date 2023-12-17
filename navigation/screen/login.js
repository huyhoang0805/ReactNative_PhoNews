import React, {Component} from 'react'
import {
    SafeAreaView,
    View,
    Text,
    TouchableOpacity,
    ImageBackground,
    StatusBar,
    StyleSheet,
    Dimensions,
    TestInput,
    Image,
    TextInput
} from 'react-native';
const screenWidth = Dimensions.get('screen').Wwidth;
const screenHeight = Dimensions.get('screen').Wheight;

export default Login = () => {
    return (
        <ImageBackground style={styles.imgBG} source={require('../image/LDBG.jpg')}>
         <StatusBar barStyle="light-content" />
            <SafeAreaView style={styles.araView}>
              <Image style={styles.logo} source={require('../image/logo.jpg')}/>
                <View style={styles.lgContainer}>
                 <View style={styles.inputContainer}>
                         {/* Email */}
                    <View style={styles.inputView}>
                        <Text style={styles.inputText}>Email</Text>
                        <TextInput style={styles.inputPlace}/>
                    </View>
                        {/* Password */}
                    <View style={styles.inputView}>
                        <Text style={styles.inputText}>Password</Text>
                        <TextInput style={styles.inputPlace}/>
                    </View>
                 </View>

                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    araView:{
        justifyContent:'center',
        alignItems:'center',
    },
    imgBG:{
        width:'100%',
        height:'100%',
    },
    logo:{
        width:146,
        height:150,
        resizeMode:'contain',
        borderRadius:100,
        justifyContent:'center'
    },
    lgContainer:{
        width:'100%',
        height:'60%',
    },
    inputContainer:{
        width:'100%',
        height:'40%',
        
        marginTop:50,
        alignItems:'center',
    },
    inputView:{
        flexDirection:'row',
        width:'70%',
        height:30,
        marginTop:15,
        justifyContent:'space-between',
        borderRadius:5,
        borderWidth:1,
        padding:5,
        borderColor:'white',
    },
    inputPlace:{
        width:'70%',
        height:'100%',
        borderWidth:1,
        borderTopColor:"transparent",
        borderLeftColor:"transparent",
        borderRightColor:"transparent",
        borderBottomColor:'white',
    },
    inputText:{
        color:'white',
        fontSize:15,
        
    },
  });
