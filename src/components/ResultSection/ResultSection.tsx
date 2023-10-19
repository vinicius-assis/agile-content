import { useState } from "react";
import ResultItem from "../ResultItem/ResultItem";
import "./style.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import useAnimalsList from "../../hooks/useAnimalsList";
import { useSearchParams } from "react-router-dom";
import Skeleton from "../Skeleton/LoadingResult";
import NoResultContent from "../NoResultContent/NoResultContent";

const ResultSection = () => {
  const [searchParams] = useSearchParams();
  const [showDetail, setShowDetail] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState<IAnimal | undefined>(
    undefined
  );
  const queryParams = searchParams?.get("q") || "";
  const { result: items, isLoading } = useAnimalsList(queryParams);

  const handleToggleShowDetail = (data?: IAnimal) => {
    if (showDetail && !data?.id) {
      setShowDetail(false);
    } else {
      setSelectedAnimal(data);
      setShowDetail(true);
    }
  };

  const SwitchComponent: React.FC = () => {
    if (!items?.length) {
      return <NoResultContent />;
    }
    return items?.map((animal) => (
      <ResultItem
        key={animal?.id}
        showDetail={() => handleToggleShowDetail(animal)}
        data={animal}
      />
    ));
  };

  return (
    <div className="result-wrapper">
      <div>{!isLoading ? <SwitchComponent /> : <Skeleton />}</div>
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
