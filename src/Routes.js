import React, {Component} from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';
import Login from './components/Login';
import Home from './components/Home';
export default class Routes extends Component {
  render() {
    return (
      <Router
        barButtonIconStyle={styles.barButtonIconStyle}
        hideNavBar={false}
        navigationBarStyle={styles.nav}
        titleStyle={styles.title}>
        <Stack key="root">
          
          <Scene key="home" component={Home} />
          <Scene
            key="home"
            component={Home}
            title="Weather App"
            // onRight={() => {}}
            // rightTitle={' Add Task'}
            // rightButtonTextStyle={styles.button}
          />
        </Stack>
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
