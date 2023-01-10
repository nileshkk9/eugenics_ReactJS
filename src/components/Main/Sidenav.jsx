import { Link } from "react-router-dom";
import { LEVEL } from "../../utils/constants";

const Sidenav = ({ nav, currentLocation, toggleSideNav, user }) => {
  console.log(user);
  return (
    <nav className={nav}>
      <div className="sidebar-header">
        <img src="/logo.png" alt="company logo" />
        <h3>Eugenics</h3>
      </div>
      <ul className="list-unstyled">
        <p>
          <i className="fas fa-user" style={{ paddingRight: "0.2em" }} />
          {user.name}
        </p>
        <li className="active">
          <Link id="home" to="upload" onClick={toggleSideNav}>
            Upload Data
          </Link>
        </li>
        <li className={""}>
          <Link id="entries" to="reports" onClick={toggleSideNav}>
            Entries
          </Link>
        </li>
        <li className={""}>
          <Link id="download" to="download" onClick={toggleSideNav}>
            Download Excel
          </Link>
        </li>
        {user.level === LEVEL.ADMIN || user.level === LEVEL.MANAGER ? (
          <li className={""}>
            <Link
              id="regional-report"
              to="regional-report"
              onClick={toggleSideNav}
            >
              Regional Report
            </Link>
          </li>
        ) : null}
      </ul>

      <ul className="list-unstyled CTAs">
        <li>
          <Link to="" className="download">
            <i
              className="fas fa-map-marker-alt fa-lg"
              style={{ paddingRight: "0.2em" }}
            />
            {currentLocation}
          </Link>
        </li>

        <li>
          <a href="https://www.eugenicspharma.in" className="article">
            Back to website
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidenav;
