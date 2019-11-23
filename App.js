/**
 * @author Andrey Delgado Araya
 */
import React,{Component}from 'react';
import {StyleSheet, View,Text} from 'react-native';



const styles = StyleSheet.create({
  container:{
    display:"flex",
    flex:1,
    justifyContent:"center",
    alignItems:'center'
  }
})


class App extends Component {
 
  state = { 
  
   }
  render() { 
    return ( 
      <View style={styles.container}>
        <Text>Hola Mundo!!</Text>
      </View>
     );
    }
  
}
 
export default App ; 


