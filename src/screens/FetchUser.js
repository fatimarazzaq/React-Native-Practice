import React, { useEffect, useState } from 'react'
import { View,Text,StyleSheet,Image, FlatList, ActivityIndicator } from 'react-native'

const FetchUser = () => {
    const [users,setUsers] = useState([]); 
    const [loading,setLoading] = useState(true);
    
    useEffect(async ()=>{
        const fetchData = async () =>{
        try {
            const data = await fetch("https://thapatechnical.github.io/userapi/users.json");
            const users_json = await data.json();
            setUsers(users_json);
            setLoading(false);
            
        } catch (error) {
            console.log(error)
        }
    }
        fetchData();
    },[])
  return (
    <View >
        {
            loading?(
            <View style={{
            flex: 1,
            opacity: 1,
            backgroundColor: "wheat",
            alignItems: "center",
            justifyContent: "center",
        }}>
                <ActivityIndicator animating={true}
                    size='large'
                    style={{ opacity: 1 }}
                    color='brown' />
            </View>):<View style={styles.main_div}>
                <Text style={styles.heading}>Users Api</Text>
                <View style={styles.flexStyle}>
                <FlatList data={users} renderItem={({item})=>{
                    return <View style={styles.innerDiv}>
                        <Image style={[styles.imgStyle]} source={{ uri: item.image }}/>
                        <View style={styles.padDiv}>
                            <Text style={styles.bold}>User Id : {item.userId}</Text>
                            <Text style={styles.bold}>Name :</Text>
                            <Text style={{color:"white"}}>{item.name}</Text>
                            <Text style={styles.bold}>Email :</Text>
                            <Text style={{color:"white"}}>{item.email}</Text>
                            <Text style={styles.bold}>Phone :</Text>
                            <Text style={{color:"white"}}>{item.mobile}</Text>
                            <Text style={styles.bold}>Description :</Text>
                            <Text style={{width:"100%",color:"white"}}>{item.description}</Text>
                        </View>
                    </View>
                }} keyExtractor={(item) => item.userId.toString()}>
                    
                </FlatList>

                </View>
            </View>
        }
        
    </View>
  )
}


const styles = StyleSheet.create({
    heading:{
        fontSize:30,
        fontWeight:"bold",
        color:"#000000",
        textAlign:"center",
        marginTop:20,
        marginBottom:20,
        color:"white"
    },
    bold:{
        fontWeight:"bold",
        fontSize:18,
        color:"#fcfcfc",
        marginTop:10,
    },
    main_div:{
        paddingVertical:50,
        backgroundColor:"#B696D8",
        paddingBottom:230,
    },
    imgStyle:{
        width:250,
        height:200,
        borderWidth:10,
        borderColor:"white"
    },
    flexStyle:{
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
    },
    innerDiv:{
         width:250,
        marginBottom:30,
    },
    padDiv:{
        paddingVertical:15,
        paddingHorizontal:15,
        width:250,
        backgroundColor:"#363537",
    }
})

export default FetchUser