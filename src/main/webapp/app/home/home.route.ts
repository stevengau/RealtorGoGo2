import { Route } from '@angular/router';
import { HomeComponent } from './';
import { NewlistingComponent } from './newlisting.component';
import { PropertyComponent } from './property.component';

export const HOME_ROUTE: Route = {
    path: '',
    component: HomeComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title'
    }
};

export const NEWLISTING_ROUTE: Route = {
    path: 'newlisting',
    component: NewlistingComponent,
    data: {
        authorities: [],
        pageTitle: 'home.title'
    }
};

export const PROPERTY_ROUTE: Route = {
    path: 'property',
    component: PropertyComponent,
    data: {
        authorities: [],
        pageTitle: ''
    }
};
