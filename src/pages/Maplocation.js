import React from "react";
import "../cssComponents/maplocation.css";

const MapLocation =
  "https://www.google.com/maps/embed/v1/place?q=place_id:ChIJYeZuBI9YwokRjMDs_IEyCwo&key=AIzaSyDB_8txX4_IAL6jIjh9GS-uH837xg9Vr6Y";

const Maplocation = () => {
  return (
    <div className="mapWrapper">
      <iframe
        className="mpStyle"
        width="1000"
        height="450"
        loading="lazy"
        src={MapLocation}
        title="Maplocation"
      >
        Hello
      </iframe>
    </div>
  );
};

export default Maplocation;
