import filterAnimals from "../utils/filterAnimals";

const resultMock = [
  {
    type: "insect",
    id: 0 + 1,
    title: "insect",
    description: "cow",
  },
  {
    type: "insect",
    id: 0 + 1,
    title: "insect",
    description: "cow",
  },
  {
    type: "insect",
    id: 0 + 1,
    title: "rabbit",
    description: "rabbit",
  },
];

describe("useAnimalsList", () => {
  it("Should return undefined when second parameter is empty", () => {
    const result = filterAnimals(resultMock, "");

    expect(result).toEqual(undefined);
  });

  it("Should return an empty array when can't find the animal", () => {
    const result = filterAnimals(resultMock, "horse");

    expect(result?.length).toEqual(0);
  });

  it("Should return an array with all items that type, title or description match with second parameters", () => {
    const rabbitResult = filterAnimals(resultMock, "rabbit");
    const insectResult = filterAnimals(resultMock, "insect");
    const cowResult = filterAnimals(resultMock, "cow");

    expect(rabbitResult?.length).toEqual(1);
    expect(insectResult?.length).toEqual(3);
    expect(cowResult?.length).toEqual(2);
  });
});
