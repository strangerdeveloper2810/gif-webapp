import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import axios from "axios";
import SkeletonLoader from "../../Components/Loading";
import {
  DOMAIN,
  keyword_trending,
  API_KEY,
  limit,
  offset,
  rating,
  bundle,
} from "../../Utils/setting";
import "./Home.scss";
import { gifImage } from "../../types/Response";

const Home: React.FC = () => {
  const [gifs, setGifs] = useState<gifImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchKeyword, setSearchKeyword] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${DOMAIN}/${keyword_trending}?api_key=${API_KEY}&limit=${limit}&offset=${offset}&rating=${rating}&bundle=${bundle}`
      );
      setGifs(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching trending gifs:", error);
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (!searchKeyword) {
      return;
    }
    navigate(`/search/${searchKeyword}`);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchKeyword(event.target.value);
  };

  const handleInputKeyPress = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  const handleNavigatePage = (slug: string, gif: gifImage) => {
    navigate(`/detail/${slug}`, { state: { gif } });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container>
      <section>
        <div className="search-box">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Find gif"
            value={searchKeyword}
            onChange={handleInputChange}
            onKeyUp={handleInputKeyPress}
          />
          <button className="btn btn-success" onClick={handleSearch}>
            Search
          </button>
        </div>

        <div className="row">
          {loading
            ? [...Array(3)].map((_, index) => (
                <div className="col-lg-4 col-md-6 mb-3" key={index}>
                  <SkeletonLoader />
                </div>
              ))
            : gifs.map((gif: gifImage) => (
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
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          handleNavigatePage(gif.slug, gif);
                        }}
                      >
                        Detail
                      </button>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </section>
    </Container>
  );
};

export default Home;
