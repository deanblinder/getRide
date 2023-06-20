import { NavigationContainer, NavigationContainerRef, StackActions } from '@react-navigation/native';
import { screenIds } from '../constants';

let navigationRef: any;




export const setNavigationRef = (ref:any) => {
  navigationRef = ref;
};

export function push(name:string,...args: any[]) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name,...args));
  }
}

export function pop(count=1) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(count));
  }
}

export function dismiss(count=1) {
  // if (navigationRef.isReady()) {
  //   navigationRef.dispatch(StackActions.popToTop());
  // }
  
}



export default {
  navigationRef,
};
