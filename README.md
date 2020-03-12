### Initial steps:
    In order to use the Router, 
    you must first register the RouterModule from the @angular/router package. 
    Define an array of appRoutes, and pass them to the RouterModule.forRoot() method.

### Route
    there are two main properties:

    a) path
    b) component

### Wildcard route
    - To handle invalid routes
        `{path: '**', Component: 'PageNotFoundComponent}`

### Default route
    - The solution is to add a `redirectTo` route that translates the initial relative URL ('') to the desired default path.
    - A redirect route requires a pathMatch property

### RouterOutlet:
    The <router-outlet> where router displays views.
     - Multiple router outlets can be used.

### RouterLink:
    - The routerLink is what turns user clicks into router navigations. 

    - The RouterLinkActive directive toggles css classes for active RouterLink 
    bindings based on the current RouterState. - it accepts space-delimited string of CSS classes

    - [routerLinkActiveOptions] input binding with the { exact: true } expression. By using { exact: true }, 
    a given RouterLink will only be active if its URL is an exact match to the current URL instead of making all `parent-child` active.
        
    - router.navigate for manual routing (similar to $state.go)

### data object in router:
    - Only the relevant component can get its data object from 'ActivatedRoute`.

### ActivatedRoute
    - The route path and parameters are available through an injected router service called the ActivatedRoute.

### Router Events
    There are Router events we can listen to. (`NavigationStart`) is an example. we can import the event from router package,
    subscribe to router.events and filter based on the event instance that we interested in.

    ```
        this.router.events.subscribe(e => {
        if (e instanceof NavigationStart) {
            ... // e => { id, url}
        }
        });
    ```

### Route guards
    - To control access to current path and its children
    - To resolve data

    1) `CanActivate`: we can have permission check here.
    2) `CanActivateChild`: check to enable child routes
    3) `CanDeactivate` - to stop user from moving away from the route
    4) `Resolve`: pre-fetching component data
      - resolver's result will be available in ActivatedRoute.data

## Best practices:
    -  AppRoutingModule
        - configure the router in a separate, top-level module that is dedicated to routing and imported by the root AppModule.  - `RouterModule.forRoot`
          - Only register top-level routes here,
    - Module-level Routes
      - imported in module files.
      - modules should have their own routing configuration - `RouterModule.forChild`
    - Lazy loading routes using `loadChildren` prop
    - Organize guards and resolvers.
      - module specific ones should reside inside module folders.
