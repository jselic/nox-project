import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import * as FeedStyles from '../styles/feed_styles.js'
import {useNavigation} from "@react-navigation/native";

export function ChallengeBox(props){
    const {id, points,distance,title,description, time_left, location_longitude, location_latitude} = props;

    const navigation = useNavigation();

    const OpenChallenge = () => {
        navigation.navigate('Challenge', {id: id})
    }

    const OpenMap = () => {
        navigation.navigate('Map', {longitude: location_longitude, latitude: location_latitude})
    }

    return (
        <View style={[FeedStyles.container, props.style]}>
            <TouchableOpacity onPress={OpenChallenge}>
                <View style={FeedStyles.meta_infoblock}>
                    <View style={FeedStyles.title_container}>
                        <Text style={FeedStyles.title}>{title}</Text>
                    </View>
                    <View style={FeedStyles.points_and_distance_container}>
                        <Text style={FeedStyles.points}>{points} pts.</Text>
                        <Text style={FeedStyles.distance}>{distance}</Text>
                        <Text style={FeedStyles.time_left}>{time_left} left</Text>
                    </View>
                </View>
                <Text style={FeedStyles.description}>{description}</Text>
                <View style={FeedStyles.buttons_container}>
                    <TouchableOpacity style={FeedStyles.button}>
                        <Text style={FeedStyles.button_text}>Save</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={FeedStyles.button2} onPress={OpenMap}>
                        <Text style={FeedStyles.button_text2}>Show on Map</Text>
                    </TouchableOpacity>
                </View>
            </TouchableOpacity>
        </View>
    )
}

