import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity, SafeAreaView, FlatList} from 'react-native';
import Drawer from 'react-native-drawer';
import { CheckBox } from 'react-native-elements';
const menu = [
    {'title': 'Home'},
    {'title': 'Cities'},
    {'title': 'Logout'}
];
class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            cities: [
                {'id': '0', 'name': 'Kigali', 'temperature': '0', 'humidity': '0'},
                {'id': '1', 'name': 'London', 'temperature': '1', 'humidity': '1'},
                {'id': '2', 'name': 'Berlin', 'temperature': '2', 'humidity': '3'},
                {'id': '3', 'name': 'Moscow', 'temperature': '3', 'humidity': '3'},
                {'id': '4', 'name': 'Paris', 'temperature': '4', 'humidity': '4'},
                {'id': '5', 'name': 'Nairobi', 'temperature': '5', 'humidity': '5'},
                {'id': '6', 'name': 'Kingston', 'temperature': '6', 'humidity': '6'},
            ],
            ids: []
        };
    }

    isChecked = (itemId) => {
        const isThere = this.state.ids.includes(itemId);
        return isThere;
      };
    
      toggleChecked = (itemId) => {
        const ids = [...this.state.ids, itemId];
    
        if (this.isChecked(itemId)) {
          this.setState({
            ...this.state,
            ids: this.state.ids.filter((id) => id !== itemId),
          });
        } else {
          this.setState({
            ...this.state,
            ids,
          });
        }
      };

      renderCity = ({ item }) => {
        return (
          <TouchableOpacity>
            <View style={styles.row}>
              <View>
                <View style={styles.nameContainer}>
                  <Text style={styles.nameTxt}>{item.name}</Text>
                </View>
              </View>
              <CheckBox
                title="select"
                checkedIcon="dot-circle-o"
                uncheckedIcon="plus-circle"
                checkedColor="#7B4141"
                checked={this.isChecked(item.id)}
                onPress={() => this.toggleChecked(item.id)}
              />
            </View>
          </TouchableOpacity>
        );
      };
    

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
                                extraData={this.state}
                                keyExtractor={(item) => item.id }
                                data={this.state.cities}
                                renderItem={this.renderCity}
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
   row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#dcdcdc',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
    justifyContent: 'space-between',
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 15,
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