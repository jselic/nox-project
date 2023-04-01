import {Text, View, ScrollView , ViewComponent} from "react-native";
import {ChallengeBox} from "./challenge_box";

export function Feed(){
    return (
        <View>
            <View>
                <Text>This is the beginning of the feed!</Text>
            </View>

            <ScrollView>
                <ChallengeBox points={"10"} distance={"1.5km"} title={"Challenge 1"} description = {"lorem ipsum whatever"}></ChallengeBox>
                <ChallengeBox points={"15"} distance={"2.5km"} title={"Challenge 2"} description = {"lorem ipsum whatever"}></ChallengeBox>
                <ChallengeBox points={"20"} distance={"3.5km"} title={"Challenge 3"} description = {"lorem ipsum whatever"}></ChallengeBox>
                <ChallengeBox points={"20"} distance={"3.5km"} title={"Challenge 3"} description = {"lorem ipsum whatever"}></ChallengeBox>
            </ScrollView>
        </View>
    )
}