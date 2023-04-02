import {Button, Text, View} from "react-native";
import challenges from '../assets/challenges.json';
import {useEffect, useState} from "react";
import {ChallengeBox} from "./challenge_box";

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
                    <View style={{
                        flexDirection: 'row',
                        height: 30
                    }}>
                        <Text>{challenge.name}</Text>
                    </View>
                    <View style={{flexDirection: 'row', height: 20}}>
                        <View>
                            <Text>Distance: {challenge.distance}KM</Text>
                        </View>
                        <View>
                            <Text>Points: {challenge.points}</Text>
                        </View>
                    </View>
                    <View>
                        <Text>{challenge.description}
                        </Text>
                    </View>
                    <View
                        style={{
                            flexDirection: 'row',
                            height: 60
                        }}>
                        <Button title="save_button" onPress={saveChallenge}>SAVE</Button>
                    </View>
                </View>
            ) : (<View></View>)}
        </View>
    )
}