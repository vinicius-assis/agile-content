import { useEffect, useState } from "react";
import database from "../database";
import filterAnimals from "../utils/filterAnimals";

export interface IUseAnimalsList {
  isLoading?: boolean;
  result?: IAnimalsList | undefined;
}

const getList = (value: string) => {
  return new Promise<IAnimalsList | undefined>((resolve) => {
    setTimeout(() => {
      const items = filterAnimals(database, value);
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
