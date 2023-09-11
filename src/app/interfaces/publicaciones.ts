
export interface PublicacionesInterface {
  id: Number,
  userId: Number;
  title: String;
  body: String;
}

export class Publicaciones implements PublicacionesInterface {
  constructor(
    public id: Number,
    public userId: Number,
    public title: String,
    public body: String,
  ) {}
}
