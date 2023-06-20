import React from "react";
import { navigationService } from "../../services";
import { screenIds } from "../../constants";

const usePresenter = () => {
    const onOriginPressed = () => {
        navigationService.push(screenIds.SEARCH_RIDE_ORIGIN_SCREEN, {});
    };
    const onDestinationPressed = () => {
        navigationService.push(screenIds.SEARCH_RIDE_DESTINATION_SCREEN, {});
    };
    return {
        onOriginPressed,
        onDestinationPressed,
    };
    }
export default usePresenter;
