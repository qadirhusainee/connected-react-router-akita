import { Store, StoreConfig } from '@datorama/akita';

import { createInitialRoute, IRouterState } from './router.state';
import { RouterService } from './router.service';
import { RouterQuery } from './router.query';

import {
  History,
} from 'history';

@StoreConfig({ name: 'RouterState' })
export class RouterStore extends Store<IRouterState> {
  constructor(history: History) {
    super(createInitialRoute(history));
  }
}

export interface IRouter {
  routerService: RouterService;
  routerQuery: RouterQuery;
}

export const configureStore: (initialState: History) => IRouter = (initialState) => {
  const store: RouterStore = new RouterStore(initialState);
  const routerService: RouterService = new RouterService(store);
  const routerQuery: RouterQuery = new RouterQuery(store);
  return { routerService, routerQuery };
};
