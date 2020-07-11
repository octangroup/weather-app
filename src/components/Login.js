import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import NavigationBar from 'react-native-navbar';

class Login extends Component{
    render(){
        return(
      <View style={styles.conatiner}>
          <View style={styles.appNav}>
            <NavigationBar
                statusBar = {statusBarConfig}
                leftButton={leftButtonConfig}
                tintColor={('000fff')}
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
    appNav: {
      flex: 1,
      color: 'black',
    
    },
});

const leftButtonConfig = {
  title: 'Weather App',
};

const statusBarConfig = {
    showAnimation: 'slide',
    tintColor: 'black',
}

export default Login;