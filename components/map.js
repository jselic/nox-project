import {Linking, StyleSheet, View} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import {Feed} from "./feed";

export function Map(){
    let location = {
        latitude: 46.04999890020227,
        longitude: 14.46904593724097,
        latitudeDelta: 0.009,
        longitudeDelta: 0.009
    }
    let marker = {
        _id: 123,
        name: "Hackaton",
        location: {
            latitude: 46.04999890020227,
            longitude: 14.46904593724097
        }
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
                <Marker
                    coordinate={{latitude: marker.location.latitude, longitude: marker.location.longitude}}
                    onPress={() => Linking.openURL('youtube.com')}
                />
            </MapView>
        </View>
    )
}