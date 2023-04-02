import {Button, Text, View} from "react-native";
import communities from '../assets/community.json';
import {useEffect, useState} from "react";
import {CommunityBox} from "./community_box";
import * as FeedStyles from "../styles/feed_styles";
import * as Progress from "react-native-progress"

export function Community({route}) {
    const id = route?.params.id >= 0 ? route?.params.id : -1;
    // const [challenge, setChallenge] = useState(null)


    // TODO: fix
    if (id === -1) {
        return undefined;
    }
    const community = communities[id];
    const progress = (community.currentPoints / community.totalPoints);
    const points_text = `${community.currentPoints} / ${community.totalPoints}`

    /*
    useEffect( () => {
        console.log(route)
        setChallenge(challenges.find(c => {c.id === tmpId}))
        console.log(id + " " + challenge);
        }, [id]
    )*/

    function saveCommunity() {
        console.log("SAVING COMMUNITY")
    }

    return (<View>
            {community ? (<View>
                    <View>
                        <View style={FeedStyles.title_container}>
                            <Text style={FeedStyles.title}>{community.title}</Text>
                            <Progress.Bar progress={progress} style={{marginTop: 5, width: "70%"}}/>
                        </View>
                        <View style={FeedStyles.points_and_distance_container}>
                            <Text style={FeedStyles.points}>{points_text} pts.</Text>
                            <Text style={FeedStyles.distance}>{community.distance}</Text>
                            <Text style={FeedStyles.time_left}>{community.time_left} left</Text>
                        </View>
                    </View>
                    <Text style={FeedStyles.description}>{community.description}</Text>
                </View>) : (<View></View>)}
        </View>)
}