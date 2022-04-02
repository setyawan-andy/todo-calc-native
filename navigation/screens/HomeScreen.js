import * as React from "react";
import { View, Text } from "react-native";

export default class Home extends React.Component {
    
    render(){
        return (
            <View style={{flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "#fff"}}>
                <Text style={{fontSize: 54, fontWeight: 'bold'}}>
                    "It's not a bug --"
                </Text>
                <Text style={{fontSize: 20}}>it's an undocumented feature</Text>
            </View>
        );
    }
    
};