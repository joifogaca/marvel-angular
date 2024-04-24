
import { Thumbnail } from './Thumbnail';
import { Apparances } from './appearances';

export interface Character {
  id: number;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics: Apparances;
  series: Apparances;
}
