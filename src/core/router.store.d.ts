import { Store } from '@datorama/akita';
import { IRouterState } from './router.state';
import { RouterService } from './router.service';
import { RouterQuery } from './router.query';
import { History } from 'history';
export declare class RouterStore extends Store<IRouterState> {
    constructor(history: History);
}
export interface IRouter {
    routerService: RouterService;
    routerQuery: RouterQuery;
}
export declare const configureStore: (initialState: History) => IRouter;
