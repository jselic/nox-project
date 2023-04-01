import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import * as Progress from "react-native-progress"
import * as FeedStyles from '../styles/feed_styles.js'

export function CommunityBox(props) {
    const {type, title, currentPoints, totalPoints, time_left, distance,description } = props;
    const progress = (currentPoints / totalPoints);
    const points_text = `${currentPoints} / ${totalPoints}`

    return (
        <View style={[FeedStyles.container_c, props.style]}>
            <View style={FeedStyles.meta_infoblock}>
                <View style={FeedStyles.title_container}>
                    <Text style={FeedStyles.title}>{title}</Text>
                        <Progress.Bar progress={progress} style={{marginTop: 5, width: "66%"}}/>
                </View>
                <View style={FeedStyles.points_and_distance_container}>
                    <Text style={FeedStyles.points}>{points_text} pts.</Text>
                    <Text style={FeedStyles.distance}>{distance}</Text>
                    <Text style={FeedStyles.time_left}>{time_left} left</Text>
                </View>
            </View>
            <Text style={FeedStyles.description}>{description}</Text>
            <View style={FeedStyles.buttons_container}>
                <TouchableOpacity style={FeedStyles.button}>
                    <Text style={FeedStyles.button_text}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity style={FeedStyles.button2}>
                    <Text style={FeedStyles.button_text2}>Show on Map</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}