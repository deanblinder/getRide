import { Button, Input , Text} from "@rneui/base";
import React from "react";
import { View , StyleSheet, ScrollView} from "react-native";
import usePresenter from "./usePresenter";

const Welcome = () => {
    const {shouldShowLogin, onHaveAccountPressed, onSignupPressed} = usePresenter();


    return(
        <ScrollView contentContainerStyle={styles.container} style={{backgroundColor:"white"}}>
            <Text h1>Welcome</Text>
            <View>
                <Button style={{marginBottom:'5%'}} radius={20} onPress={onSignupPressed}>Sign Up</Button>
                <Button radius={20} onPress={onHaveAccountPressed}>Already have account</Button>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        // display:"flex",
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent:'space-around',
      padding: '5%',
    //   justifyContent: 'center',
    //   padding: '10%',
    },
    row: {
        // flexDirection: 'row',
        // backgroundColor:'blue'
        // justifyContent: 'space-between',
        // alignItems: 'center',
        // width: '80%',
        // marginBottom: '20%'
      },
  });

export default Welcome;