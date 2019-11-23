/**
 *Este componente es un loading o snipper, le datos un tamanno y un color
 * @author Andrey Delgado Araya
 */
import React,{Fragment,Component}from 'react';
import {StyleSheet,Text, View, ActivityIndicator} from 'react-native';



class ExampleActivityIndicator extends Component {
  state = {  }
  render() { 
    return ( 
      <View>
        <ActivityIndicator
          size="large"
          color="#0000ff"
        />
        <ActivityIndicator
          size="large"
          color="#00c0ff"
        />
        <ActivityIndicator
          size="large"
          color="#e0b0ff"
        />
        <ActivityIndicator
          size="large"
          color="#0000ff"
        />
      </View>
      
     );
  }
}
 
export default ExampleActivityIndicator ; 
