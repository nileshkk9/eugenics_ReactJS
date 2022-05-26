import { Link } from "react-router-dom";

const Sidenav = ({nav, currentLocation}) =>{
  
    return (
        <nav className={nav}>
            <div className="sidebar-header">
              <img src="/logo.png" alt="company logo" />
              <h3>Eugenics</h3>
            </div>
            <ul className="list-unstyled">
              <p>
                <i
                  className="fas fa-user"
                  style={{ paddingRight: "0.2em" }}
                />
                {"NAME"}
              </p>
              <li className={"active"}>
                <Link onClick="" id="home" to="upload">
                  Upload Data
                </Link>
              </li>
              <li className={"active"}>
                <Link onClick="" id="entries" to="reports">
                  Entries
                </Link>
              </li>
              <li className={"active"}>
                <p onClick="" id="download">
                  Download Xls
                </p>
              </li>
              {/* <li className={null}>
                <p onClick={this.handleTab} id="contact">
                  Contact
                </p>
              </li> */}
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
    )
}

export default Sidenav;