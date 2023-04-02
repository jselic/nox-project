import {Button, Text, View} from "react-native";

export function Challenge(id) {
    let name = "Running";
    let distance = 6.5;
    let points = 17;
    let description = "About three things I was absolutely positive. First, Edward was a vampire. Second, there was a part of him-and I didn’t know how potent that part might be-that thirsted for my blood. And third, I was unconditionally and irrevocably in love with him.";

    function saveChallenge() {
        console.log("SAVING CHALLENGE")
    }

    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    height: 30
                }}>
                <Text>{name}</Text>
            </View>
            <View style={{flexDirection: 'row', height:20}}>
                <View>
                    <Text>Distance: {distance}KM</Text>
                </View>
                <View>
                    <Text>Points: {points}</Text>
                </View>
            </View>
            <View>
                <Text>{description}
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
        /*
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    height: 30
                }}>
                <Text>{name}</Text>
            </View>
            <View style={{flexDirection: 'row', height:20}}>
                <View>
                    <Text>Distance: {distance}KM</Text>
                </View>
                <View>
                    <Text>Points: {points}</Text>
                </View>
            </View>
            <View>{description}</View>
            <View
                style={{
                    flexDirection: 'row',
                    height: 30,
                    padding: 20
                }}>
                <Button title="save_button" onPress={saveChallenge}>SAVE</Button>
            </View>
        </View>*/
    )
}