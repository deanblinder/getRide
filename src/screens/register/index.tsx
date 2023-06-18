import React from "react"
import { View, StyleSheet, ScrollView } from "react-native"
import {Text, Button, Input} from "@rneui/base"
import { navigationService } from "../../services"

const Register = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.inputs}>
                <Input label={'first name'}/> 
                <Input label={'last name'}/> 
                <Input label={'email'}/> 
                <Input label={'password'}/>
            </View> 
            <Button radius={20} onPress={()=>navigationService.pop()}>Submit</Button>
        </ScrollView>  
    )
}

const styles = StyleSheet.create({
    container: {
        padding: '10%',
        justifyContent: 'space-around',
        display: 'flex',
        flex: 1,
    },
    inputs: {
        
    }
})
export default Register; 