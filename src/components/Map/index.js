import React, { memo } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
require("dotenv").config();

const GMaps = () => {
  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };
  return (
    <LoadScript googleMapsApiKey="">
      <GoogleMap
        mapContainerStyle={{
          width: "100%",
          height: "300px",
          margin: "0 auto",
        }}
        center={{
          lat: 41.987958,
          lng: -71.255743,
        }}
        zoom={13}
        clickableIcons="false"
      >
        <Marker
          onLoad={onLoad}
          position={{
            lat: 41.987958,
            lng: -71.255743,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default memo(GMaps);
