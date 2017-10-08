import {Injectable, Inject} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class JsonProviderService {
  	
  	constructor(private http: Http) {}
	
	public getData(path: string) {
		return this.http.get(path);
    }
}