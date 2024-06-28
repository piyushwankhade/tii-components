"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

async function fetchData(payload) {
  try {
    const response = await axios.get(
      `https://dev.tii.cloud.sitefinity.com/api/default/${payload}?$select=*&$expand=*`
    );
    return response.data.value;
  } catch (error) {
    return [];
  }
}

const TestimonialCarousel = ({ content }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      const result = await fetchData("carousels");
      setData(result);
    };

    fetchAPI();
  }, []);

  const [activeIndex, setActiveIndex] = useState(0);
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };
  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div>
      <h1>{content ? content : "Default Content"}</h1>
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-touch="false"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          {data.length > 0 &&
            data.map((item, index) => (
              <button
                key={index}
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to={index}
                className={index === activeIndex ? "active" : ""}
                aria-current={index === activeIndex ? "true" : "false"}
                aria-label={`Slide ${index}`}
              />
            ))}
        </div>
        <div className="carousel-inner">
          {data.length > 0 &&
            data.map((item, index) => (
              <div
                key={index}
                className={`carousel-item ${
                  index === activeIndex ? "active" : ""
                }`}
              >
                <div className="carousel-caption d-none d-md-block">
                  <h3>{item.Title}</h3>
                  <br />
                  <div className="stars-outer">
                    <div
                      className="stars-inner"
                      style={{ width: `${item.Rating}%` }}
                    />
                  </div>
                  <p
                    className="desc"
                    dangerouslySetInnerHTML={{ __html: item.Description }}
                  />
                  <p className="name">{item.Name}</p>
                  <p className="date">{item.Date}</p>
                </div>
              </div>
            ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          onClick={handlePrev}
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          onClick={handleNext}
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
