export interface UsuariosInterface {
  id: Number;
  name: String;
  username: String;
  email: String;
  address: Address;
  phone: String;
  website: String;
  company: Company;
}

export interface Address {
  street: String;
  suite: String;
  city: String;
  zipcode: String;
  geo: Geo;
}

export interface Geo {
  lat: String;
  lng: String;
}

export interface Company {
  name: String;
  catchPhrase: String;
  bs: String;
}

export class Usuarios implements UsuariosInterface {
  constructor(
    public id: Number,
    public name: String,
    public username: String,
    public email: String,
    public address: Address,
    public phone: String,
    public website: String,
    public company: Company,
  ) { }
}
