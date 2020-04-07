export interface Breeds {
  primary: string;
  secondary?: any;
  mixed: boolean;
  unknown: boolean;
}

export interface Colors {
  primary: string;
  secondary?: any;
  tertiary?: any;
}

export interface Photo {
  small: string;
  medium: string;
  large: string;
  full: string;
}

export interface Video {
  embed: string;
}

export interface Attributes {
  spayed_neutered: boolean;
  house_trained: boolean;
  declawed: boolean;
  special_needs: boolean;
  shots_current: boolean;
}

export interface Environment {
  children: boolean;
  dogs: boolean;
  cats: boolean;
}

export interface Address {
  address1?: any;
  address2?: any;
  city: string;
  state: string;
  postcode: string;
  country: string;
}

export interface Contact {
  email: string;
  phone: string;
  address: Address;
}

export interface Self {
  href: string;
}

export interface Type {
  href: string;
}

export interface Organization {
  href: string;
}

export interface Links {
  self: Self;
  type: Type;
  organization: Organization;
}

export interface Pet {
  id: number;
  organization_id: string;
  url: string;
  type: string;
  species: string;
  breeds: Breeds;
  colors: Colors;
  age: string;
  gender: string;
  size: string;
  coat: string;
  name: string;
  description: string;
  photos: Photo[];
  videos: Video[];
  status: string;
  attributes: Attributes;
  environment: Environment;
  tags: string[];
  contact: Contact;
  published_at: Date;
  distance: number;
  _links: Links;
}
