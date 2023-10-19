import { useEffect, useState } from "react";
import "./style.css";

interface IItemDetailProps {
  closeDetail: () => void;
}

const ItemDetail = ({ closeDetail }: IItemDetailProps) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  const handleWindowSizeChange = () => setScreenWidth(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);

  const mobileProps = screenWidth < 681 ? { className: "result-layer" } : {};

  return (
    <div {...mobileProps} onClick={closeDetail}>
      <div className="item-detail">
        <span></span>
        <cite>https://www.globo.com</cite>
        <h2>Globo</h2>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus
          officia voluptas, sapiente totam corporis. A ut maiores esse explicabo
          neque. aliquam tempora delectus eveniet! Magni rerum amet delectus
          illum sit?
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;
