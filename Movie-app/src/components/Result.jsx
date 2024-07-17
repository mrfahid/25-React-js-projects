const Result = ({ result, opneDetail }) => {
  return (
    <div className="result" onClick={(e) => opneDetail(result.imdID)}>
      <div className="border border-dark border-4">
        <img src={result.Poster} alt="poster" />
      </div>
      <div className="bg-dark text-white p2">
        <h5>{result.Title}</h5>
      </div>
    </div>
  );
};

export default Result;
