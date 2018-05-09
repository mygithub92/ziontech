import { Http, BaseRequestOptions, Response, ResponseOptions, RequestMethod } from '@angular/http';
import { MockBackend, MockConnection } from '@angular/http/testing';

export function fakeBackendFactory(backend: MockBackend, options: BaseRequestOptions) {

    const grower = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRhdmlkIFdhbmciLCJyb2xlcyI6WyJncm93ZXIiXX0.eviyhhozzaTslk_6aHioIQN_v31qKKsGZdgFmACUNJk';
    const winery = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRhdmlkIFdhbmciLCJyb2xlcyI6WyJ3aW5lcnkiXX0.L0-W5maUJCJTuXaa2xZFEBbIdC5Q_F9tktbN-LAaOBw';
    const bottler = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRhdmlkIFdhbmciLCJyb2xlcyI6WyJib3R0bGVyIl19.28BySzyeN_Anu4aEpHSfxoR1H6OrZf1XfEa-s5n-WuA';
    const full = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkRhdmlkIFdhbmciLCJyb2xlcyI6WyJncm93ZXIiLCJ3aW5lcnkiLCJib3R0bGVyIl19.dc4tIMMYcJPb9g5h9fiGbxMRdlNzjWLwsGJ-uWVTQXw';

    backend.connections.subscribe((connection: MockConnection) => {
        // We are using the setTimeout() function to simulate an asynchronous call
        // to the server that takes 1 second.
        setTimeout(() => {
            //
            // Fake implementation of /api/authenticate
            //
            if (connection.request.url.endsWith('/api/authenticate') &&
                connection.request.method === RequestMethod.Post) {
                const body = JSON.parse(connection.request.getBody());

                if (body.password === '1234') {
                    let token;
                    if (body.email === 'grower@ziontech.com') {
                        token = grower;
                    }
                    if (body.email === 'winery@ziontech.com') {
                        token = winery;
                    }
                    if (body.email === 'bottler@ziontech.com') {
                        token = bottler;
                    }
                    if (body.email === 'owner@ziontech.com') {
                        token = full;
                    }
                    if (token) {
                        connection.mockRespond(new Response(
                            new ResponseOptions({
                                status: 200,
                                body: { token }
                            })
                        ));
                    }
                } else {
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200 })
                    ));
                }
            }



            //
            // Fake implementation of /api/orders
            //
            if (connection.request.url.endsWith('/api/orders') && connection.request.method === RequestMethod.Get) {
                if (connection.request.headers.get('Authorization') === 'Bearer ' + token) {
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 200, body: [1, 2, 3] })
                    ));
                } else {
                    connection.mockRespond(new Response(
                        new ResponseOptions({ status: 401 })
                    ));
                }
            }



        }, 1000);
    });

    return new Http(backend, options);
}

export let fakeBackendProvider = {
    provide: Http,
    useFactory: fakeBackendFactory,
    deps: [MockBackend, BaseRequestOptions]
};
