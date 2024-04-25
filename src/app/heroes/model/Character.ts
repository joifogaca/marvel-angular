
import { Apparances } from './Appearances';
import { Thumbnail } from './Thumbnail';


export interface Character {
  id: string;
  name: string;
  description: string;
  thumbnail: Thumbnail;
  comics: Apparances;
  series: Apparances;
}
