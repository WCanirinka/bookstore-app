import React from 'react';
import PropTypes from 'prop-types';
import categories from '../helper/bookCategory';

const filters = ['All', ...categories];

export default function CategoryFilter({ changeFilter }) {
  return (
    <div>
      <span>Filter&nbsp;</span>
      <select onChange={changeFilter}>
        {filters.map(category => (
          <option value={category} key={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
}

CategoryFilter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
};