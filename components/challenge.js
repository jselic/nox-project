import {Button, Text, View} from "react-native";
import challenges from '../assets/challenges.json';
import {useEffect, useState} from "react";
import {ChallengeBox} from "./challenge_box";
import * as FeedStyles from "../styles/feed_styles";

export function Challenge({route}) {
    const id = route?.params.id >= 0 ? route?.params.id : -1;
    // const [challenge, setChallenge] = useState(null)


    // TODO: fix
    if (id === -1) {
        return undefined;
    }
    const challenge = challenges[id];

    /*
    useEffect( () => {
        console.log(route)
        setChallenge(challenges.find(c => {c.id === tmpId}))
        console.log(id + " " + challenge);
        }, [id]
    )*/

    function saveChallenge() {
        console.log("SAVING CHALLENGE")
    }

    return (
        <View>
            {challenge ? (
                <View>
                    <View style={FeedStyles.title_container}>
                        <Text style={FeedStyles.title}>{challenge.title}</Text>
                    </View>
                    <View style={FeedStyles.points_and_distance_container}>
                        <Text style={FeedStyles.distance}>Distance: {challenge.distance}</Text>
                        <Text style={FeedStyles.points}>Points: {challenge.points}</Text>
                        <Text style={FeedStyles.time_left}>{challenge.time_left} left</Text>
                    </View>
                    <View>
                        <Text style={FeedStyles.description}>{challenge.description}
                        </Text>
                    </View>
                    <View style={FeedStyles.buttons_container}>
                        <View style={{padding: 20}}>
                            <Button title="SAVE" onPress={saveChallenge}/>
                        </View>
                    </View>
                </View>
            ) : (<View></View>)}
        </View>
    )
}