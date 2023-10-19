import { useState } from "react";
import ResultItem from "../ResultItem/ResultItem";
import "./style.css";
import ItemDetail from "../ItemDetail/ItemDetail";

const ResultSection = () => {
  const [showDetail, setShowDetail] = useState(false);

  const handleToggleShowDetail = () => setShowDetail(!showDetail);

  return (
    <div className="result-wrapper">
      <div>
        <ResultItem showDetail={handleToggleShowDetail} />
        <ResultItem showDetail={handleToggleShowDetail} />
      </div>
      {showDetail && <ItemDetail closeDetail={handleToggleShowDetail} />}
    </div>
  );
};

export default ResultSection;
