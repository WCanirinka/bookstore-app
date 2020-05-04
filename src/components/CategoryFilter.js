import React from 'react';
import PropTypes from 'prop-types';
import categories from '../helper/bookCategory';

const filters = ['All', ...categories];

export default function CategoryFilter({ onChange }) {
  return (
    <div>
      <span>Filter&nbsp;</span>
      <select onChange={onChange}>
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
  onChange: PropTypes.func.isRequired,
};
