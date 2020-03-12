## Initial steps:
    In order to use the Router, you must first register the RouterModule from the @angular/router package. 
    Define an array of routes, appRoutes, and pass them to the RouterModule.forRoot() method.

### Route
    `const routes: Routes=[];`

    Inside the routes array, there are two main properties:

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

### RouterLink:
    - The routerLink is what turns user clicks into router navigations. 

    - The RouterLinkActive directive toggles css classes for active RouterLink 
    bindings based on the current RouterState. - it accepts space-delimited string of CSS classes

    - [routerLinkActiveOptions] input binding with the { exact: true } expression. By using { exact: true }, 
    a given RouterLink will only be active if its URL is an exact match to the current URL instead of making all `parent-child` active.

### data object in router:
    - Only the relevant component can get its data object from 'ActivatedRoute`.

- router.navigate for manual routing (similar to $state.go)

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


## Best practices:
- Seperate Routing from AppModule by having them in AppRoutingModule.
- module with its own routing configuration
-  AppRoutingModule
    - configure the router in a separate, top-level module that is dedicated to routing and imported by the root AppModule.


