/**
 *Este componente se crea un stilo Select Option en HTML, y como obtener las opciones
 * @author Andrey Delgado Araya
 */
import React,{Component}from 'react';
import {View, Picker} from 'react-native';


export default  class ExamplePicker extends Component {
  state={
    value:''
  }
  render() { 
  return (
    
    <View>
      <Picker selectedValue={this.state.value || 'id_1'} 
      style={{height:70,width:150}}
      onValueChange={(value,index)=>{
        this.setState({
          value
        })
      }}
      >
        <Picker.Item label="Andrey Delgado" value="id_1"/>
        <Picker.Item label="Gabriel Delgado" value="id_2"/>

      </Picker>
    </View>
  );
  }
}
