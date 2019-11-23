/**
 *Este componente muestra como mostrar una imagen desde localhost y desde un servidor publico, para este ultimo el server debe ser https
 * y hay que dar un tamanno a las imagenes dentro del style para que se puedan mostrar
 * @author Andrey Delgado Araya
 */

import React,{Component}from 'react';
import {StyleSheet, View,Image} from 'react-native';

const styles = StyleSheet.create({
  container:{
    display:"flex",
    flex:1,
    justifyContent:"center",
    alignItems:'center'
  },
  fondo:{
    backgroundColor:"cyan"
  }
 
})



class ExampleImage extends Component {
  state = { 
  
   }
 
  render() { 
   
    return ( 
      <View style={[styles.container,styles.fondo]}>
      
        <Image source={{uri:'https://miro.medium.com/max/2128/1*KN7zbaWkbm5E71zZWfTf7A.gif'}} style={{height:300,width:300}} />

        <Image source={require('../assets/icon.png')} />
        
      </View>
      
     );
  }
}
 
export default ExampleImage ; 
