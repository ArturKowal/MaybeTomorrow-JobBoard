import { ChangeEvent, useState } from "react";
import logo from "../components/images/MB_Logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let [key, setKey] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setKey(event.target.value);
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    if (key) {
      navigate("/offers/results/" + encodeURIComponent(key));
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <nav className="navbar bg-light navbarFooterRadious">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="d-flex">
            <a className="navbar-brand" href="/home">
              <img className="navbarLogo" src={logo} alt="Logo" />
            </a>
          </div>
          <div className="paddingLeftRight navbar-light">
            <a className="nav-link active" aria-current="page" href="/home">
              Home
            </a>
          </div>
          <div className="paddingLeftRight navbar-light">
            <a className="nav-link active" aria-current="page" href="/addOffer">
              Add an offer
            </a>
          </div>
          <div className="d-flex">
            <div className="input-group">
              <input
                name="searchInput"
                id="searchInput"
                type="search"
                className="form-control rounded"
                placeholder="Search"
                aria-label="Search"
                aria-describedby="search-addon"
                onKeyDown={handleKeyDown}
                onChange={handleChange}
              />
              <button
                type="button"
                className="btn btn-outline-primary"
                data-mdb-ripple-init
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
