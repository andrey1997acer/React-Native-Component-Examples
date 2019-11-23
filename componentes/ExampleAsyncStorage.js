/**
 * En este componente se encargar de guardar datos a niver da base datos local, que aunque cierre la app nunca se pierdan los datos
 * @author Andrey Delgado Araya
 */

import React,{Component}from 'react';
import {StyleSheet,Alert, View,Button,AsyncStorage} from 'react-native';


const styles = StyleSheet.create({
  container:{
    display:"flex",
    flex:1,
    justifyContent:"center",
    alignItems:'center'
  },
  fondo:{
    backgroundColor:"cyan"
  },
  grey:{
    backgroundColor:"grey"
  },
  margin:{
    margin:55
  }
})


class ExampleAsyncStorage extends Component {
 constructor(props){
    super(props)
    this.traerdato()
  }
  state = { 
   
   }

   traerdato = async()=>{
    const dato = await AsyncStorage.getItem('dato');
    Alert.alert('Dato!',dato);
   }
  handlePress= async()=>{
    await AsyncStorage.setItem('dato','id: j$#25sfwf1w5e1we');
    
  }
  render() { 
    
    return ( 
      <View style={[styles.container,styles.fondo]}>
        
        <Button
          title="Asignar Valor"
          onPress={this.handlePress}
        />
      </View>
      
     );
  }
}
 
export default ExampleAsyncStorage ; 


