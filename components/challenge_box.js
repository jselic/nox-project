import {StyleSheet, Text, View} from "react-native";
import * as FeedStyles from '../styles/feed_styles.js'

export function ChallengeBox(){
    return (
        <View style={styles.cbox}>
            <Text>I am a box</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    cbox: {
        ...FeedStyles.challenge_box,
    },
});