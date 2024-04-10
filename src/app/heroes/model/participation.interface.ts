import { Thumbnail } from "./request.interface";

export interface Participation {
  title:string,
  description: string,
  thumbnail: Thumbnail;
}

export interface ResponseParticipation {
  code: string;
  status: string;
  data: DataRequestParticipation;
}

interface DataRequestParticipation {
  offset: number;
  limit: number;
  total: number,
  count: number,
  results: Participation[]
}
