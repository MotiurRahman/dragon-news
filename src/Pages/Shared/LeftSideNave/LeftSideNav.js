import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Category from "../../Category/Category";

const LeftSideNav = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/news-categories")
      .then((res) => res.json())
      .then((data) => setCategories(data));
  });
  return (
    <div>
      <h4>All the categories:{categories.length}</h4>
      <div>
        {categories.map((category) => (
          <p key={category.id}>
            <Link to={`/categories/${category.id}`}> {category.name}</Link>
          </p>
        ))}
      </div>
    </div>
  );
};

export default LeftSideNav;
