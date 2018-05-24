import { Injectable } from '@angular/core';

@Injectable()
export class AppService {
    // Changing the 'State' property changes the service instantiated
    public State = 1;
    public url = 'http://localhost:5000';
}
