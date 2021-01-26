import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

const Nav = ({ isLibraryOpen, setIsLibraryOpen }) => {
  return (
    <nav>
      <h1>ReactMusic</h1>
      <button onClick={() => setIsLibraryOpen(!isLibraryOpen)}>
        Library
        <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
