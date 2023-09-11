 export interface ProductosInterface {
    id: Number,
    title: String;
    description: String;
    price: Number;
    image: String;
    category: String;
  }

  export class Productos implements ProductosInterface {
    constructor(
      public id: Number,
      public title: String,
      public description: String,
      public price: Number,
      public image: String,
      public category: String
    ) {}
  }

