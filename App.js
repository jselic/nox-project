import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react'
import * as GeneralStyles from './styles/general_style.js'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Feed} from "./components/feed";
import {Map} from "./components/map";
import {User} from "./components/user";
import {Login} from "./components/login";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {Challenge} from "./components/challenge";
import {Ionicons, MaterialIcons} from '@expo/vector-icons';
import {Community} from "./components/community";

const Tab = createBottomTabNavigator()

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [currentUser, setCurrentUser] = useState({name: "user"})
    const handleLogin = (user) => {
        setCurrentUser(user);
        //HERE WE SET ASYNC VARIABLE
        AsyncStorage.setItem('currentUserData', JSON.stringify(user)).then(() => setIsLoggedIn(true))
    }

    return (
    <NavigationContainer>
        {isLoggedIn ? (
            <Tab.Navigator>
                <Tab.Screen name="Feed" component={Feed}
                    options={{
                        tabBarIcon: ({color,size}) => (
                          <MaterialIcons name="dashboard" size={size} color={color}/>
                        ),
                    }}
                />
                <Tab.Screen name="Map" component={Map}
                    options={{
                        tabBarIcon: ({color,size}) => (
                            <MaterialIcons name="public" size={size} color={color}/>
                        ),
                    }}
                />
                <Tab.Screen name={currentUser.name.split(" ")[0]} component={User}
                    options={{
                        tabBarIcon: ({color,size}) => (
                            <MaterialIcons name="person" size={size} color={color}/>
                        ),
                    }}
                />
                <Tab.Screen name={"Challenge"} component={Challenge} options={{
                    tabBarButton: props => null,
                }}/>
                <Tab.Screen name={"Community"} component={Community} options={{
                    tabBarButton: props => null,
                }}/>
            </Tab.Navigator>
        ) : (
            <Login onLogin={handleLogin}></Login>
        )}

    </NavigationContainer>
    );
}

const styles = StyleSheet.create({
  container: {
    ...GeneralStyles.navbar,
  },
});
