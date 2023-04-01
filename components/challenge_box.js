import {StyleSheet, Text, View, TouchableOpacity} from "react-native";
import * as FeedStyles from '../styles/feed_styles.js'

export function ChallengeBox(props){
    const {points,distance,title,description} = props;
    return (
        <View style={[FeedStyles.container, props.style]}>
            <TouchableOpacity style={FeedStyles.save_button}>
                <Text style={FeedStyles.button_text}>Save</Text>
            </TouchableOpacity>
            <View style={FeedStyles.meta_block}>
                <Text style={FeedStyles.meta_text}>{points}</Text>
                <Text style={FeedStyles.meta_text}>{distance}</Text>
                <Text style={FeedStyles.meta_text}>{title}</Text>
            </View>
            <View style={FeedStyles.description_block}>
                <Text style={FeedStyles.description_text}>{description}</Text>
            </View>
        </View>
    )
}

