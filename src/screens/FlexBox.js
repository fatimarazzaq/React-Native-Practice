import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {
  JosefinSans_700Bold
} from "@expo-google-fonts/josefin-sans";
import { useFonts } from 'expo-font';

const FlexBox = () => {

  let [fontLoads] = useFonts({
    JosefinSans_700Bold
  });


  return (
    <View style={styles.row}>
      <View style={[styles.box, styles.box1]}>
        <Text style={styles.textStyle}>This is box 1</Text>
      </View>
      <View style={[styles.box, styles.box2]}>
        <Text style={styles.textStyle}>This is box 2</Text>
      </View>
      <View style={[styles.box, styles.box3]}>
        <Text style={styles.textStyle}>This is box 3</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box:{
    width:200,
    height:50,
    margin:5,
    // flex:1,
    // flexDirection:'row',
    // justifyContent:"center"
  },
  row:{
    marginTop:150,
    display:"flex",
    flexDirection:"column",
    flex:1,
    justifyContent:"center",
    alignItems:'center'
  },
  box1:{
    backgroundColor:"red"
  },
  box2:{
    backgroundColor:"green"
  },
  box3:{
    backgroundColor:"blue"
  },
  textStyle:{
    fontFamily: "JosefinSans_700Bold",
    fontSize: 17,
    color:"white",
    height:50,
    textAlign:"center",
    paddingTop:10
  }
})

export default FlexBox;
