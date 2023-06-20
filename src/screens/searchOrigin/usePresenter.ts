import React from "react";
import { navigationService } from "../../services";
import { screenIds } from "../../constants";

const usePresenter = () => {
    const onNextPressed = () => {
        console.log("onNextPressed");
        navigationService.pop();
    };
    return {
        onNextPressed
    };
    }
export default usePresenter;