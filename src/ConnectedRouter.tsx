import * as React from 'react';
import { Component, ReactChild } from 'react';
import { Router } from 'react-router';
import { Subscription } from "rxjs";
import {
  History,
  Action,
  Location,
} from 'history';

import { RouterService } from './core/router.service';
import { RouterQuery } from './core/router.query';

export interface IConnectedRouterProps {
  history: History;
  routerQuery: RouterQuery;
  routerService: RouterService;
  children: ReactChild;
}

/*
 * ConnectedRouter listens to a history object passed from props.
 * When history is changed, it updates in akita store.
 * Then, component will get data by subscribing to query.
 */
export class ConnectedRouter extends Component<IConnectedRouterProps, {}> {

  public inTimeTravelling: boolean;
  public unSubscribeLocation: Subscription;
  public unlisten!: () => void;

  constructor(props: IConnectedRouterProps) {
    super(props);
    let inTimeTravelling = false;

    const { history, routerService, routerQuery } = props;

    const handleLocationChange = (location: Location, action: Action) => {
      if (!inTimeTravelling) {
        routerService.updateLocation({ location, action });
      } else {
        inTimeTravelling = false;
      }
    };

    this.unlisten = history.listen(handleLocationChange);

    this.unSubscribeLocation = routerQuery.getLocation().subscribe((location: Location) => {
      // Extract store's location
      const {
        pathname: pathnameInStore,
        search: searchInStore,
        hash: hashInStore,
      } = location;

      // Extract history's location
      const {
        pathname: pathnameInHistory,
        search: searchInHistory,
        hash: hashInHistory,
      } = history.location;

      // If we do time travelling, the location in store is changed but location in history is not changed
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
  }

  public componentWillUnmount() {
    this.unlisten();
    this.unSubscribeLocation.unsubscribe();
  }

  public render() {
    const { history, children } = this.props;
    return (
      <Router history={ history }>
        {children}
      </Router>
    );
  }
}
