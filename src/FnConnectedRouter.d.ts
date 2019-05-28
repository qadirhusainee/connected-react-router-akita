import { ReactChild } from 'react';
import { History } from 'history';
import { RouterService } from './core/router.service';
import { RouterQuery } from './core/router.query';
interface IFnConnectedRouterProps {
    history: History;
    routerQuery: RouterQuery;
    routerService: RouterService;
    children: ReactChild;
}
export declare const FnConnectedRouter: (props: IFnConnectedRouterProps) => JSX.Element;
export {};
