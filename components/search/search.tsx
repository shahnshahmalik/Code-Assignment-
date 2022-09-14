import * as React from 'react';
import '../../style.css';

export default function Search() {
  return (
    <div className="search-input">
      <input type="text" placeholder="Search users by Id, Address, Name" />
      <span className="suffix-icon">X</span>
    </div>
  );
}
