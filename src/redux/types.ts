import { User } from '../typing';

export interface ExampleState {
  data: string[];
}

// Define your action types and creators
export type ExampleAction = { type: 'SET_USER'; payload: User };

export type AppActions = ExampleAction;
