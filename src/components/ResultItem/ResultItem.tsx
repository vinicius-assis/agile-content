import "./style.css";

interface IResultItemProps {
  showDetail?: () => void;
  data?: IAnimal;
}

const ResultSkeletonItem = ({ showDetail, data }: IResultItemProps) => {
  const { title, url, description } = data || {};
  return (
    <div className="result-item" onClick={showDetail}>
      <cite>{url}</cite>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default ResultSkeletonItem;
