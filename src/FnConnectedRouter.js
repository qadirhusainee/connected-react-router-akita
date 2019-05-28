import * as React from 'react';
import { useEffect } from 'react';
import { Router } from 'react-router';
/*
 * FnConnectedRouter is Functional component which uses hooks and it listens to a history object passed from props.
 * When history is changed, it updates in akita store.
 * Then, component will get data by subscribing to query.
 */
export const FnConnectedRouter = (props) => {
    const { history, children, routerQuery, routerService } = props;
    useEffect(() => {
        let inTimeTravelling = false;
        // Update history in store
        const handleLocationChange = (location, action) => {
            if (!inTimeTravelling) {
                routerService.updateLocation({ location, action });
            }
            else {
                inTimeTravelling = false;
            }
        };
        const unlisten = history.listen(handleLocationChange);
        const unSubscribeLocation = routerQuery.getLocation().subscribe((location) => {
            // Extract store's location
            const { pathname: pathnameInStore, search: searchInStore, hash: hashInStore, } = location;
            // Extract history's location
            const { pathname: pathnameInHistory, search: searchInHistory, hash: hashInHistory, } = history.location;
            // To update location history when time travelling is used
            if (pathnameInHistory !== pathnameInStore || searchInHistory !== searchInStore || hashInHistory !== hashInStore) {
                inTimeTravelling = true;
                // Update history's location to match store's location
                history.push({
                    pathname: pathnameInStore,
                    search: searchInStore,
                    hash: hashInStore,
                });
            }
        });
        return () => {
            unlisten();
            unSubscribeLocation.unsubscribe();
        };
    }, []);
    return (React.createElement(Router, { history: history }, children));
};
