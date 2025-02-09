import { StackActions } from '@react-navigation/native';

let navigationRef: any;

export const setNavigationRef = (ref: any) => {
  navigationRef = ref;
};

export function push(name: string, ...args: any[]) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.push(name, ...args));
  }
}

export function pop(count = 1) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(StackActions.pop(count));
  }
}

export default {
  navigationRef,
};
