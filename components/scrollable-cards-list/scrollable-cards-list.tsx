import * as React from 'react';
import Search from '../search/search';
import Card from '../card/card';
import NullState from '../nullstate/nullstate';
import '../../style.css';

export interface User {
  id: number;
  name: string;
  items: Array<string>;
  address: string;
  pinCode: string;
}

export interface UserMatch {
  isMatching: boolean;
  matchKey: Array<string>;
}

export default function ScrollableCardsList() {
  const [searchText, setSearchText] = React.useState('');

  /**
   * Get the list of users filtered by the search text
   */
  const filteredUsers = (searchText) => {
    return UsersList.map((user: User) => {
      return (
        isMatchingUser(user, searchText)?.isMatching && (
          <Card
            searchTerm={searchText}
            userDetail={user}
            matchingKeys={isMatchingUser(user, searchText)?.matchKey}
          />
        )
      );
    });
  };

  /**
   * Setting search text here
   */
  const handleTextChnage = (event) => {
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

  return (
    <div className="search-container-wrapper">
      <Search onTextChange={handleTextChnage} />
      <div className="scrollable-area">
        {filteredUsers(searchText)?.length && filteredUsers(searchText)}
        {!filteredUsers(searchText)?.length && <NullState />}
      </div>
    </div>
  );
}

export const UsersList: Array<User> = [
  {
    id: 1,
    name: 'Shahnshah',
    items: ['iPhone', 'Laptop'],
    address: `J-1, 2nd Floor Right Side, Khirki Extension, phase 4, Malviya Nagar, Kormanthala`,
    pinCode: `112345`,
  },
  {
    id: 2,
    name: 'Test user',
    items: ['Banana', 'Apple'],
    address: `J-1, 2nd Floor Right Side, Khirki Extension, phase 4, Malviya Nagar, Kormanthala`,
    pinCode: `112345`,
  },
  {
    id: 3,
    name: 'Xyz User',
    items: ['Item 1', 'XVFSD'],
    address: `J-1, 2nd Floor Right Side, Khirki Extension, phase 4, Malviya Nagar, Kormanthala`,
    pinCode: `112345`,
  },
  {
    id: 4,
    name: 'Dummy 123',
    items: ['book', 'test'],
    address: `J-1, 2nd Floor Right Side, Khirki Extension, phase 4, Malviya Nagar, Kormanthala`,
    pinCode: `112345`,
  },
  {
    id: 5,
    name: '__dummy',
    items: ['ABCD', 'EFGH'],
    address: `J-1, 2nd Floor Right Side, Khirki Extension, phase 4, Malviya Nagar, Kormanthala`,
    pinCode: `112345`,
  },
];
