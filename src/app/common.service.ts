import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CommonService {
    URL = "https://jsonplaceholder.typicode.com/users";

    constructor(private _http: HttpClient) { }
    getUsers() {
        return this._http.get(this.URL);
    }
}