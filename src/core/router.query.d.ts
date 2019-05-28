import { Query } from '@datorama/akita';
import { RouterStore } from './router.store';
import { IRouterState } from './router.state';
export declare class RouterQuery extends Query<IRouterState> {
    protected store: RouterStore;
    constructor(store: RouterStore);
    getLocation: () => import("rxjs").Observable<import("history").Location<any>>;
}
