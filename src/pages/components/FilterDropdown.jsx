import React from 'react';

const FilterDropdown = ({ value, onChange }) => (
  <select className="filter-dropdown" value={value} onChange={onChange}>
    <option value="">All Types</option>
    <option value="movie">Movie</option>
    <option value="series">Series</option>
    <option value="episode">Episode</option>
  </select>
);

export default FilterDropdown;