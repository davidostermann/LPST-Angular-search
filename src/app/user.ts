export class User {
  id: number;
  name: string;
  image: string;
  jobTitle: string;
  position: Position;
}

export interface Position {
  lng: number;
  lat: number;
}
