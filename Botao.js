import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, ImageBackground } from 'react-native';

export default function Botao(props){

    return (
    
        <View style={{backgroundColor:'black', borderColor:'white',borderWidth:1,width:'33.3%', height:'25%'}}>
            <ImageBackground source={{ uri: 'https://images-na.ssl-images-amazon.com/images/I/81-gloSfoLL.png'}} style={{width:'100%', height:'100%'}}>
            <TouchableOpacity  onPress={() => props.logicaCalculadora(props.numero)} style={{width:'100%', height:'100%', justifyContent:'flex-end', alignItems:'center'}}>   
                    <Text style={{fontSize:70,color:'white',textShadowColor:'red', textShadowOffset:{ width:-4, height:2}, textShadowRadius:5}}>{props.numero}</Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>);
    
}