import { Component, ReactChild } from 'react';
import { Subscription } from "rxjs";
import { History } from 'history';
import { RouterService } from './core/router.service';
import { RouterQuery } from './core/router.query';
interface IConnectedRouterProps {
    history: History;
    routerQuery: RouterQuery;
    routerService: RouterService;
    children: ReactChild;
}
export declare class ConnectedRouter extends Component<IConnectedRouterProps, {}> {
    inTimeTravelling: boolean;
    unSubscribeLocation: Subscription;
    unlisten: () => void;
    constructor(props: IConnectedRouterProps);
    componentWillUnmount(): void;
    render(): JSX.Element;
}
export {};
