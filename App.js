import { StatusBar } from 'expo-status-bar';
import React,{useState, useEffect} from 'react';
import { StyleSheet, Text, View, TouchableHighlight, TouchableOpacity, LogBox, ImageBackground } from 'react-native';
import Botao from './Botao';

export default function App() {
  
  LogBox.ignoreAllLogs(true);//ignora os avisos de alerta
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [sinal, setSinal] = useState("");

  const [stringCalculo, setStringCalculo] = useState("0");

  var numeros = [];
  for(var i = 0; i <= 9; i++){
    numeros.push(i);//Ira pegar os numeros gerados pelo loop, e colocar no array numeros
  }

  function logicaCalculadora(n){
    if(sinal == ""){
      setFirstNumber(parseInt(firstNumber.toString() + n.toString()));
      setStringCalculo(parseInt(firstNumber.toString() + n.toString()));
    }

    if((n == "/" || n == "*" || n == "+" || n == "-")&& secondNumber == 0){
      setStringCalculo(firstNumber.toString() + n);
      setSinal(n);
    }

    if(sinal != ""){
      setSecondNumber(parseInt(secondNumber.toString() + n.toString()));
      setStringCalculo(firstNumber+sinal+parseInt(secondNumber.toString() + n.toString()));
    }

    if(n == "="){
      let resultado = 0;
      if(sinal == "+"){
        resultado = firstNumber + secondNumber;
      }
      else if(sinal == "-"){
        resultado = firstNumber - secondNumber;
      }
      else if(sinal == "/"){
        resultado = firstNumber / secondNumber;
      }
      else if(sinal == "*"){
        resultado = firstNumber * secondNumber;
      }
      setStringCalculo(resultado);
      setSinal("");
      setFirstNumber(resultado);
      setSecondNumber(0);
    }
  }
  
  return (
    <View style={{flex:1, backgroundColor:'black'}}>
      <StatusBar hidden />
      <View style={styles.topo}><ImageBackground source={{ uri: 'https://wallpaperaccess.com/download/purple-anime-scenery-87215'}} style={{width:'100%', height:'100%'}}><Text style={{fontSize:40, paddingLeft:20, color:'red', textShadowColor:'black', textShadowOffset:{ width:-2, height:2}, textShadowRadius:5}}>{stringCalculo}</Text></ImageBackground></View>

      <View style={{flexDirection:'row',height:'10%',alignItems:'center'}}>
        <TouchableOpacity onPress={() =>logicaCalculadora('+')} style={{width:'20%',backgroundColor:'#fccaec',height:'100%', justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:70,color:'white',textShadowColor:'red', textShadowOffset:{ width:-2, height:2}, textShadowRadius:5}}>+</Text></TouchableOpacity>
        <TouchableOpacity onPress={() =>logicaCalculadora('-')} style={{width:'20%',backgroundColor:'#fccaec',height:'100%', justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:70,color:'white',textShadowColor:'red', textShadowOffset:{ width:-2, height:2}, textShadowRadius:5}}>-</Text></TouchableOpacity>
        <TouchableOpacity onPress={() =>logicaCalculadora('/')} style={{width:'20%',backgroundColor:'#fccaec',height:'100%', justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:70,color:'white',textShadowColor:'red', textShadowOffset:{ width:-2, height:2}, textShadowRadius:5}}>/</Text></TouchableOpacity>
        <TouchableOpacity onPress={() =>logicaCalculadora('*')} style={{width:'20%',backgroundColor:'#fccaec',height:'100%', justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:70,color:'white',textShadowColor:'red', textShadowOffset:{ width:-2, height:2}, textShadowRadius:5}}>*</Text></TouchableOpacity>
        <TouchableOpacity onPress={() =>logicaCalculadora('=')} style={{width:'20%',backgroundColor:'#fccaec',height:'100%', justifyContent:'center',alignItems:'center'}}><Text style={{fontSize:70,color:'white',textShadowColor:'red', textShadowOffset:{ width:-2, height:2}, textShadowRadius:5}}>=</Text></TouchableOpacity>
      </View>

      <View style={{flexDirection:'row', flexWrap:'wrap', borderTopColor:'black', borderTopWidth:2, height:'66.8%'}}>
          { 
            numeros.map(function(e){
              return(<Botao logicaCalculadora={logicaCalculadora} numero={e}></Botao>);
            })
          }
          <TouchableOpacity style={{width:'66.7%',backgroundColor:'black',height:'100%', justifyContent:'center',alignItems:'center'}}><Text style={{flex:1,textAlign:'center',fontSize:50,color:'purple',textShadowColor:'white', textShadowOffset:{ width:-3, height:2}, textShadowRadius:3}}>By ShuuWolf</Text></TouchableOpacity>
      </View>
    </View>
  );
}

var styles = StyleSheet.create({
    topo:{
      backgroundColor:'rgb(20,20,20)',
      height:'23.2%',
      justifyContent:'center',
    }
});
