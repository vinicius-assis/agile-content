import { useEffect, useState } from "react";
import ResultItem from "../ResultItem/ResultItem";
import "./style.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import useAnimalsList from "../../hooks/useAnimalsList";
import { useSearchParams } from "react-router-dom";
import Skeleton from "../Skeleton/LoadingResult";

const ResultSection = () => {
  const [searchParams] = useSearchParams();
  const getAnimals = useAnimalsList();
  const [showDetail, setShowDetail] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState<IAnimal | undefined>(
    undefined
  );
  const [items, setItems] = useState<IAnimalsList>([]);
  const [isLoading, setIsLoading] = useState(false);
  const queryParams = searchParams?.get("q") || "";

  const handleList = async () => {
    setIsLoading(true);
    try {
      const response = await getAnimals(queryParams);
      setItems(response);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleShowDetail = (data?: IAnimal) => {
    if (showDetail && !data?.id) {
      setShowDetail(false);
    } else {
      setSelectedAnimal(data);
      setShowDetail(true);
    }
  };

  useEffect(() => {
    if (queryParams) {
      handleList();
    }
  }, [queryParams]);

  return (
    <div className="result-wrapper">
      <div>
        {!isLoading ? (
          items?.map((animal) => (
            <ResultItem
              key={animal?.id}
              showDetail={() => handleToggleShowDetail(animal)}
              data={animal}
            />
          ))
        ) : (
          <Skeleton />
        )}
      </div>
      {showDetail && selectedAnimal && (
        <ItemDetail
          data={selectedAnimal}
          closeDetail={handleToggleShowDetail}
        />
      )}
    </div>
  );
};

export default ResultSection;
