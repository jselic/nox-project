import {Linking, StyleSheet, Text, View} from "react-native";
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from "react-native-maps";
import {Feed} from "./feed";
import challenges from '../assets/challenges.json'
import community from '../assets/community.json'
import {ChallengeBox} from "./challenge_box";
import React from "react";
import * as MapStyles from "../styles/map_styles.js"

export function Map(){
    let location = {
        latitude: 46.04999890020227,
        longitude: 14.46904593724097,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009
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
                >
                <View style={MapStyles.marker1}></View>
                    <Callout style={MapStyles.callout}>
                        <Text>{challenge.title}</Text>
                    </Callout>
                </Marker>
                ))}
                {community.map((challenge,index) =>(
                <Marker
                    key={index}
                    coordinate={{latitude: challenge.location_latitude, longitude: challenge.location_longitude}}
                >
                    <View style={MapStyles.marker2}></View>
                    <Callout style={MapStyles.callout}>
                        <Text>{challenge.title}</Text>
                    </Callout>
                </Marker>
                ))}
            </MapView>
        </View>
    )
}