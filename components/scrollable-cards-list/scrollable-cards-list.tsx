import * as React from 'react';
import Search from '../search/search';
import '../../style.css';

export default function ScrollableCardsList() {
  return (
    <div className="search-container-wrapper">
      <Search />
      <div className="scrollable-area">
        <div className="card"></div>
        <div className="card"></div>
        <div className="card"></div>
      </div>
    </div>
  );
}
