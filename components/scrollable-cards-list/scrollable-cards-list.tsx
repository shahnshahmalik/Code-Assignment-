import * as React from 'react';
import Search from '../search/search';
import Card from '../card/card';
import NullState from '../nullstate/nullstate';
import '../../style.css';
import {
  scrollItemIntoView,
  User,
  UserMatch,
  UsersList,
} from '../helpers/helpers';

export default function ScrollableCardsList() {
  const [searchText, setSearchText] = React.useState('');
  const [activeItem, setActiveItem] = React.useState(0);
  const [filteredUsers, setFilteredUsers] = React.useState([]);
  const activeCardRef: React.RefObject<HTMLDivElement> = React.createRef();

  /**
   * Get the list of users filtered by the search text
   */
  const filterUsers = (searchText: string) => {
    const filteredUser = UsersList.filter(
      (user) => isMatchingUser(user, searchText)?.isMatching
    );

    return filteredUser;
  };

  /**
   * Setting search text here
   */
  const handleTextChnage = (event) => {
    setFilteredUsers(filterUsers(event));
    setSearchText(event);
  };

  /**
   * If a matching user exists, if it does return a UserMatch
   * Object containing specific key if match comes from items array
   */
  const isMatchingUser = (user: User, searchText: string): UserMatch => {
    searchText = searchText?.toLowerCase() || '';
    const match: UserMatch = {
      isMatching: false,
      matchKey: [],
    };

    Object.keys(user).forEach((key) => {
      if (typeof user[key] === 'object') {
        if (
          user[key].some((items) => items?.toLowerCase().includes(searchText))
        ) {
          match.isMatching = true;
          match.matchKey.push(key);
        }
      } else if (`${user[key]}`?.toLowerCase()?.includes(searchText)) {
        match.isMatching = true;
      }
    });

    return match;
  };

  const handleKeyEvents = (e) => {
    const nextItemId = activeItem + 1;
    const prevItemId = activeItem - 1;

    if (e.keyCode === 40 && nextItemId <= filteredUsers?.length) {
      setActiveItem(nextItemId);
    }

    if (e.keyCode === 38 && prevItemId >= 0) {
      setActiveItem(prevItemId);
    }
  };

  React.useEffect(() => {
    scrollItemIntoView(activeCardRef);
  });

  return (
    <div className="search-container-wrapper">
      <Search onTextChange={handleTextChnage} onKeyPressed={handleKeyEvents} />
      {!!searchText && (
        <div className="scrollable-area">
          {filteredUsers?.length ? (
            filteredUsers.map((user: User) => {
              return (
                <Card
                  cardRef={activeCardRef}
                  currentId={activeItem}
                  searchTerm={searchText}
                  userDetail={user}
                  matchingKeys={isMatchingUser(user, searchText)?.matchKey}
                />
              );
            })
          ) : (
            <NullState />
          )}
        </div>
      )}
    </div>
  );
}
