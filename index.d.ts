
declare module 'connected-react-router-akita' {
  import * as React from 'react';
  import { ReactChild, Component } from 'react';
  import { Subscription } from "rxjs";
  import { Store, Query } from '@datorama/akita';
  import { History, Location, Action } from 'history';

  export interface IRouterState {
    location: Location;
    action: Action;
  }

  export interface IRouter {
    routerService: RouterService;
    routerQuery: RouterQuery;
  }

  interface IConnectedRouterProps {
    history: History;
    routerQuery: RouterQuery;
    routerService: RouterService;
    children: ReactChild;
  }
  export class ConnectedRouter extends Component<IConnectedRouterProps, {}> {
    inTimeTravelling: boolean;
    unSubscribeLocation: Subscription;
    unlisten: () => void;
    constructor(props: IConnectedRouterProps);
    componentWillUnmount(): void;
    render(): JSX.Element;
  }
  export class RouterStore extends Store<IRouterState> {
    constructor(history: History);
  }

  export const configureStore: (initialState: History) => IRouter;

  export const createInitialRoute: (history: History) => IRouterState;

  export class RouterService {
    private store;
    constructor(store: RouterStore);
    updateLocation: (params: any) => void;
  }

  export class RouterQuery extends Query<IRouterState> {
    protected store: RouterStore;
    constructor(store: RouterStore);
    getLocation: () => import('rxjs').Observable<Location<any>>;
  }
  interface IFnConnectedRouterProps {
    history: History;
    routerQuery: RouterQuery;
    routerService: RouterService;
    children: ReactChild;
  }
  export const FnConnectedRouter: (props: IFnConnectedRouterProps) => JSX.Element;

}