import { useEffect, useState } from "react";
import Navbar from "./Navbar";
import Sidenav from "./Sidenav";
import { Outlet } from "react-router-dom";

import "./Style.css";
import { api } from "../../Api/requests";

const Main = () => {
  const [nav, setNav] = useState("sidebar");
  const [navPad, setNavPad] = useState("260px");
  const [location, setLocation] = useState({
    geolocation:"",
    fullgeolocation:""
  })
  const handleSidebar = () => {
    setNav(nav === "sidebar" ? "sidebar sidebar-active" : "sidebar");
    setNavPad(navPad === "260px" ? "20px" : "260px");
  };

  useEffect(()=>{
    getGeoLocation();
  },[])

  const getGeoLocation=()=>{
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const res = await api.getGeoLocation(position.coords.latitude, position.coords.longitude);
        console.log(res.data);
        setLocation({fullgeolocation:res.data.display_name, geolocation:res.data.address.suburb})
      });
    } else {
      console.log("Geo Location not supported by browser");
    }
  }
  return (
    <div>
      <div className="wrapper">
        <Sidenav nav={nav} currentLocation={location.geolocation}/>
        <div id="content" style={{ paddingLeft: navPad }}>
          <Navbar toggleSideNav={handleSidebar} />
          <Outlet context={{location}} />
        </div>
      </div>
    </div>
  );
};
export default Main;
