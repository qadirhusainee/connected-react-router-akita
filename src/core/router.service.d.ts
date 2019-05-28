import { RouterStore } from './router.store';
export declare class RouterService {
    private store;
    constructor(store: RouterStore);
    updateLocation: (params: any) => void;
}
