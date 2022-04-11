import React from 'react';
import { Text,View,Image,ScrollView} from 'react-native'
import { borderColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
//image
import image3 from '../Image/image3.jpg'
import image2 from '../Image/image2.jpg'
import image1 from '../Image/image1.jpg'
import mesjid from '../Image/mesjid.jpg'
import gambar2 from '../Image/gambar2.jpg'
import gambar3 from '../Image/gambar3.jpg'
import gambar4 from '../Image/gambar4.jpg'
import gambar5 from '../Image/gambar5.jpg'
import gambar6 from '../Image/gambar6.jpg'
import gambar7 from '../Image/gambar7.jpg'
import gambar8 from '../Image/gambar8.jpg'
const Home = () => {
    return (
        <View style={{
            flex:1,
            marginHorizontal:18,
            backgroundColor:'white'
        }}>
        <ScrollView>
            <Text style={{
                fontSize:36,marginTop:30
            }}>Discover</Text>
            <Text style={{
                fontSize:13,fontWeight:'bold',marginTop:20,marginBottom:20
            }}>WHAT'S NEW TODAY</Text>

            <ScrollView horizontal={true} style={{flexDirection:'row'}}>
            {story(image2)}
            {story(image3)}
            {story(image1)}
            </ScrollView>
            <View>
            <Text style={{
                fontSize:13,fontWeight:'bold',marginTop:20,marginBottom:20
            }}>BROWSE ALL</Text>
            <View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20}}>
                <Image 
                source={mesjid}
                style={{height:150,width:150}} />
                <Image 
                source={gambar2}
                style={{height:150,width:150}} />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20}}>
                <Image 
                source={gambar3}
                style={{height:150,width:150}} />
                <Image 
                source={gambar4}
                style={{height:150,width:150}} />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20}}>
                <Image 
                source={gambar5}
                style={{height:150,width:150}} />
                <Image 
                source={gambar6}
                style={{height:150,width:150}} />
            </View>
            <View style={{flexDirection:'row',justifyContent:'space-between',marginBottom:20}}>
                <Image 
                source={gambar7}
                style={{height:150,width:150}} />
                <Image 
                source={gambar8}
                style={{height:150,width:150}} />
            </View>
            

            
            {/* button */}
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
            <Text style={{fontWeight:'bold',color:'black'}}>SEE MORE </Text>
            </View>
            </View>
            </View>  
        </ScrollView>

            
        </View>
    );
}

export default Home;

const story = (image) =>{
    return(
        <View>
            <Image
                source={image}
                style={{
                height:343,
                width:343,
                marginRight:10
                }}
            />
        </View>

    )
}