import React from 'react';
import { View,Text,Image } from 'react-native'
//Gambar
import Image1 from '../Image/Ellipse.png'
const Chat = () => {
    return (
        <View style={{
            flex:1,
            backgroundColor:'white'
        }}>
            <View>
                <Text style={{marginTop:44,fontWeight:'bold',fontSize:17,textAlign:'center'}}>Chats</Text>
            </View>
            <View style={{borderBottomWidth:0.5,borderBottomColor:'#B0B0B0',marginTop:10}}></View>
            {TabelChat(Image1,"James","Thank you! That was very helpful!")}
            {TabelChat(Image1,"James","Thank you! That was very helpful!")}
            {TabelChat(Image1,"James","Thank you! That was very helpful!")}
            {TabelChat(Image1,"James","Thank you! That was very helpful!")}
        </View>
        //CHAT

    );
}

export default Chat;

const TabelChat = (image,nama,message)=>{
    return(
            <View>
            <View style={{flexDirection:'row'}}>
                <Image 
                    source={image}
                    style = {{width:64,height:64,marginTop:16,marginLeft:16,marginBottom:16}}
                />
                <View style={{marginLeft:16,marginTop:16}}>
                    <Text style={{fontSize:13,fontWeight:'bold'}}>{nama}</Text>
                    <Text style={{marginTop:6}}>{message}</Text>
                </View>
            </View>
            <View style={{borderBottomWidth:0.5,borderBottomColor:'#B0B0B0'}}></View>
            </View>
            
    )
}
