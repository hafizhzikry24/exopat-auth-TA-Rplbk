import { useEffect, useState } from "react";
import axios from "axios";
import "./Search.css";
import { NavLink } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Search = () => {
  const [data, setData] = useState([]);
  const [name, setName] = useState("");
  const [isLoading] = useState(false);
  const [isError] = useState(false);

  useEffect(() => {
    const doSearch = (e) => {
      axios
        .get(
          "https://my-json-server.typicode.com/myoktariansyah/exopet-app/exopet?common_name=" + name
        )
        .then((results) => {
          setData(results.data);
        });
    };
    doSearch();
  }, [name]);
  console.log(data);

  const renderList = () => {
    return (
      <main>
        <input
          className="search-input"
          type="text"
          placeholder="Search Exopet by name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="item-container1">
          {data.map((item, index) => {
            return (
              <div key={index}>
                <NavLink to={`/DetailSearch/${item.common_name}`}>
                  <img className="imgsearch" src={item.image} alt="" />
                  <div className="search-name">
                    <p>{item.common_name}</p>
                  </div>
                </NavLink>
              </div>
            );
          })}
        </div>
      </main>
    );
  };

  const renderError = () => {
    if (isError) {
      return (
        <div
          className="alert alert-warning alert-dismissible fade show"
          role="alert"
        >
          Unable to Get data, Please try again next time
        </div>
      );
    }
  };

  return (
    <div className="search-container">
      {renderError()}
      <h1 className="txt">
        Search <span className="span-search">Exopet</span>
      </h1>
      {isLoading ? (
        <div className="search-loading">Loading...</div>
      ) : (
        <div className="search-result">{renderList()}</div>
      )}
      <Navbar/>
    </div>
  );
};

export default Search;
