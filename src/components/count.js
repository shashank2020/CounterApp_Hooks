import React, { Component, useState,useEffect} from 'react'
import {StyleSheet, View,Text,Button} from 'react-native'


  
const count = () => {
 
  const [count, setcount] = useState(0);
  
  const decreaseCounter = () => {
    setcount(count-1);
  }
  const increaseCounter = () => {
    setcount(count+1);
  }

  useEffect(() => {
      console.log("count is "+count);
      return () => {
           console.log("Cleanup has been called");
      }
  }, [count])

  return (
    <View style={styles.container}>
        <Button title="Increase" onPress={increaseCounter}/>
    <Text style={styles.Text}>
      The count is: {count} 
    </Text>
        <Button title="Decrease" onPress={decreaseCounter}/>
    </View>
  )
} 
    
const styles = StyleSheet.create({

  container: {
    alignItems:'center',
    flex:1,
    margin:40,
  },
  Text:{
      marginVertical:30,
    fontSize:30,
    fontWeight:'bold',
  }

});

export default count;