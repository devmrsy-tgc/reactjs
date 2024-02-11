import { useEffect, useState } from "react";
import getData from "./dummyData";

function Search() {
  const [search, setSearch] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(getData());
  }, []);

  function handleSearch(event) {
    setSearch(event.target.value);
    const filerData = data.filter(({ id }) => id == event.target.value);
    if (filerData.length) {
      setData(filerData);
    } else {
      setData(getData());
    }
  }

  return (
    <section>
      <input
        value={search}
        type="text"
        placeholder="search you word"
        onChange={handleSearch}
      />

      <hr />

      <h1>Data</h1>

      {data.map(({ id, title }) => {
        return (
          <div>
            <div>{id}</div>
            <div>{title}</div>
          </div>
        );
      })}
    </section>
  );
}

export default Search;
