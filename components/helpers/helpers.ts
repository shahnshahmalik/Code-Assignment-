export interface User {
  id: number;
  name: string;
  items: Array<string>;
  address: string;
}

export interface UserMatch {
  isMatching: boolean;
  matchKey: Array<string>;
}

export const scrollItemIntoView = (elementRef: any) => {
  const rect = elementRef.current?.getBoundingClientRect();
  const isInView =
    rect?.top >= 0 &&
    rect?.left >= 0 &&
    rect?.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect?.right <= (window.innerWidth || document.documentElement.clientWidth);

  if (!isInView) {
    elementRef.current?.scrollIntoView();
  }
};

export const UsersList: Array<User> = [
  {
    id: 1,
    name: 'Shahnshah',
    items: ['iPhone', 'Laptop'],
    address: `J-1, 2nd Floor Right Side, Khirki Extension, phase 4, Malviya Nagar, Kormanthala 110021`,
  },
  {
    id: 2,
    name: 'Test user',
    items: ['Banana', 'Apple'],
    address: `J-1, 2nd Floor Right Side, Khirki Extension, phase 4, Malviya Nagar, Kormanthala 110033`,
  },
  {
    id: 3,
    name: 'Xyz User',
    items: ['Item 1', 'XVFSD'],
    address: `J-1, 2nd Floor Right Side, Khirki Extension, phase 4, Malviya Nagar, Kormanthala 110011`,
  },
  {
    id: 4,
    name: 'Dummy 123',
    items: ['book', 'test'],
    address: `J-1, 2nd Floor Right Side, Khirki Extension, phase 4, Malviya Nagar, Kormanthala 110077`,
  },
  {
    id: 5,
    name: '__dummy',
    items: ['ABCD', 'EFGH'],
    address: `J-1, 2nd Floor Right Side, Khirki Extension, phase 4, Malviya Nagar, Kormanthala 827009`,
  },
];
