import { Query } from '@datorama/akita';

import { RouterStore } from './router.store';
import { IRouterState } from './router.state';

export class RouterQuery extends Query<IRouterState> {
  constructor(protected store: RouterStore) {
    super(store);
  }

  public getLocation = () => this.select(state => state.location);

}
