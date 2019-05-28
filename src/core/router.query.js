import { Query } from '@datorama/akita';
export class RouterQuery extends Query {
    constructor(store) {
        super(store);
        this.store = store;
        this.getLocation = () => this.select(state => state.location);
    }
}
