import React from "react";

function CategoryFilter({ categories, selectedCategory, onSelectCategory }) {
  const categoryButtons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;



    return (
      <button
        key={category}
        className={className}
        onClick={() => onSelectCategory(category)}
      >
        {category}
      </button>
    );
  });

  //map that returns category with ternary statement on displaying the category IF selected
  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;