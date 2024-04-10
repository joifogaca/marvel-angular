export interface ResponseHero {
  code: string;
  status: string;
  data: DataRequestHero;
}

interface DataRequestHero {
  offset: number;
  limit: number;
  total: number,
  count: number,
  results: Hero[]
}

export interface Hero {
  id: number,
  name: string,
  description: string,
  thumbnail: Thumbnail;
  comics: Participations
  stories: Participations
}

export interface Thumbnail {
  path: string;
  extension: string;
}

export interface Participations {
  available: number,
  items: Item[];
}



export interface Stories {
  available: number,
  comicItems: Item[];
}

export interface Item {
  resourceURI: string,
  name: string
}







