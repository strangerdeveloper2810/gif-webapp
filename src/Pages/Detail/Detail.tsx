import React from "react";
import { useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { history } from "../../Utils/setting";
import "./Detail.scss";
const Detail: React.FC = () => {
  const location = useLocation();
  const { state } = location;
  const { gif } = state;
  const handleGoBack = () => {
    history.push("/");
  };
  return (
    <Container>
      <div>
        <div className="intro-section">
          <h1>Gif details</h1>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div
              id="carouselExample"
              className="carousel slide"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="square-image">
                    <img
                      src={gif.images.original.url}
                      className="product-image"
                      alt={gif.title}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-details">
              <h1>Title: {gif.title}</h1>
              <p>Author: {gif.username}</p>
              <p>Rating: {gif.rating} </p>
              <button className="btn btn-primary" onClick={handleGoBack}>
                Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Detail;
