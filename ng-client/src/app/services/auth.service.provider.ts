import { AppService } from './app.service';
import { AbstractAuthService, AuthService } from './auth.service';
import { MockAuthService } from './auth.service.mock';
import { Http } from '@angular/http';

// Further reading:
// https://angular.io/docs/ts/latest/guide/dependency-injection.html#!#injector-providers

// DataService factory - Responsible to instantiate the service
const authServiceFactory = (http: Http, appService: AppService) => {
    // Example how to instantiate services conditionally
    return appService.State === 1 ? new AuthService(http) : new MockAuthService();
};

// Provider - Used in the Component
export let AuthServiceProvider = {
    provide: AbstractAuthService,
    useFactory: authServiceFactory,
    deps: [Http, AppService]
};
