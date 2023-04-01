import {Text, View, ViewComponent} from "react-native";
import {ChallengeBox} from "./challenge_box";

export function Feed(){
    return (
        <View>
            <View>
                <Text>This is the beginning of the feed!</Text>
            </View>

            <ChallengeBox points={"10"} distance={"1.5km"} title={"Challenge 1"} description = {"lorem ipsum whatever"}></ChallengeBox>
            <ChallengeBox text={"b"}></ChallengeBox>
            <ChallengeBox text={"c"}></ChallengeBox>
        </View>
    )
}