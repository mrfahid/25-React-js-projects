import "./RedLine.css";

const RedLine = ({ type }) => {
  return <div className={`${type === "small" ? "small" : "redLine"}`}></div>;
};

export default RedLine;
