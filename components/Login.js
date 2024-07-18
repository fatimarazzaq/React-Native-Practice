import React, { useState } from 'react'
import {View, Text,StyleSheet, TextInput, TouchableOpacity,Alert} from "react-native";
import CheckBox from 'expo-checkbox';

const Login = ({navigation}) => {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const [isSelected, setSelection] = useState(false);
    const formSubmitted = ()=>{
        console.log(username);
        console.log(password);
        Alert.alert("Form Submitted Successfully.") 
        navigation.navigate("Home",{'myname':`${username}`})   
    }
  return (
    <View style={styles.container}>
        <Text style={[styles.colorWhite,styles.heading]}>Sign in</Text>
        <Text style={styles.colorWhite}>You can reach us anytime via any@fatima.com</Text>
        <View style={styles.inputs_container}>
            <View>
                <Text style={[styles.colorWhite,styles.labels]}>Username</Text>
                <TextInput placeholder='' value={username} autoCapitalize="none" autoComplete="off" onChangeText={(val)=>setUsername(val)} style={[styles.textInput,styles.colorWhite]}/>
            </View>
            <View>
                <Text style={[styles.colorWhite,styles.labels]}>Password</Text>
                <TextInput placeholder='' value={password} autoCapitalize="none" autoComplete="off" secureTextEntry={true} onChangeText={(val)=>setPassword(val)} style={[styles.textInput,styles.colorWhite]}/>
            </View>
            <View style={styles.checkbox_div}>
                <CheckBox
                value={isSelected}
                onValueChange={()=>setSelection(!isSelected)}
                color={isSelected?"orange":undefined}
                />
                <Text style={[styles.colorWhite,styles.agree_text]}>Agree Terms and Conditions</Text>
            </View>
            <TouchableOpacity 
            disabled={!isSelected?true:false}
            style={[styles.submit_btn,{backgroundColor:isSelected?"orange":"gray"}]}
             onPress={formSubmitted}>
                <Text style={[styles.submit_text]}>Login</Text>
            </TouchableOpacity>
        </View>
    </View>

    // 
  )
}


const styles = StyleSheet.create({
    checkbox_div:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        marginTop:30,
        marginHorizontal:13,
    },
    agree_text:{
        marginHorizontal:8,
    },
    heading:{
        fontSize:26,
        fontWeight:"bold",
        marginVertical:10,
        marginTop:10,
    },
    inputs_container:{
        marginTop:15
    }
    ,labels:{
        fontSize:14,
        letterSpacing:2,
        marginVertical:5,
        marginTop:15,
        marginLeft:5
    },
    submit_btn:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"90%",
        marginVertical:10,
        marginTop:30,
        borderRadius:30,
        paddingVertical:15,
    },
    submit_text:{
        color:'#100F10',
        fontWeight:"bold",
        fontSize:15
    },
    colorWhite:{
        color:'white'
    },
    container: {
        width:"100%",
        height:"100%",
        backgroundColor:"#100F10",
        paddingTop:50,
        paddingLeft:30,
    },
    textInput:{
        borderWidth:2,
        borderColor:"white",
        borderRadius:30,
        padding:10,
        paddingHorizontal:22,
        width:"90%",
    }
})


export default Login



