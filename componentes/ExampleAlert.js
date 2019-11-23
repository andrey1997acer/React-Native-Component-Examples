/**
 *Este componente muestra como se puede mostrar una alerta al usuario y destro de esa alerta dar opciones con botones y tomar sus eventos
 * @author Andrey Delgado Araya
 */


import React,{Component}from 'react';
import {View, Alert, Button} from 'react-native';

class ExampleAlert extends Component {
  state = {  }
  handlePress=()=>{
    Alert.alert('Titulo','Texto que incluyo en la alerta.',[
      {text:'Cerrar', onPress:()=>Alert.alert('Presionaste Cerrar')},
      {text:'Eliminar', onPress:()=>Alert.alert('Presionaste Eliminar')},
      {text:'Aceptar', onPress:()=>Alert.alert('Presionaste Aceptar')}
      
    ])
  }
  render() { 
    return ( 
      <View style={{
        justifyContent:"center",
        alignItems:"center",
        display:"flex", 
        flex:1
        }}
      >
        <Button 
        title="Press Me"
        onPress={this.handlePress}
        />
      </View>
      
     );
  }
}
 
export default ExampleAlert ; 
