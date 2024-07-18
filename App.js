import React from "react";
import { Text,StyleSheet,View } from 'react-native';
// import FlexBox from "./src/screens/FlexBox";
// import NetflixScroll from "./src/screens/NetflixScroll";
// import ColorGenerator from "./src/screens/ColorGenerator";
// import FetchUser from "./src/screens/FetchUser";
import Login from "./components/Login";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from "./components/Home";




const App = () =>{
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
        // <View>
        //   <Login/>
        // </View> 
  )
}




const styles = StyleSheet.create({
  
})

export default App;

