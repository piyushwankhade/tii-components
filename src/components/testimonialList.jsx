"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./TestimonialList.css"; // Import CSS file

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

const TestimonialList = ({ moduleData }) => {
  const [data, setData] = useState(moduleData || []);

  useEffect(() => {
    const fetchAPI = async () => {
      if (!moduleData) {
        const result = await fetchData("carousels");
        setData(result);
      }
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

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    const year = date.getFullYear();
    return `${month}/${day}/${year}`;
  };

  return (
    <div>
      <div>
        {data.length > 0 &&
          data.map((item, index) => (
            <div key={index} className="testimonial-card">
              <div className="title">{item.Title}</div>
              <div
                className="desc"
                dangerouslySetInnerHTML={{ __html: item.Description }}
              />
              <div className="name">{item.Name}</div>
              <div className="date">{formatDate(item.Date)}</div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default TestimonialList;
