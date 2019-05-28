import { RouterStore } from './router.store';

export class RouterService {
  constructor(private store: RouterStore) { }

  public updateLocation = (params: any) => {
    this.store.update(() => ({
      ...params,
    }));
  };

}
