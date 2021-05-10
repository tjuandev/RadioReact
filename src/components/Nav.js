import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ isLibraryOpen, setIsLibraryOpen }) => {
  return (
    <nav>
      <h1>Radio React</h1>
      <button onClick={() => setIsLibraryOpen(!isLibraryOpen)}>
        Músicas <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
