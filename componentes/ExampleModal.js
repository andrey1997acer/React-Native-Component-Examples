/**
 *Este componente muestra como usar los Modal, darle efectos y stilos, trasparente, etc
 * @author Andrey Delgado Araya
 */

import React,{Fragment,Component}from 'react';
import {StyleSheet,Text, View, Modal, Button} from 'react-native';

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



class ExampleModal extends Component {
  state = { 
    visible:false
   }
  handlePress=()=>{
    this.setState({
      visible:!this.state.visible
    })
  }
  render() { 
    const {visible} = this.state;
    return ( 
      <View style={[styles.container,styles.fondo]}>
        <Modal transparent={true} animationType="slide" visible={visible}>
          <View style={[styles.container,styles.grey,styles.margin]}>
            <Button
                title="Cerrar Modal"
                onPress={this.handlePress}
            />
          </View>
        </Modal>
        <Button
          title="Abrir Modal"
          onPress={this.handlePress}
        />
      </View>
      
     );
  }
}
 
export default ExampleModal ; 
