import * as React from 'react';
import '../../style.css';

export default function Card({
  userDetail,
  searchTerm,
  matchingKeys,
  currentId,
  cardRef,
}) {
  const handleSearchTextHighlight = (
    searchText: string,
    textToHighlight: string
  ): string => {
    const re = new RegExp(searchText, 'gi');

    const match = textToHighlight?.match(re);

    if (match?.some((foundMatch) => !!foundMatch)) {
      return textToHighlight?.replace(
        re,
        '<mark className="highlight">' + match[0] + '</mark>'
      );
    } else {
      return textToHighlight;
    }
  };

  return (
    <div
      id={userDetail.id}
      className={`card ${currentId === userDetail.id ? 'active' : ''}`}
      key={userDetail.id}
      ref={currentId === userDetail.id ? cardRef : null}
    >
      <b
        dangerouslySetInnerHTML={{
          __html: handleSearchTextHighlight(searchTerm, `${userDetail.id}`),
        }}
      ></b>
      <i
        dangerouslySetInnerHTML={{
          __html: handleSearchTextHighlight(searchTerm, `${userDetail.name}`),
        }}
      ></i>
      {!!matchingKeys?.length && !!searchTerm && (
        <div className="items-found">
          <ul>
            <li>{`"${searchTerm}" found in items`}</li>
          </ul>
        </div>
      )}
      <span
        className="text-nowrap"
        dangerouslySetInnerHTML={{
          __html: handleSearchTextHighlight(
            searchTerm,
            `${userDetail.address}`
          ),
        }}
      ></span>
    </div>
  );
}
