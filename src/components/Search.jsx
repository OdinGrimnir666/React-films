import { useState } from "react";

const Search = (props) => {
  const [search, setSeach] = useState("");
  const [type, setType] = useState("all");
  const handleKey = (event) => {
    if (event.key === "Enter") {
      props.searchMovis(search,type);
    }
  };

  
  const handleFilte = (event) => {
    setType(event.target.dataset.type.trim());
  };
  return (
    <div className="row">
      <div className="input-field">
        <input
          placeholder="search"
          type="search"
          className="validate"
          value={search}
          onChange={(e) => setSeach(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          onClick={() => props.searchMovis(search,type)}
          className="btn search-btn"
        >
          Search
        </button>
      </div>
      <label>
        <input
          key="1"
          className="with-gap"
          name="type"
          type="radio"
          checked={type === "all"}
          data-type="all"
          onChange={handleFilte}
        />
        <span>All</span>
      </label>
      <label>
        <input
          key="2"
          className="with-gap"
          name="type"
          type="radio"
          data-type="movie"
          onChange={handleFilte}
          checked={type === "movie"}
        />
        <span>Movies only</span>
      </label>
      <label>
        <input
          key="3"
          className="with-gap"
          name="type"
          type="radio"
          data-type="series"
          onChange={handleFilte}
          checked={type === "series"}
        />
        <span>Series only</span>
      </label>
    </div>
  );
};

export default Search;
