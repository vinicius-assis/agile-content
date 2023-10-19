import database from "../database";

type IUuseAnimalsList = (value: string) => Promise<IAnimalsList>;

const useAnimalsList = (): IUuseAnimalsList => {
  const getList = (value: string) => {
    return new Promise<IAnimalsList>((resolve) => {
      setTimeout(() => {
        const items = database?.filter(({ title, description, type }) => {
          const lowerValue = value?.toLowerCase();
          const itemsReferences = [
            title?.toLowerCase(),
            description?.toLowerCase(),
            type?.toLowerCase(),
          ];
          return itemsReferences?.includes(lowerValue);
        });
        resolve(items);
      }, 1000);
    });
  };

  return getList;
};

export default useAnimalsList;
