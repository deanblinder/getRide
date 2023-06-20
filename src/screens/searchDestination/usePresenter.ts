import React from "react";
import { navigationService } from "../../services";
import { useNavigation } from '@react-navigation/native';
import { screenIds } from "../../constants";

const usePresenter = () => {
    const navigation = useNavigation();

    const onDonePressed = () => {
        console.log("onDonePressed");
        // navigation.reset({
            // index: 0,
            routes: [{ name: screenIds.HOME_SCREEN }],
        //   });
        navigationService.pop();

    };
    return {
        onDonePressed
    };
}

export default usePresenter;