export interface Type {
  href: string;
}

export interface Links {
  type: Type;
}

export interface Breed {
  name: string;
  _links: Links;
}
