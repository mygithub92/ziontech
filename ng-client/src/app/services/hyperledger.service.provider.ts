import { AppService } from './app.service';
import { AbstractHyperledgerService, HyperledgerService } from './hyperledger.service';
import { MockHyperledgerService } from './hyperledger.service.mock';
import { Http } from '@angular/http';

// Further reading:
// https://angular.io/docs/ts/latest/guide/dependency-injection.html#!#injector-providers

// DataService factory - Responsible to instantiate the service
const hyperledgerServiceFactory = (http: Http, appService: AppService) => {
    // Example how to instantiate services conditionally
    return appService.State === 1 ? new HyperledgerService(http) : new MockHyperledgerService();
};

// Provider - Used in the Component
export let HyperledgerServiceProvider = {
    provide: AbstractHyperledgerService,
    useFactory: hyperledgerServiceFactory,
    deps: [Http, AppService]
};
