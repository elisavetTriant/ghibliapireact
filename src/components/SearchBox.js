import React from 'react';

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="search">
      <div>
        <input type="search" placeholder="Search Films by Title ... " required onChange={searchChange} />
      </div>
    </div>
  );
}

export default SearchBox;