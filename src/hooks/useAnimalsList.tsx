import { useEffect, useState } from "react";
import database from "../database";

interface IUseAnimalsList {
  isLoading?: boolean;
  result?: IAnimalsList | undefined;
}

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

const useAnimalsList = (value: string): IUseAnimalsList => {
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<IAnimalsList | undefined>(undefined);

  const fetchList = async () => {
    setIsLoading(true);
    try {
      const list = await getList(value);
      setResult(list);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (value) {
      fetchList();
    }
  }, [value]);

  return { isLoading, result };
};

export default useAnimalsList;
