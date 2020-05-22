import React, { Component} from 'react';
import { Text, StyleSheet,View,Image,FlatList, Modal, TouchableHighlight} from 'react-native';
 
var count = 1;

export default class Nac extends React.Component {
 
constructor(props) {
super(props);
this.state = {
 data: []
 }
 }
 
 nossosUsuarios = () => {
 
 fetch("https://reqres.in/api/users?page=" + count)
 .then( res => res.json() )
 .then( result => {
this.setState({
 data: result.data || []
 })
 })
 }
 
 componentDidMount() {
this.nossosUsuarios();
 }
 
 render() {
return (
 <View style={styles.container}>
  <TouchableHighlight
  onPress={() =>{
          count= count==1?2:1
          this.fetch()
          }
        }
        >
      <Text style={{backgroundColor:'grey', textAlign: 'center'}}>Page {count}</Text>
</TouchableHighlight>
 <FlatList
 data={this.state.data}
 renderItem={({item}) => (
 
 <View style={styles.line}>
 
 <Image
 source={{uri: item.avatar }}
 style={styles.avatar}
 />
 
 <View style={styles.info}>
 <Text style={styles.id}>Id: {item.id} </Text>
 <Text style={styles.name}>Nome: {item.first_name} {item.last_name}</Text>
 <Text style={styles.email}>{item.email}</Text>
 
 
 </View>
 
 </View>
 
 )}
 keyExtractor={ item => item.id}
 />
 </View>
 )
 }
}
 
const styles = StyleSheet.create({
 
 container:{
 marginTop: 10,
 marginLeft: 10,
 backgroundColor: "#FFF",
 borderTopWidth: 0,
 borderBottomWidth: 0
 },
 line: {
 height: 70,
 flexDirection: "row",
 borderBottomColor: "#ccc",
 borderBottomWidth: 1
 },
 avatar: {
 width: 40,
 height: 40,
 borderRadius: 10,
 marginRight: 10,
 alignSelf: "center"
 },
 info: {
 flexDirection: "column",
 justifyContent: "flex-start"
 },
 name: {
 fontSize: 12
 },
 email: {
 fontSize: 14,
 fontWeight: "bold"
 }
})