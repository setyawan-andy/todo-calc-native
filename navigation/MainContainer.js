import React, { Component } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import colors from "../Colors";



//screens
import Home from "./screens/HomeScreen";
import Todo from "./screens/TodoScreen";
import Calculator from "./screens/CalculatorScreen";



//screen names
const homeName = 'Home';
const todoName = 'Todo';
const calculatorName = 'Calculator';

const Tab = createBottomTabNavigator();

export default class MainContainer extends Component {
    
    render() {
        return(
            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName={homeName}
                    screenOptions={({route}) => ({
                        tabBarIcon: ({focused}) => {
                            let iconName;
                            let rn = route.name;
    
                            if(rn === homeName){
                                iconName = focused ? 'home' : 'home-outline'
                            } else if (rn === todoName){
                                iconName = focused ? 'list-sharp' : 'list-outline'
                            } else if (rn === calculatorName){
                                iconName = focused ? 'calculator' : 'calculator-outline'
                            }
                            return <Ionicons name={iconName} size={32} color={colors.blue} />
                            
                        },
                        tabBarStyle: {
                            height: 70,
                            padding: 10,
                        },
                        tabBarActiveTintColor: colors.blue,
                        tabBarInactiveTintColor: "grey",
                        tabBarLabelStyle: {
                            paddingBottom: 10,
                            fontSize: 14,
                            fontWeight: "400",
                        },
                    })}
                >
                    
                    <Tab.Screen name={todoName} component={Todo} />
                    <Tab.Screen name={homeName} component={Home} />
                    <Tab.Screen name={calculatorName} component={Calculator} />
    
    
                </Tab.Navigator>
            </NavigationContainer>
        )
    }
    
}