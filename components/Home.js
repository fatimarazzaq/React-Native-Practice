import React from 'react'
import {View,Text,StyleSheet, Button} from "react-native"

const Home = ({route,navigation}) => {
   const {myname } =  route.params;
  return (
    <View style={styles.mainContainer}>
        <Text style={styles.heading}>Welcome, {myname}</Text>
        <Button title='Go Back' style={styles.btnStyle} onPress={()=>navigation.goBack()} />
    </View>
  )
}

const styles = StyleSheet.create({
    mainContainer:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        height:"100%"
    },
    btnStyle:{
        width:60,
        height:50
    },
    heading:{
        fontSize:30,
        fontWeight:"bold",
    }
})

export default Home