import React, { useState } from "react";
import Profile from "./Profile";
import profileList from "../data/profileData";

const Gallery = () => {
  const [searchValue, setSearchValue] = useState("");

  const searchHandler = (event) => {
    setSearchValue(event.target.value);
  };

  const filteredArray = profileList.filter((people) => {
    return (
      people.profileName.includes(searchValue) ||
      people.profileName.toLowerCase().includes(searchValue)
    );
  });

  const resultItems = filteredArray.length;
  return (
    <>
      <input
        type="search"
        placeholder="type to filter"
        onChange={searchHandler}
      />
      <hr />
      <div className="grid-container">
        {resultItems ? (
          filteredArray.map((people) => {
            return (
              <Profile
                key={people.id}
                name={people.profileName}
                imageURL={people.imageURL}
              />
            );
          })
        ) : (
          <p>no match found</p>
        )}
      </div>
    </>
  );
};

export default Gallery;
