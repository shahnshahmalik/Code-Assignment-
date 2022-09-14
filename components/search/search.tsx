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

  const handleKeyEvents = (e) => {
    const allowedKeys = [38, 40, 13];
    if (allowedKeys.indexOf(e.keyCode) > -1) {
      props.onKeyPressed(e);
    }
  };

  return (
    <div className="search-input">
      <input
        type="text"
        value={searchText}
        placeholder="Search users by Id, Address, Name"
        onChange={handleTextChange}
        onKeyUp={handleKeyEvents}
      />
      {searchText && (
        <span className="suffix-icon" onClick={() => clearSearch()}>
          X
        </span>
      )}
    </div>
  );
}
