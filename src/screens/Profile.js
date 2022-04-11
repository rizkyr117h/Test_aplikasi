import React from 'react';
import { View,Text ,Image,TouchableOpacity,ScrollView} from 'react-native'
import { Video, AVPlaybackStatus } from 'expo-av';
//gambar
import profile from '../Image/profile123.png'
import p1 from '../Image/p1.jpg'
import dog from '../Image/dog.jpg'
import video1 from '../video.mp4'
const Profile = () => {
    return (
        <ScrollView style={{flex:1,marginHorizontal:18}}>
            <View>
                <Image
                    source={profile}
                    style={{width:128,height:128,alignSelf:'center',marginTop:80}}
                />
            </View>
            
            <Text style={{fontSize:36,alignSelf:'center',marginTop:20}}>Jane</Text>
            <Text style={{fontSize:13,alignSelf:'center',marginTop:10,fontWeight:'bold'}}>SAN FRANSISCO, CA</Text>

            <TouchableOpacity>
            <View style={{
            borderWidth:2,
            borderRadius:5,
            height:50,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'black',
            marginTop:16,
            borderColor:'black'
            
            }}>
            <Text style={{fontWeight:'bold',color:'white'}}>FOLLOW JANE </Text>
            </View>
            </TouchableOpacity>

            <TouchableOpacity>
            <View style={{
            borderWidth:2,
            borderRadius:5,
            height:50,
            justifyContent:'center',
            alignItems:'center',
            backgroundColor:'white',
            marginTop:16,
            borderColor:'black'
            
            }}>
            <Text style={{fontWeight:'bold',color:'black'}}>MESSAGE </Text>
            </View>
            </TouchableOpacity>

            <View style={{marginTop:18}}>
                <Image source={p1} style={{width:400,height:400,alignSelf:'center',resizeMode:'contain'}} />
                <Image source={dog} style={{width:400,height:400,alignSelf:'center',resizeMode:'contain'}} />
            </View>
            
            <Video
                source={video1}
                  style={{
                    flex:1,
                    alignSelf:'center',
                    height:300,
                    width:300
                  }}
                  useNativeControls
                  resizeMode="contain"
                />
            
        </ScrollView>
    );
}

export default Profile;