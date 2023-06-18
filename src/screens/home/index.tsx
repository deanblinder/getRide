import React from "react"
import { View, StyleSheet, ScrollView } from "react-native";
import { Button, Input , Text} from "@rneui/base";

const Home = () => {
    const isLoggedIn = false;
    return(
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Home</Text>
            {/* <Input label={'from'} placeholder="Search"/> */}
            {/* <Input label={'to'} placeholder="Search"/> */}
            <View > 
                <Button radius={20} style={{marginBottom:'5%'}} onPress={()=>{}}>Find a Ride</Button>
                <Button radius={20} onPress={()=>{}}>Search a ride</Button>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: '5%',
        display: 'flex',
        justifyContent: 'space-between',
        flex: 1,
        // flexDirection: 'row',
    },
})
export default Home;