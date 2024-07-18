import React from "react";
import {Text,View,FlatList, StyleSheet, TouchableOpacity, Linking} from "react-native";
import NetflixData from "./netData";


const NetflixScroll = () =>{
    const data = NetflixData;
    return(
        <FlatList
        horizontal
        style={{marginTop:60}}
        data={data}
        renderItem={({item})=>{
            return <View style={styles.divStyle}>
            <Text style={[styles.text,styles.title]}>{item.name}</Text>
            <Text style={[styles.text,{width:"100%",height:35}]}>Year Released : {item.year}</Text>
            <Text style={[styles.text,{width:"100%",height:35}]}>Creator : {item.creator}</Text>
            <Text style={styles.text}>Genre : {item.genre[0]}</Text>
            <View style={styles.innerParent}>
                <TouchableOpacity style={styles.btnStyle} onPress={()=>Linking.openURL("https://netflix.com")}>
                    <Text style={{color:"white"}}>See Details</Text>
                </TouchableOpacity>
            </View>
        </View>
        }}>
        
        </FlatList>
    )
}


const styles = StyleSheet.create({
    text:{textAlign:"center",color:"white"},
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 10,
    },
    divStyle:{
        width:310,
        height:260,
        margin:10,
        borderRadius:10,
        shadowColor:"grey",
        shadowOffset:{width:5,height:5},
        backgroundColor:"black",
        elevation: 10,
        padding:20,
        ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        shadowRadius: 4,
        alignSelf:"center",
        flex:1,
        flexDirection:"row",
        justifyContent:"center"
      },
    },
    btnStyle:{
        backgroundColor:"red",
        width:100,
        height:30,
        flex:1,
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        marginTop:20,

    },
    innerParent:{
        flex:1,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center"
    }
})

export default NetflixScroll;