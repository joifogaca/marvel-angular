import { Character } from "./Character";

export interface MarvelResponse {
  data: DataResult;
}

export interface DataResult {
  offset: number;
  limit: number;
  total: number,
  count: number,
  results: Character[]
}
