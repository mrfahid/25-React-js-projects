const Details = ({ selected, close }) => {
  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <div className="row">
          <div className="col-12 col-md-6 text-white">
            <img src={selected.Poster} alt="poster" />
          </div>
          <div className="items text col-12 col-md-6 text-white">
            <h2>{selected.Title}</h2>
            <p>{selected.Year}</p>
            <p>Rating : {selected.imdbRating}</p>
            <p>{selected.Plot}</p>
            <button onClick={close} className="btn btn-danger">
              Go Bank
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
