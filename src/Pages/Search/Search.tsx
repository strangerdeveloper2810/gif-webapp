import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import SkeletonLoader from "../../Components/Loading";
import Container from "react-bootstrap/Container";
import {
  DOMAIN,
  search,
  API_KEY,
  limit,
  offset,
  rating,
  bundle,
  history,
} from "../../Utils/setting";
import "./Search.scss";
import { gifImage } from "../../types/Response";

const Search: React.FC = () => {
  const { keyword: urlKeyword } = useParams();
  const [searchKeyword, setSearchKeyword] = useState(urlKeyword);
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${DOMAIN}/${search}?api_key=${API_KEY}&q=${searchKeyword}&limit=${limit}&offset=${offset}&rating=${rating}&lang=en&bundle=${bundle}`
      );
      setSearchResults(response.data.data);
      setLoading(false);
      history.push(`/search/${searchKeyword}`);
    } catch (error) {
      console.error("Error searching gifs:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [urlKeyword]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value);
  };

  const handleInputKeyPress = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      await fetchData();
    }
  };

  return (
    <Container>
      <div className="search-box">
        <input
          type="text"
          className="form-control search-input"
          placeholder="Find gif"
          value={searchKeyword}
          onChange={handleInputChange}
          onKeyUp={handleInputKeyPress}
        />
        <button className="btn btn-success" onClick={fetchData}>
          Search
        </button>
      </div>
      {loading && (
        <div className="row">
          {[...Array(9)].map((_, index) => (
            <div className="col-lg-4 col-md-6 mb-3" key={index}>
              <SkeletonLoader />
            </div>
          ))}
        </div>
      )}
      {!loading && searchResults.length > 0 && (
        <div className="row">
          {searchResults.map((gif: gifImage) => (
            <div className="col-lg-4 col-md-6 mb-3" key={gif.id}>
              <div className="product-item">
                <img
                  src={gif.images.original.url}
                  className="product-image"
                  alt={gif.slug}
                />
                <h3 className="product-name">{gif.title}</h3>
                <p className="product-description">{gif.username}</p>
                <div className="product-actions">
                  <button className="btn btn-primary">Detail</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </Container>
  );
};

export default React.memo(Search);
