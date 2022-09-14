import * as React from 'react';
import '../../style.css';

export default function Search(props) {
  const [searchText, setSearchText] = React.useState('');
  const clearSearch = () => {
    handleTextChange({ target: { value: '' } });
  };
  const handleTextChange = (ev) => {
    props.onTextChange(ev.target.value);
    setSearchText(ev.target.value);
  };

  return (
    <div className="search-input">
      <input
        type="text"
        value={searchText}
        placeholder="Search users by Id, Address, Name"
        onChange={handleTextChange}
      />
      {searchText && (
        <span className="suffix-icon" onClick={() => clearSearch()}>
          X
        </span>
      )}
    </div>
  );
}
