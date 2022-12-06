import React from "react";
import "./MainBlock.css";

type Props = {
  children: JSX.Element;
};

const MainBlock: React.FC<Props> = ({ children }) => {
  return <div className="main_block">{children}</div>;
};

export default MainBlock;
