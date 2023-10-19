interface IAnimal {
  type?: string;
  id?: number;
  url?: string;
  title?: string;
  description?: string;
  image?: string;
}

type IAnimalsList = Array<IAnimal>;
