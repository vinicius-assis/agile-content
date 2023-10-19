import { AnimalModule, faker } from "@faker-js/faker";

type Value = keyof AnimalModule;

const getImage = () =>
  faker.image.urlLoremFlickr({ category: "animals", width: 644, height: 362 });
const getType = () => faker.animal.type();
const getUrl = () => faker.internet.url();
const getText = () => faker.lorem.sentences();
const getTitle = (type: Value) => faker.animal[type]();

const database: Array<IAnimals> = [...new Array(100)].map((_, index) => {
  const type = getType() as Value;
  return {
    type,
    id: index + 1,
    url: getUrl(),
    title: getTitle(type),
    description: getText(),
    image: getImage(),
  };
});

export default database;
