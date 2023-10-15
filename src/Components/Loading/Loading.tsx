import React from "react";
import "./Loading.scss";

const SkeletonLoader: React.FC = () => {
  return <div className="skeleton-loader"></div>;
};

export default React.memo(SkeletonLoader);
