import React from "react";

function CategoryFilter({
  selectedCategory,
  categories,
  selectedCategoryChange,
}) {
  // const categoryBtns = category.map(eachCategory => (
  //   <button
  //     className={eachCategory === selectedCategory ? "selected" : null}
  //     key={eachCategory}
  //     onClick={() => selectedCategoryChange(eachCategory)}
  //   >
  //     {eachCategory}
  //   </button>
  // ));
const categoryBtns = categories.map((category) => {
   return <button
      className={category === selectedCategory ? "selected" : null}
      key={category}
      onClick={() => selectedCategoryChange(category)}
    >
      {category}
      </button>
})
  return (
    <div className="categories">
      <h5>Category filters</h5>
      
{categoryBtns}
          
        
      
    </div>
  );
}

export default CategoryFilter;
