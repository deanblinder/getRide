import React from "react";
import { Ride } from "../../components/rideCard/usePresenter";
export type Props = {
    route:{
        params:{
            ride:Ride
        }
    }
};
export const usePresenter = () => {
    return {};
}