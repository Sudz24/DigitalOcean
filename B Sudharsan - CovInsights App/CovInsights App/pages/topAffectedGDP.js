import React, { Component } from "react";
import { Platform, ScrollView, Text, View, Image, Dimensions, TextInput, TouchableOpacity} from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';


export default class TopAffectedGDP extends Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
        <ScrollView style={{ flex:1, backgroundColor:'white'}}>
            <View style={{ paddingHorizontal: 20, elevation:2, flexDirection:'row', justifyContent:'space-evenly', alignItems:'center', paddingVertical:25, borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                <Image source={require('../assets/loss.png')}
                    style={{ height:90, width:90, marginTop:10, marginLeft:0}} />
                
                <View style={{ alignItems:'center', justifyContent:'center', marginTop:10}}>
                    <Text style={{ textAlign:'center', marginRight:0, fontWeight:"bold", fontSize:18, color:'black', opacity:0.8}}>
                        Most affected {"\n"} Countries
                    </Text>
                    {/* <Text style={{ textAlign:'center', paddingTop:5, fontWeight:'bold',color:'rgba(212,70,21,0.6)', fontSize:12 }}>
                        (TOP FIVE)
                    </Text> */}
                </View>
            </View>

            <View style={{ flexDirection:'row', margin:20, elevation:2, padding:0, backgroundColor:'white', borderRadius:10}}>
                <View style={{ flex:0.5, alignItems:'center', justifyContent:'center', backgroundColor:'rgba(21,150,212,.1)', paddingHorizontal:10, borderRadius:0}}>
                    <Text style={{ fontSize:30, fontWeight:'bold', color:'rgba(21,150,212,1)'}}>
                        #1
                    </Text>
                </View>
                <View style={{ flex:2.5, marginLeft:0, paddingTop:10}}>
                    <View style={{ flexDirection:'row', justifyContent:'center', paddingTop:10}}>
                        <Image source={{ uri: 'https://www.countryflags.io/mv/flat/64.png'}}
                        style={{ height:25, width:40, marginRight:10, justifyContent:'center'}} />
                        <Text style={{ fontWeight:'bold'}}>
                            Maldives
                        </Text>
                    </View>
                    <View style={{ flexDirection:'row', marginTop:10, paddingVertical:20, justifyContent:'center'}}>
                        <View style={{ borderRightWidth:1, paddingRight:20, borderRightColor:'rgba(21,150,212,0.5)'}}>
                            <Text style={{ color: 'rgba(0,0,0,0.6)', fontWeight:'bold', fontSize:12}}>
                                GDP
                            </Text>
                            <Text style={{ fontWeight:'bold', fontSize:16, marginTop:5}}>
                                -14.17%
                            </Text>
                        </View>
                        <View style={{ paddingLeft:20}} >
                            <Text style={{ color: 'rgba(0,0,0,0.6)', fontWeight:'bold', fontSize:12}}>
                                Employement
                            </Text>
                            <Text style={{ fontWeight:'bold', fontSize:16, marginTop:5}}>
                                -12.69%
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection:'row', marginHorizontal:20, elevation:2, padding:0, backgroundColor:'white', borderRadius:10}}>
                <View style={{ flex:0.5, alignItems:'center', justifyContent:'center', backgroundColor:'rgba(21,150,212,.1)', paddingHorizontal:10, borderRadius:0}}>
                    <Text style={{ fontSize:30, fontWeight:'bold', color:'rgba(21,150,212,1)'}}>
                        #2
                    </Text>
                </View>
                <View style={{ flex:2.5, marginLeft:0, paddingTop:10}}>
                    <View style={{ flexDirection:'row', justifyContent:'center', paddingTop:10}}>
                        <Image source={{ uri: 'https://www.countryflags.io/cy/flat/64.png'}}
                        style={{ height:25, width:40, marginRight:10, justifyContent:'center'}} />
                        <Text style={{ fontWeight:'bold'}}>
                            Cyprus
                        </Text>
                    </View>
                    <View style={{ flexDirection:'row', marginTop:10, paddingVertical:20, justifyContent:'center'}}>
                        <View style={{ borderRightWidth:1, paddingRight:20, borderRightColor:'rgba(21,150,212,0.5)'}}>
                            <Text style={{ color: 'rgba(0,0,0,0.6)', fontWeight:'bold', fontSize:12}}>
                                GDP
                            </Text>
                            <Text style={{ fontWeight:'bold', fontSize:16, marginTop:5}}>
                                -10.94%
                            </Text>
                        </View>
                        <View style={{ paddingLeft:20}} >
                            <Text style={{ color: 'rgba(0,0,0,0.6)', fontWeight:'bold', fontSize:12}}>
                                Employement
                            </Text>
                            <Text style={{ fontWeight:'bold', fontSize:16, marginTop:5}}>
                                -12.37%
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            
            <View style={{ flexDirection:'row', margin:20, elevation:2, padding:0, backgroundColor:'white', borderRadius:10}}>
                <View style={{ flex:0.5, alignItems:'center', justifyContent:'center', backgroundColor:'rgba(21,150,212,.1)', paddingHorizontal:10, borderRadius:0}}>
                    <Text style={{ fontSize:30, fontWeight:'bold', color:'rgba(21,150,212,1)'}}>
                        #3
                    </Text>
                </View>
                <View style={{ flex:2.5, marginLeft:0, paddingTop:10}}>
                    <View style={{ flexDirection:'row', justifyContent:'center', paddingTop:10}}>
                        <Image source={{ uri: 'https://www.countryflags.io/pl/flat/64.png'}}
                        style={{ height:25, width:40, marginRight:10, justifyContent:'center'}} />
                        <Text style={{ fontWeight:'bold'}}>
                            Poland
                        </Text>
                    </View>
                    <View style={{ flexDirection:'row', marginTop:10, paddingVertical:20, justifyContent:'center'}}>
                        <View style={{ borderRightWidth:1, paddingRight:20, borderRightColor:'rgba(21,150,212,0.5)'}}>
                            <Text style={{ color: 'rgba(0,0,0,0.6)', fontWeight:'bold', fontSize:12}}>
                                GDP
                            </Text>
                            <Text style={{ fontWeight:'bold', fontSize:16, marginTop:5}}>
                                -8.81%
                            </Text>
                        </View>
                        <View style={{ paddingLeft:20}} >
                            <Text style={{ color: 'rgba(0,0,0,0.6)', fontWeight:'bold', fontSize:12}}>
                                Employement
                            </Text>
                            <Text style={{ fontWeight:'bold', fontSize:16, marginTop:5}}>
                                -8.86%
                            </Text>
                        </View>
                    </View>
                </View>
            </View>

            <View style={{ flexDirection:'row', marginHorizontal:20, elevation:2, padding:0, backgroundColor:'white', borderRadius:10}}>
                <View style={{ flex:0.5, alignItems:'center', justifyContent:'center', backgroundColor:'rgba(21,150,212,.1)', paddingHorizontal:10, borderRadius:0}}>
                    <Text style={{ fontSize:30, fontWeight:'bold', color:'rgba(21,150,212,1)'}}>
                        #4
                    </Text>
                </View>
                <View style={{ flex:2.5, marginLeft:0, paddingTop:10}}>
                    <View style={{ flexDirection:'row', justifyContent:'center', paddingTop:10}}>
                        <Image source={{ uri: 'https://www.countryflags.io/gr/flat/64.png'}}
                        style={{ height:25, width:40, marginRight:10, justifyContent:'center'}} />
                        <Text style={{ fontWeight:'bold'}}>
                            Greece
                        </Text>
                    </View>
                    <View style={{ flexDirection:'row', marginTop:10, paddingVertical:20, justifyContent:'center'}}>
                        <View style={{ borderRightWidth:1, paddingRight:20, borderRightColor:'rgba(21,150,212,0.5)'}}>
                            <Text style={{ color: 'rgba(0,0,0,0.6)', fontWeight:'bold', fontSize:12}}>
                                GDP
                            </Text>
                            <Text style={{ fontWeight:'bold', fontSize:16, marginTop:5}}>
                                -8.4%
                            </Text>
                        </View>
                        <View style={{ paddingLeft:20}}>
                            <Text style={{ color: 'rgba(0,0,0,0.6)', fontWeight:'bold', fontSize:12}}>
                                Employement
                            </Text>
                            <Text style={{ fontWeight:'bold', fontSize:16, marginTop:5}}>
                                -6.84%
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ flexDirection:'row', margin:20, elevation:2, padding:0, backgroundColor:'white', borderRadius:10}}>
                <View style={{ flex:0.5, alignItems:'center', justifyContent:'center', backgroundColor:'rgba(21,150,212,.1)', paddingHorizontal:10, borderRadius:0}}>
                    <Text style={{ fontSize:30, fontWeight:'bold', color:'rgba(21,150,212,1)'}}>
                        #5
                    </Text>
                </View>
                <View style={{ flex:2.5, marginLeft:0, paddingTop:10}}>
                    <View style={{ flexDirection:'row', justifyContent:'center', paddingTop:10}}>
                        <Image source={{ uri: 'https://www.countryflags.io/lv/flat/64.png'}}
                        style={{ height:25, width:40, marginRight:10, justifyContent:'center'}} />
                        <Text style={{ fontWeight:'bold'}}>
                          Latvia
                        </Text>
                    </View>
                    <View style={{ flexDirection:'row', marginTop:10, paddingVertical:20, justifyContent:'center'}}>
                        <View style={{ borderRightWidth:1, paddingRight:20, borderRightColor:'rgba(21,150,212,0.5)'}}>
                            <Text style={{ color: 'rgba(0,0,0,0.6)', fontWeight:'bold', fontSize:12}}>
                                GDP
                            </Text>
                            <Text style={{ fontWeight:'bold', fontSize:16, marginTop:5}}>
                                -8.14%
                            </Text>
                        </View>
                        <View style={{ paddingLeft:20}}>
                            <Text style={{ color: 'rgba(0,0,0,0.6)', fontWeight:'bold', fontSize:12}}>
                                Employement
                            </Text>
                            <Text style={{ fontWeight:'bold', fontSize:16, marginTop:5}}>
                                -7.27%
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
            

    
        
      </ScrollView>
    );
  }
}
