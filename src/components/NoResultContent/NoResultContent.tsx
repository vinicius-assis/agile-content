import "./style.css";
import { useSearchParams } from "react-router-dom";

const NoResultContent = () => {
  const [searchParams] = useSearchParams();
  const queryParams = searchParams?.get("q") || "";

  const keyworkds = [
    "insect",
    "fish",
    "horse",
    "crocodilla",
    "bear",
    "cetacean",
    "cow",
    "lion",
    "rabbit",
    "cat",
    "snake",
    "dog",
    "bird",
  ];

  const Keywords = () => {
    return keyworkds?.map((item, index, array) => {
      const sign = array?.length === index + 1 ? "." : ",";
      return <strong key={`${item}_${index}`}>{` ${item}${sign}`}</strong>;
    });
  };

  return (
    <div className="no-result">
      {queryParams && (
        <p>
          No results found for: <span>{queryParams}</span>
        </p>
      )}
      <p>
        Try looking for: <Keywords />
      </p>
    </div>
  );
};

export default NoResultContent;
