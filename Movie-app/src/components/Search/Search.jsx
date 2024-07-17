import "./Search.css";

export default function Search({ handleInput, SearchResult }) {
  return (
    <div className="search-input mt-3 mb-5">
      <input
        type="text"
        name="movie"
        placeholder="Search for a Movie..."
        className="w-50 p2 background-dark"
        onChange={handleInput}
        onKeyDown={SearchResult}
      />
    </div>
  );
}
