export class RouterService {
    constructor(store) {
        this.store = store;
        this.updateLocation = (params) => {
            this.store.update(() => (Object.assign({}, params)));
        };
    }
}
