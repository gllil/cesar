import React, { memo } from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const GMaps = () => {
  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyAweLAvW-Ep-EB-lDQrlpaPRZ5dBIgJeOQ">
      <GoogleMap
        mapContainerStyle={{
          width: "90%",
          height: "200px",
        }}
        center={{
          lat: 41.988066,
          lng: -71.255677,
        }}
        zoom={13}
        clickableIcons="false"
      >
        <Marker
          onLoad={onLoad}
          position={{
            lat: 41.988066,
            lng: -71.255677,
          }}
        />
      </GoogleMap>
    </LoadScript>
  );
};

export default memo(GMaps);
