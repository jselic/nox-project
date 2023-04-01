import React, {useState} from "react"
import {Text, View, ScrollView , ViewComponent, TouchableOpacity} from "react-native";
import {ChallengeBox} from "./challenge_box";
import {CommunityBox} from "./community_box";
import * as GeneralStyles from '../styles/general_style.js'
import challenges from '../assets/challenges.json';
import community from '../assets/community.json';

export function Feed(){

    const [activeFeed, setActiveFeed] = useState('challenges')

    const toggleFeed = () => {
        setActiveFeed(activeFeed === 'challenges' ? 'community' : 'challenges')
    };

    return (
        <View style={GeneralStyles.container}>
            <View style={GeneralStyles.header}>
                <Text style={GeneralStyles.title}>{activeFeed === 'challenges' ? 'Challenges' : 'Community'}</Text>
                <Text style={GeneralStyles.toggle_button} onPress={toggleFeed}>
                    {activeFeed === 'challenges' ? 'View community' : 'View challenges'}
                </Text>
            </View>
            <ScrollView>
                {activeFeed === 'challenges'
                ? challenges.map((challenge,index) =>(
                    <ChallengeBox
                        key={index}
                        points={challenge.points}
                        distance={challenge.distance}
                        title={challenge.title}
                        description={challenge.description}
                        time_left={challenge.time_left}
                    />
                ))
                : community.map((community_item, index) =>(
                    <CommunityBox
                        key={index}
                        progress={community_item.progress}
                        title={community_item.title}
                        description={community_item.description}
                        members={community_item.members}
                        time_left={community_item.time_left}
                        currentPoints={community_item.currentPoints}
                        totalPoints={community_item.totalPoints}
                    />
                ))
                }
            </ScrollView>
        </View>
    )
}