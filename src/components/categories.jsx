"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

async function fetchData(payload) {
  try {
    const response = await axios.get(
      `https://dev.tii.cloud.sitefinity.com/api/default/${payload}?$select=*`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data.value;
  } catch (error) {
    return [];
  }
}

const Categories = ({ title, categoriesData }) => {
  const [data, setData] = useState(categoriesData || []);

  useEffect(() => {
    const fetchAPI = async () => {
      if (!categoriesData) {
        const result = await fetchData("categories");
        setData(result);
      }
    };
    fetchAPI();
  }, []);

  return (
    <div>
      <div>{title ? title : "Default Title"}</div>
      {/* <div>{data}</div> */}
    </div>
  );
};

export default Categories;
