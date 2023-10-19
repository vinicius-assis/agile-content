const filterAnimals = (
  database: IAnimalsList,
  value: string
): IAnimalsList | undefined => {
  if (!database?.length || !value) return undefined;
  return database?.filter(({ title, description, type }) => {
    const lowerValue = value?.toLowerCase();
    const itemsReferences = [
      title?.toLowerCase(),
      description?.toLowerCase(),
      type?.toLowerCase(),
    ];
    return itemsReferences?.includes(lowerValue);
  });
};

export default filterAnimals;
