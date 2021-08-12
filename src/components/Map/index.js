import React, { memo } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
require("dotenv").config();

const GMaps = ({ otis, harbor }) => {
  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };
  return (
    <LoadScript googleMapsApiKey={process.env.REACT_APP_MAPS_API_KEY}>
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "300px",
          margin: "0 auto",
        }}
        center={
          otis
            ? {
                lat: 41.987958,
                lng: -71.255743,
              }
            : {
                lat: 41.616905,
                lng: -70.916221,
              }
        }
        zoom={13}
        clickableIcons={false}
      >
        <Marker
          onLoad={onLoad}
          position={
            otis
              ? {
                  lat: 41.987958,
                  lng: -71.255743,
                }
              : {
                  lat: 41.616905,
                  lng: -70.916221,
                }
          }
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default memo(GMaps);
