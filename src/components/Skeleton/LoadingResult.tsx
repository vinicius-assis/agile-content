import { Fragment } from "react";

const Skeleton = () => {
  const mock = [...new Array(10)];

  return (
    <div className="result-wrapper">
      {mock.map((_, index) => (
        <Fragment key={index}>
          <div className="result-item -skeleton">
            <cite></cite>
            <h2></h2>
            <p></p>
            <p style={{ width: "70%" }}></p>
          </div>
          <div></div>
        </Fragment>
      ))}
    </div>
  );
};

export default Skeleton;
