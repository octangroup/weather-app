import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, FlatList} from 'react-native';
import City from '../models/City';
const city = new City();
const cities = [
    {
        id: city.id = 1,
        name: city.name = "Kigali",
        temperature: city.temperature = "12C",
        humidity: city.humidity = "Rainy"
    }
];

class Home extends Component{
    render(){
        return(
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.mainContainer}>
                <FlatList    
                                keyExtractor={(item) => item.id.toString() }
                                data={cities}
                                renderItem={({item}) => (
                                <Text style={styles.items}>{item.name}</Text>
                                )}
                            />
                </View>

            </SafeAreaView>
        );
    }
}
const styles = StyleSheet.create({
   safeAreaView: {
       flex: 1
   },
   mainContainer: {
       flex: 1,
   },
   menuTitle: {
       flex: 1,
       color: 'white'
   },
   items: {
        marginTop: 8,
        fontSize: 24,
        padding: 30,
        backgroundColor: '#7B4141'
   },
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