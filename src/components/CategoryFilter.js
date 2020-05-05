import React from 'react';
import PropTypes from 'prop-types';
import categories from '../helper/bookCategory';

const filters = ['All', ...categories];

export default function CategoryFilter({ changeFilter }) {
  return (
    <div>
      <span>Category filter&nbsp;</span>
      <select onChange={e => changeFilter(e.target.value)}>
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
