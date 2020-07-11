import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import NavigationBar from 'react-native-navbar';
class App extends Component{
      render(){
        return(
      <View style={styles.conatiner}>
          <View style={styles.navBar}>
            <NavigationBar
                leftButton={leftButtonConfig}
            />
          </View>
         
      </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    navBar: {
      flex: 1,
      color: 'black'
    },
    textDisplay: {
      justifyContent: 'center',
      alignItems: 'center',
    },
});

const rightButtonConfig = {
  title: 'Next',
  handler: () => alert('hello!'),
};
const leftButtonConfig = {
  title: 'Weather App',
};


export default App;