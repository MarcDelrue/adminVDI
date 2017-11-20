import {Injectable} from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { JsonApiDatastoreConfig, JsonApiDatastore, DatastoreConfig } from 'angular2-jsonapi';
import { environment } from '../../environments/environment';
import { Category, Company, Event, User } from '../models/reseauvdiModels.model';

const config: DatastoreConfig = {
  baseUrl: environment.apiUrl,
  models: {
    categories: Category,
    compagnies: Company,
    events: Event,
    users: User
    //admins: Admin
  }
}

@Injectable()
@JsonApiDatastoreConfig(config)
export class Datastore extends JsonApiDatastore {

    constructor(http: Http) {
        super(http);

    }
}
