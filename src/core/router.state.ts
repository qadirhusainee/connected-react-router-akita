import { History, Location, Action } from 'history';

export interface IRouterState {
  location: Location;
  action: Action;
}

export const createInitialRoute: (history: History) => IRouterState = (history) => {
  const initialRoute: IRouterState = {
    location: history.location,
    action: history.action,
  };
  return initialRoute;
};
