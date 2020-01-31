import React from 'react';

const SearchForm = ({ onSubmit, onChange, search }) => {

  return (
    <div className="search-form">
      <form onSubmit={onSubmit} className="search-form__form">
        <input className="search-form__input" value={search} placeholder="Search by flight number" onChange={onChange} />
      </form>
    </div>
  )
}

export default SearchForm;