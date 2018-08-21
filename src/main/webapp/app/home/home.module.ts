import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RealtorGoGoSharedModule } from '../shared';
import { PROPERTY_ROUTE, NEWLISTING_ROUTE, HOME_ROUTE, HomeComponent } from './';
import { NewlistingComponent } from './newlisting.component';
import { AgmCoreModule } from '@agm/core';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';
import { VirtualScrollModule } from 'angular2-virtual-scroll';
import {} from '@types/googlemaps';

@NgModule({
    imports: [RealtorGoGoSharedModule, VirtualScrollModule, RouterModule.forChild([HOME_ROUTE, NEWLISTING_ROUTE])],
    declarations: [HomeComponent, NewlistingComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RealtorGoGoHomeModule {}
