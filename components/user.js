import {Text, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";
import * as UserStyles from '../styles/user_styles'

export function User(){
    const [userData,setUserData] = useState(null);

    useEffect(()=>{
        async function getUserData(){
            try{
                const data = await AsyncStorage.getItem('currentUserData')
                if (data!==null){
                    setUserData(JSON.parse(data));
                }
            }catch(error){
                console.log(error)
            }
        }
        getUserData();
    },null)

    return (
        <View>
            {userData ? (
                <View style={UserStyles.container}>
                    <Text style={UserStyles.text}>Hello {userData.name}!</Text>
                    <Text style={UserStyles.smalltext}>Your current point total is {userData.points}</Text>
                </View>
            ):(
                <View></View>
            )}
        </View>
    )
}