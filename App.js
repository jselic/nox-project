import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import * as GeneralStyles from './styles/general_style.js'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Feed} from "./components/feed";
import {Map} from "./components/map";
import {User} from "./components/user"

const Tab = createBottomTabNavigator()

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="Feed" component={Feed}/>
            <Tab.Screen name="Map" component={Map}/>
            <Tab.Screen name="User" component={User}/>
        </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    ...GeneralStyles.navbar,
  },
});
