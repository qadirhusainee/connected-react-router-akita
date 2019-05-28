import { History, Location, Action } from 'history';
export interface IRouterState {
    location: Location;
    action: Action;
}
export declare const createInitialRoute: (history: History) => IRouterState;
