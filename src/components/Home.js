import React, {Component} from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';
import City from '../models/City';
import {CheckBox} from 'react-native-elements';
const city = new City();

class Home extends Component{
  constructor(props){
    super(props);
    this.state = {
      checked: [],
      cities : [
        {
            id: city.id = 1,
            name: city.name = "Kigali",
            temperature: city.temperature = "12C",
            humidity: city.humidity = "Rainy"
        },
        {
          id: city.id = 2,
          name: city.name = "Musanze",
          temperature: city.temperature = "42C",
          humidity: city.humidity = "Sunny"
        },
        {
          id: city.id = 3,
          name: city.name = "Nairobi",
          temperature: city.temperature = "48C",
          humidity: city.humidity = "Cloudy"
        },
        {
          id: city.id = 4,
          name: city.name = "Kampala",
          temperature: city.temperature = "12C",
          humidity: city.humidity = "Rainy"
        },
        {
          id: city.id = 5,
          name: city.name = "New york",
          temperature: city.temperature = "78C",
          humidity: city.humidity = "Heavy rain"
        },
        {
          id: city.id = 6,
          name: city.name = "Lilongwe",
          temperature: city.temperature = "48C",
          humidity: city.humidity = "Cloudy"
        }
    ]
    }
  }

  handleChange = (index) => {
    let checked = [...this.state.checked];
    checked[index] = !checked[index];
    this.setState({ checked });
  }

    render(){
      let { cities, checked } = this.state;
        return(
            <SafeAreaView style={styles.safeAreaView}>
                <FlatList    
                                keyExtractor={(item) => item.id.toString() }
                                data={cities}
                                extraData={this.state}
                                numColumns={2}
                                renderItem={({item, index}) => (
                                  <View style={styles.container}>
                                    <View>
                                    <Text style={styles.items}>{item.name}</Text>
                                    </View>
                                     <View style={styles.box}>
                                     <CheckBox
                                     right={true}
                                     checked={checked[index]}
                                     checkedIcon="dot-circle-o"
                                     uncheckedIcon="circle"
                                     onPress={() => this.handleChange(index)}
                                 />
                                 </View>
                                  </View>
                                )}
                            />

            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
   safeAreaView: {
       flex: 1
   },
   menuTitle: {
       flex: 1,
       color: 'white'
   },
   items: {
    color: '#7B4141',
    marginTop: 8,
    fontSize: 24,
    paddingTop: 30,
    paddingLeft: 10
   },
   container: {
     flex: 1,
     flexDirection: 'row',
     alignItems: 'stretch'
   },
   box: {
     padding: 30,
     
  
   }
});

const drawerStyle = {
    drawer: {
        flex: 1,
        backgroundColor: '#7B4141',
    },
    main: {
        flex: 1,
        backgroundColor: 'white',
    },
}
export default Home;