import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, FlatList} from 'react-native';
import Drawer from 'react-native-drawer';
const menu = [
    {'title': 'Home'},
    {'title': 'Cities'},
    {'title': 'Logout'}
];

const cities = [
    {'id': '0', 'name': 'Kigali', 'temperature': '0', 'humidity': '0'},
    {'id': '1', 'name': 'London', 'temperature': '1', 'humidity': '1'},
    {'id': '2', 'name': 'Berlin', 'temperature': '2', 'humidity': '3'},
    {'id': '3', 'name': 'Moscow', 'temperature': '3', 'humidity': '3'},
    {'id': '4', 'name': 'Paris', 'temperature': '4', 'humidity': '4'},
    {'id': '5', 'name': 'Nairobi', 'temperature': '5', 'humidity': '5'},
    {'id': '6', 'name': 'Kingston', 'temperature': '6', 'humidity': '6'},
];

class Home extends Component{
    constructor(props){
        super(props);
    }

    renderDrawer(){
        return(
            <View style={styles.menuContainer}>
                <FlatList 
                    keyExtractor={(item) => item.id}
                    data={menu}
                    renderItem={({item}) =>{
                        return(
                            <TouchableOpacity>
                                <Text style={styles.menuTitle}>
                                {item.title}
                                </Text>
                            </TouchableOpacity>
                        )
                    }}
                />
            </View>
        )
    }

    openDrawer(){
        this.drawer.open()
    }

    closeDrawer(){
        this.drawer.close()
    }

    render(){
        return(
            <SafeAreaView style={styles.safeAreaView}>
                <View style={styles.mainContainer}>
                    <Drawer
                        ref={(ref) =>{this.drawer = ref}}
                        type="static"
                        tapToClose={true}
                        openDrawerOffset={0.45}
                        content={this.renderDrawer()}
                        styles={drawerStyle}>
                            {}
                            <View>
                                <View>
                                    <TouchableOpacity
                                        onPress={this.openDrawer.bind(this)}>
                                        <Image
                                        source={require('../assets/Hamburger.png')}
                                        style={{width: 50, height: 50}}
                                        />
                                    </TouchableOpacity>
                                </View>
                        <View style={styles.cityContent}>
                            <FlatList
                                
                                keyExtractor={(item) => item.id }
                                data={cities}
                                renderItem={({item}) => (
                                <Text style={styles.items}>{item.name}</Text>
                                )}
                            />
                       </View>
                            </View>
                    </Drawer>
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