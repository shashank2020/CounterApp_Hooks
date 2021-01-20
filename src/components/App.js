import React, { Component, useState,useEffect} from 'react'
import {StyleSheet, View,Text,Button} from 'react-native'
import Count from './count'

  
const App = () => {
 
  const [showCounter, setshowCounter] = useState(false);
  
  const handleClick = () => {
    setshowCounter(!showCounter);
  }
  

  return (
    <View style={styles.container}>
    <Button  style={styles.obj}  title="Show/Hide Counter" onPress={handleClick}></Button>
    {showCounter && <Count/>}
  </View>
  )
} 
    
const styles = StyleSheet.create({

  container: {
    alignItems:'stretch',
    margin:40,
    flex:1,
   
  },
  Text:{
    fontSize:50,
    fontWeight:'bold',
  },
 

});

export default App;