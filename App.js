import React, {Component} from 'react';
import {StatusBar} from 'react-native';
import Routes from './src/Routes';
import { View, StyleSheet } from 'react-native';
class App extends Component{
      render(){
        return(
      <View style={styles.container}>
        <Routes>
          <StatusBar backgroundColor="#002f6c" barStyle="light-content" />
        </Routes>
      </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    },
});
export default App;