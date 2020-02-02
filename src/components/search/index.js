import React from 'react';

const SearchForm = ({ onSubmit, onChange, search }) => {
  return (
    <div className="search">
      <form onSubmit={onSubmit} className="search__form">
        <input
          className="search__input"
          value={search}
          placeholder="Search by flight number"
          onChange={onChange} />
        <div className="search__bar" />
      </form>
    </div>
  )
}

export default SearchForm;