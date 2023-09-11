export interface TareasInterface {
  id: Number,
  userId: Number;
  title: String;
  completed: Boolean;
}

export class Tareas implements TareasInterface {
  constructor(
    public id: Number,
    public userId: Number,
    public title: String,
    public completed: Boolean,
  ) {}
}
