/**
 * Este componente muestra los usuarios usando un fecth y los muestra en un FlatList
 * Un FlatList es un componente que muestra una lista en pantall, pero si esta es muy grande, 
 * rederiza solo lo que muestra y lo otro lo pone en espera y elimina cache y registros
 * @author Andrey Delgado Araya
 */

import React,{Component}from 'react';
import {StyleSheet,Text, View, FlatList} from 'react-native';



const styles = StyleSheet.create({
  container:{
    display:'flex',
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  }
});
export default  class ExampleFlatList extends Component {
  constructor(props){
    super(props)
    this.fetchUsers();
  }
  state={
    loading:true,
    users:[]
  }

  fetchUsers = async()=>{
   const response =  await fetch('https://jsonplaceholder.typicode.com/users');
   const res = await response.json();
   const users = res.map(x=>({...x,key:String(x.id)}))
   this.setState({
     users,
     loading:false
   })
  }
  render() { 
    const {loading,users}=this.state;
    let isLoading = loading? <View style={styles.container}><Text>loading...</Text></View>:
    <View><FlatList 
    data={users} renderItem ={({item})=><Text>{item.name}</Text>}
    /></View>
  
  return (
    
   isLoading
    
  );
  }
}
