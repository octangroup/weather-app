import React, {Component} from 'react';
import {Router, Scene} from 'react-native-router-flux';
import { Actions } from 'react-native-router-flux';
import Home from './components/Home';
import Weather from './components/weather';
export default class Routes extends Component {

  weather(){
    Actions.push('weather');
  };

  render() {
    return (
      <Router
        barButtonIconStyle={styles.barButtonIconStyle}
        hideNavBar={false}
        navigationBarStyle={styles.nav}
        titleStyle={styles.title}>
        <Scene key="root">
          <Scene
            key="home"
            component={Home}
            title="Weather App"
            onRight={() => {this.weather()}}
            rightTitle={' Search '}
            rightButtonTextStyle={styles.button}
          />
           <Scene
              key="weather"
              component={Weather}
              />
        </Scene>
      </Router>
    );
  }
}

const styles = {
  barButtonIconStyle: {
    tintColor: 'white',
  },
  nav: {
    backgroundColor: '#7b4141',
  },
  title: {
    color: 'white',
  },
  button: {
    color: 'white',
  },
};