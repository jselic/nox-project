import {Linking, StyleSheet, Text, View} from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from "react-native-maps";
import challenges from '../assets/challenges.json'
import community from '../assets/community.json'
import React from "react";
import * as MapStyles from "../styles/map_styles.js"
import {useNavigation} from "@react-navigation/native";

export function Map(){
    let location = {
        latitude: 46.04999890020227,
        longitude: 14.46904593724097,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009
    }
    const navigation = useNavigation();

    const OpenChallenge = (id) => {
        console.log("OPEN CHALLENGE " + id);
        navigation.navigate('Challenge', {id: id})
    }

    return (
        <View
            style={{
                height: '100%'
            }}>
            <MapView
                style={StyleSheet.absoluteFillObject}
                provider={PROVIDER_GOOGLE}
                mapType='hybrid'
                region={location}>
                {challenges.map((challenge,index) =>(
                <Marker
                    key={index}
                    coordinate={{latitude: challenge.location_latitude, longitude: challenge.location_longitude}}
                    onPress={function () {
                        OpenChallenge(challenge.id);
                    }}
                >
                <View style={MapStyles.marker1}></View>
                    <Callout style={MapStyles.callout}>
                        <Text>{challenge.title}</Text>
                    </Callout>
                </Marker>
                ))}
                {community.map((comm,index) =>(
                <Marker
                    key={index}
                    coordinate={{latitude: comm.location_latitude, longitude: comm.location_longitude}}
                    onPress={function () {
                        console.log("OASFPBAPIUBFPIUADFPJBPBPIBP");
                        // OpenChallenge(comm.key);
                    }}
                >
                    <View style={MapStyles.marker2}></View>
                    <Callout style={MapStyles.callout}>
                        <Text>{comm.title}</Text>
                    </Callout>
                </Marker>
                ))}
            </MapView>
        </View>
    )
}