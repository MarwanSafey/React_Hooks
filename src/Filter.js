import React from 'react';


const Filter = ({onTitleChange}) => {
  return (
    <div className="filter">
      <label><b>Filter</b> </label>
      <input type="text" placeholder="Enter title" onChange={(e) => onTitleChange(e.target.value)} />
    </div>
  );
};

export default Filter;
