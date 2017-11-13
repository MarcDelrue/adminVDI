import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';
import { environment } from '../../environments/environment';
import 'rxjs/Rx';

const config: DatastoreConfig = {
  baseUrl: environment.apiUrl,
  models: {
    categories: categories,
    compagnies: compagnies,
    events: events,
    users: users,
    admins: admins
  }
}

@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

    constructor(http: Http) {
        super(http);
    }
}
