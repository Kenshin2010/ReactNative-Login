/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput, Button,TouchableOpacity, Alert } from 'react-native';

export default class App extends Component {
  constructor(props) { 
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
      <View style={{backgroundColor:'#3F5C9A',alignItems:'center',flex:1}}>

        <Text style={{fontSize:35,color:'#fff',fontWeight:'bold',marginTop:150}}>Facebook</Text>

        <TextInput placeholder='Enter nick name'
        style={{backgroundColor: 'white',height: 45, width:300, borderColor: '#E3E3E3', paddingLeft:10,
        borderTopLeftRadius:5,borderTopRightRadius:5, borderWidth: 0.25, marginTop:50}}
        onChangeText={(text) => this.setState({text})} />

        <TextInput placeholder='Enter password' textContentType="password" secureTextEntry={true}
        style={{backgroundColor: 'white',height: 45, width:300, borderColor: '#E3E3E3', paddingLeft:10,
        borderBottomLeftRadius:5,borderBottomRightRadius:5, borderWidth: 0.25}}
        onChangeText={(text) => this.setState({text})}/>

        {/* <Button
         style={{backgroundColor: 'white',height: 45, width:300, borderColor: '#E3E3E3', paddingLeft:10, marginTop:50,
         borderBottomLeftRadius:5,borderBottomRightRadius:5, borderWidth: 0.25}}
          title="Login"
          color="#E3E3E3"
          onPress={() => this._handlePress()}
          accessibilityLabel="Learn more about this purple button"
        /> */}
          
          {/* text color for button #595D68 */}
          
          <View style={[{ width: 300, marginTop: 50, backgroundColor: "#FF3D00" }]}>
          <Button color='#D6D6D6' title='Login' />
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
