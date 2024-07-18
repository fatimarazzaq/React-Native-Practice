import React, { useState } from 'react';
import { View,Text, StyleSheet,TouchableOpacity,Alert, FlatList } from 'react-native';

const ColorGenerator = () => {
    const [bgColor, setBgColor] = useState([]);

    const random_color = () =>{
        const red_color = Math.floor(Math.random()*256)
        const green_color = Math.floor(Math.random()*256)
        const blue_color = Math.floor(Math.random()*256)
        return `rgb(${red_color},${green_color},${blue_color})`
    }


  return (
        <View style= {styles.container}>
            <TouchableOpacity style={styles.btnStyle} onPress={()=>setBgColor((pre)=>[...pre,random_color()])}>
                <Text style={styles.btnText}>Generate Color</Text>
            </TouchableOpacity>
            <FlatList 
            vertical
            inverted
            data={bgColor}  
            renderItem={({item})=>{
             return <View style={[styles.innerDiv,{backgroundColor:item}]}>
                    <Text style={[styles.colorStyle]} >{item}</Text>
                </View>
            }}
            >
                
            </FlatList>
        </View>
  )
}


const styles = StyleSheet.create({

    btnStyle:{
        backgroundColor:'purple',
        borderRadius:10,
        padding:10,
        margin:10,
        marginTop:50,
    },
    btnText:{
        textAlign:"center",
        color:"white",
        fontWeight:"bold",
        fontSize:20,
    },
    viewStyle:{
        flex:1,
        flexDirection:"column",
        // alignItems: "center",  
    },
    innerDiv:{
        width:"full",
        height:100,
        backgroundColor:"black",
        borderRadius:10,
        margin:10,
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
    },
    colorStyle:{
        color:"white",
        fontSize:16,
    }
})

export default ColorGenerator