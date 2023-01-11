import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import { Outlet } from "react-router-dom";
import { isMobile } from "react-device-detect";
import { api } from "../../Api/requests";
import {
  SIDEBAR,
  SIDEBAR_ACTIVE,
  SIDEBAR_PADDING,
} from "../../utils/constants";
import "./Style.css";

const Main = () => {
  const [nav, setNav] = useState(SIDEBAR);
  const [navPad, setNavPad] = useState(SIDEBAR_PADDING);
  const [user, setUser] = useState({});
  const [location, setLocation] = useState({
    geolocation: "",
    fullgeolocation: "",
  });
  const handleSidebar = () => {
    setNav(nav === SIDEBAR ? `${SIDEBAR} ${SIDEBAR_ACTIVE}` : SIDEBAR);
    setNavPad(navPad === SIDEBAR_PADDING ? "20px" : SIDEBAR_PADDING);
  };

  useEffect(() => {
    getGeoLocation();
    getUser();
  }, []);

  const getGeoLocation = () => {
    if (navigator.geolocation) {
      return navigator.geolocation.watchPosition(
        async (position) => {
          const res = await api.getGeoLocation(
            position.coords.latitude,
            position.coords.longitude
          );
          setLocation({
            fullgeolocation: res.data.display_name,
            geolocation: res.data.address.suburb || res.data.address.county,
          });
        },
        (error) => {},
        {
          enableHighAccuracy: true,
        }
      );
    } else {
      console.log("Geo Location not supported by browser");
    }
  };

  const getUser = async () => {
    const userRes = await api.getUser();
    if (userRes.status === 200) {
      setUser(userRes.data.user);
    } else {
      console.log("error", userRes);
    }
  };

  return (
    <div>
      <div className="wrapper">
        <Sidenav
          nav={nav}
          currentLocation={location.geolocation}
          toggleSideNav={handleSidebar}
          user={user}
        />
        <div id="content" style={{ paddingLeft: navPad }}>
          <Navbar toggleSideNav={handleSidebar} nav={nav} />
          {isMobile && nav === SIDEBAR ? null : (
            <Outlet context={{ location }} />
          )}
        </div>
      </div>
    </div>
  );
};
export default Main;
