/**
 * se debe instala expo install expo-permissions y expo install expo-location. Esto ya que expo separo el paquete Permissions de 'expo'.
 * Y se de usar como import * as Permissions from 'expo-permissions' 
 * 
 * En este componente pido permiso a movil para usar la Geolocalizacion y usarla.
 * @author Andrey Delgado Araya
 */
import React,{Component}from 'react';
import {StyleSheet, View,Text,Button} from 'react-native';
import * as Permissions from 'expo-permissions'
import * as Location from 'expo-location';

const styles = StyleSheet.create({
  container:{
    display:"flex",
    flex:1,
    justifyContent:"center",
    alignItems:'center'
  }
})


class ExampleGeolocalizacion extends Component {
 
  state = { 
   location:{ coords:{}},
   errorMessage: null
   }

   getLocation =async()=>{
    const {status} = await Permissions.askAsync(Permissions.LOCATION);
    if(status!=='granted'){
      return this.setState({
       errorMessage:'Permisos no aceptados'
    });
    }
    const location = await Location.getCurrentPositionAsync();
    this.setState({
      location
      
    })
    
  }
  render() { 
    
    return ( 
     <View style={styles.container}>
  <Text>{this.state.location.coords.latitude}{" "}{this.state.location.coords.latitude}</Text>
       <Button 
       title="Solicitar GPS"
       onPress={this.getLocation}
       />
     </View>
      
     );
  }
}
 
export default ExampleGeolocalizacion ; 