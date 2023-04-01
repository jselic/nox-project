import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import * as FeedStyles from '../styles/feed_styles.js'

export function ChallengeBox(props){
    const {points,distance,title,description} = props;
    return (
        <View style={[FeedStyles.container, props.style]}>
            <View style={FeedStyles.meta_infoblock}>
                <Text style={FeedStyles.title}>{title}</Text>
                <View style={FeedStyles.points_and_distance_container}>
                    <Text style={FeedStyles.points}>{points} pts.</Text>
                    <Text style={FeedStyles.distance}>{distance} km</Text>
                </View>
            </View>
            <Text style={FeedStyles.description}>{description}</Text>
            <View style={FeedStyles.buttons_container}>
                <TouchableOpacity style={FeedStyles.button}>
                    <Text style={FeedStyles.button_text}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={FeedStyles.button}>
                    <Text style={FeedStyles.button_text}>Show on Map</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

