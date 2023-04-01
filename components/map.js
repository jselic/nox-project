import {StyleSheet, View} from "react-native";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";

export function Map(){
    let location = {
        latitude: 46.05116231973432,
        longitude: 14.469928934371586,
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
                <Marker coordinate={{latitude: location.latitude, longitude: location.longitude}} />
            </MapView>
        </View>
    )
}