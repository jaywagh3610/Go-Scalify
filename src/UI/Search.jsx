import { useEffect, useState } from "react";

function Search() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [searchsugg, setSearchsugg] = useState([]);
  const [result, setResult] = useState(null);
  const [autosug, setAutoSug] = useState("");
  const [position, setPosition] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:4000/users");
      const data = await res.json();
      setData(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (search.trim() === "") {
      setSearchsugg([]);
      setPosition(0);
      setShow(true);
      return;
    }

    const searchFind = data.filter((el) => {
      const nameMatch = el.name.toLowerCase().startsWith(search.toLowerCase());
      const emailMatch = el.email
        .toLowerCase()
        .startsWith(search.toLowerCase());
      return nameMatch || emailMatch;
    });

    setSearchsugg(searchFind);
    if (searchFind.length > 0) {
      const suggestion = searchFind[0].name;
      const autoComplete = suggestion.slice(search.length).toLowerCase();
      setAutoSug(autoComplete);
    } else {
      setAutoSug("");
    }
    function handleInputClick() {
      setPosition((prev) => prev + 7);
    }
    handleInputClick();
  }, [search, data]);

  function handleSearch(e) {
    e.preventDefault();
    if (search.trim() === "") {
      setSearchsugg([]);
      return;
    }

    const found = data.find(
      (el) =>
        el.name.toLowerCase().includes(search.toLowerCase()) ||
        el.email.toLowerCase().includes(search.toLowerCase())
    );
    setResult(found || null);
    setSearch("");
  }

  function handleSuggestionClick(suggestion) {
    setSearch(suggestion.name);
    setSearchsugg([]);
  }
  function handleKeyUp(e) {
    if (
      e.key === "ArrowRight" ||
      (e.key === "ArrowLeft" && searchsugg.length > 0)
    ) {
      setSearch(searchsugg[0]?.name);
      setAutoSug("");
    }
  }

  function handleKeyDown(e) {
    if (e.key === "Backspace") {
      setAutoSug("");
      setShow(false);
    }
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <div className="">
          <input
            className="auto1"
            placeholder="Type to search..."
            type="text"
            value={search}
            onKeyDown={handleKeyDown}
            onKeyUp={handleKeyUp}
            onChange={(e) => setSearch(e.target.value)}
          />
          {show && search && (
            <span
              style={{ transform: `translateX(${position}px)` }}
              className="autosugg"
            >
              {autosug}
            </span>
          )}
        </div>
        <button type="submit">🔍</button>
      </form>
      {searchsugg.length > 0 && search && (
        <div>
          <ul>
            {searchsugg.map((el) => (
              <li key={el.id} onClick={() => handleSuggestionClick(el)}>
                <p>{el.name}</p>
                <p>{el.email}</p>
              </li>
            ))}
          </ul>
        </div>
      )}

      {result ? (
        <div>
          <p>Name: {result.name}</p>
          <p>Email: {result.email}</p>
        </div>
      ) : searchsugg.length === 0 && search ? (
        <p>No results found.</p>
      ) : null}
    </div>
  );
}

export default Search;
