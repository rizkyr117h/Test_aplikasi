import React from 'react';
import { Text,View,Image,TouchableOpacity} from 'react-native'
import gambar from '../Image/VB.png'
const First = ({navigation}) => {
    return (
        <View style={{
            flex:1,
        }}>
        <View>
            <Image
                source={gambar}
                style={{width:'100%',height:500}}
            />
        </View>
        <View style={{ 
            flex:1,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
        }}>
        <TouchableOpacity
            onPress={()=> navigation.navigate("Login")}
        >
        <View style={{
            borderWidth:2,
            borderRadius:5,
            width:167,
            height:52,
            justifyContent:'center',
            alignItems:'center',
            marginRight:20
        }}>
            <Text style={{fontWeight:'bold'}}>LOG IN</Text>
        </View>
        </TouchableOpacity>

        <TouchableOpacity
        onPress={()=> navigation.navigate("Register")}
        >
        <View style={{
            borderWidth:2,
            borderRadius:5,
            width:167,
            height:52,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'black',
            
        }}>
            <Text style={{fontWeight:'bold',color:'white'}}>REGISTER</Text>
        </View>
        </TouchableOpacity>


        </View>
            
        </View>
    );
}

export default First;