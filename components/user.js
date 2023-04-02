import {ScrollView, Text, View} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {useEffect, useState} from "react";
import * as UserStyles from '../styles/user_styles'
import challenges from '../assets/challenges.json'
import {ChallengeBox} from "./challenge_box";

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
            {userData ? (
                <ScrollView>
                    {challenges.map((challenge, index) => {
                        if (userData.saved_challenges.includes(challenge.id)){
                            return <ChallengeBox
                                key={index}
                                id={challenge.id}
                                points={challenge.points}
                                distance={challenge.distance}
                                title={challenge.title}
                                description={challenge.description}
                                time_left={challenge.time_left}
                                location_longitude={challenge.location_longitude}
                                location_latitude={challenge.location_latitude}
                            />
                        }
                    })}
                </ScrollView>
            ):(
                <View></View>
            )}
        </View>
    )
}