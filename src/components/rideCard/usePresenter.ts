import React, { useEffect, useState } from "react";
import { navigationService } from "../../services";
import { screenIds } from "../../constants";
import { Point } from "react-native-maps";
import { Location } from "../../typing";

type Place = {
    name: string,
    point: Point
}

export type Ride = {
    id: number,
    origin:Location,
    destination:Location,
    hour: string,
    date: string,
    image: string,
    seats: number,
    price: number,
    name: string,
    phone: string,
}

export type Props = {
    ride: Ride
}

const usePresenter = (props:Props) => {
    const {ride} = props;

    const pushRidePage = () => {
        navigationService.push(screenIds.RIDE_SCREEN, {ride});
    }

    return {
        pushRidePage
    };
    }
export default usePresenter;