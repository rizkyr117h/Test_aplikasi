import React from 'react';
import { Text,View ,TextInput,Image,TouchableOpacity} from 'react-native'
import { useState } from 'react';
import back from '../Image/return.png'


const Login = ({navigation}) => {

    const [state, setState] = useState ({
        username : "",
        password : ""
    })
    const cekloggin = () =>{
        const {username ,password } = state
        if(username == ""){
            alert("Please fill username")
            return false
        }else if(password == ""){
            alert("Please fill password")
            return false
        }
        return true
        
    }
    const cek_api_call = ()=> {
        if(cekloggin()){
            ()=> navigation.navigate("First")
        }
    }

    return (
        
        <View style={{
            flex:1,
            marginHorizontal:15,
            backgroundColor:'white'
        }}>
        <TouchableOpacity 
            onPress={()=> navigation.navigate("First")}
            >
        <Image 
            source={back}
            style={{height:15,width:15,marginTop:60}}
        />
        </TouchableOpacity>
        <Text
            style={{fontSize:36,marginTop:30,marginBottom:30}}
        >Login</Text>
        <TextInput 
        placeholder='Email'
        // onChange={state.username}
        onChangeText={(value) => setState({username :value})}
        style={{
            borderWidth:2,
            height:50,
            paddingLeft:20,
            paddingRight:30,
            marginBottom:16
        }}>
        </TextInput>
        <TextInput 
        placeholder='Password'
        onChangeText={(value) => setState({password :value})}

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

export default Login;