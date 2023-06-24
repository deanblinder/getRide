import {  View,Text, Image } from "native-base";
import React from "react";
import {  Card } from '@rneui/base';
import { Props } from "./usePresenter";
import RideCard from "../../components/rideCard";
import GoogleMap from "../../components/googleMap";

const RideScreen = (props:Props) => {
    const {ride} = props.route.params;
    return(
        <View style={{flex:1,justifyContent:'space-between'}}>
            {/* <Card> */}
                {/* <Text>{ride.name}</Text>
                <Image source={{uri:ride.image}} style={{height:40, width:40, borderRadius:20,marginBottom:'5%'}}/>

                <Text>{ride.origin.name}</Text> */}
                {/* <View marginBottom={'10%'}> */}
                <RideCard ride={ride}/>
                {/* </View> */}
                {/* <GoogleMap> */}
                <View style={{flex:1,margin:"5%"}}>
                    <GoogleMap 
                        destination={{formatted_address:ride.destination.formatted_address,location:ride.destination.location}} 
                        origin={{formatted_address:ride.name, location:ride.origin.location}}
                    />
                </View>
            {/* </Card> */}
        </View>
    )
}

export default RideScreen;