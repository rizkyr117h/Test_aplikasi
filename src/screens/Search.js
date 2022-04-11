import React from 'react';
import { Text,View ,TextInput,Image,TouchableOpacity} from 'react-native'
import { useState } from 'react';
import back from '../Image/return.png'


const Search = ({navigation}) => {
    return (
        
        <View style={{
            flex:1,
            marginHorizontal:15,
            backgroundColor:'white'
        }}>
        <Text
            style={{fontSize:36,marginTop:30,marginBottom:30}}
        >Search</Text>
        <TextInput 
        placeholder='Search All Photos'
        style={{
            borderWidth:2,
            height:50,
            paddingLeft:20,
            paddingRight:30
        }}>
        </TextInput>
        <TouchableOpacity 
        onPress={()=> navigation.navigate("Dashboard")}
        >
        <View style={{
            borderWidth:2,
            borderRadius:5,
            height:50,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'black',
            marginTop:16
            
        }}>
            <Text style={{fontWeight:'bold',color:'white'}}>NEXT</Text>
        </View>
        {/* <Text>{state.username}</Text> */}
        </TouchableOpacity>
        </View>
    );
}

export default Search;