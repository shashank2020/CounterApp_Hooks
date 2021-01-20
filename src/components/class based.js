import React, { Component } from 'react'
import {StyleSheet, View,Text,Button} from 'react-native'

export default class App extends Component {
  
  
  state = {
    counter:0,
  }

  increaseCounter = () => {
      this.setState({
        counter:this.state.counter+1,
      })
  };

 decreaseCounter = () => {
    this.setState({
      counter:this.state.counter-1,
    })
};

  render() {
   

    return (
     <View style={styles.container}>
        <Button title="Decrease" onPress={this.decreaseCounter}/>
        <Text style={styles.Text}>
          The count is: {this.state.counter} 
        </Text>
        <Button title="Increase" onPress={this.increaseCounter}/>
     </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    alignItems:'center',
    flex:1,
    flexDirection:'column',
    justifyContent:'space-evenly',
  },
  Text:{
    fontSize:50,
    fontWeight:'bold',
  }

});

