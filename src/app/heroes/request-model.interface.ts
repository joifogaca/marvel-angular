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

interface Hero {
  id: number,
  name: string,
  description: string,
  thumbnail: Thumbnail;
}

interface Thumbnail {
  path: string;
  extension: string;
}

