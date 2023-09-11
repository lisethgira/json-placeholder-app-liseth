export interface ComentariosInterface {
  id: Number,
  postId: Number;
  name: String;
  email:String,
  body: String;
}

export class Comentarios implements ComentariosInterface {
  constructor(
    public id: Number,
    public postId: Number,
    public name: String,
    public email:String,
    public body: String,
  ) {}
}
