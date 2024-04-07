export interface ResponseModel {
  code: string;
  status: string;
  data: DataRequest;
}

interface DataRequest {
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
  comics: Comics
}

interface Thumbnail {
  path: string;
  extension: string;
}

export interface Comics {
  available: number,
  comicItems: ComicItem[];
}


export interface ComicItem {
  resourceURI: string,
  name: string
}

export interface series {
  available: number,
  comicItems: SerieItem[];
}

export interface SerieItem {
  resourceURI: string,
  name: string
}





