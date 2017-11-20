import { JsonApiModelConfig, JsonApiModel, Attribute, HasMany, BelongsTo } from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'companies'
})

export class Company extends JsonApiModel {

  @Attribute()
  name: string;

  @Attribute()
  category_id: number;

  @BelongsTo()
  category: Category;

  // @HasMany()
  // users: User[];
}

@JsonApiModelConfig({
  type: 'categories'
})
export class Category extends JsonApiModel {

  @Attribute()
  name: string;

  @HasMany()
  companies: Company[];
}

@JsonApiModelConfig({
  type: 'events'
})
export class Event extends JsonApiModel {

  @Attribute()
  date: string;

  @Attribute()
  city: string;

  @Attribute()
  description: string;

  // @Attribute()
  // user_id: number;
  //
  // @Attribute()
  // company_id: number;

  @BelongsTo()
  user: User;

  @BelongsTo()
  company: Company;
}

@JsonApiModelConfig({
  type: 'users'
})
export class User extends JsonApiModel {

  @Attribute()
  last_name: string;

  @Attribute()
  first_name: string;

  @Attribute()
  full_name: string;

  @Attribute()
  email: string;

  @Attribute()
  phone_number: number;

  @Attribute()
  address: string;

  @Attribute()
  city: string;

  @Attribute()
  zip_code: string;

  @Attribute()
  country: string;

  @Attribute()
  full_address: string;

  @Attribute()
  description: string;

  @Attribute()
  job_offer: string;

  @HasMany()
  companies: Company[];

  // @HasMany()
  // images: Image[];

  // @HasMany()
  // events: Event[];
}
