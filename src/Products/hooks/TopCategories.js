import React, { useEffect, useState } from "react";
import { GetTopCategories } from "../utils";
import './categories_index.css'

const TopCategories = () => {
  const [topCategories, setTopCategories] = useState([]);
  const [error, setError] = useState("");
  

  useEffect(() => {
    const fetchTopCategories = async () => {
      try {
        const result = await GetTopCategories();
        setTopCategories(result);
      } catch (error) {
        setError(`Error: ${error.message}`);
      }
    };
    fetchTopCategories();
  }, []);

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="top-categories">
      <h2>Top Categories</h2>
      <div className="category-grid">
        {topCategories.map((category) => (
          <div key={category.id} className="category-item">
            <img src={category.image} alt={category.title} />
            <h3>{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;