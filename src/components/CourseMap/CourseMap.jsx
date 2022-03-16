import React, { useState } from "react";
import { GoogleMap, LoadScript, useGoogleMap } from "@react-google-maps/api";

function MyComponentWithHook(props) {
  const map = useGoogleMap();

  React.useEffect(
    function effect() {
      map.addListener("center_changed", () => {
        const lat = map.center.lat();
        const lng = map.center.lng();

        console.log("lat: ", lat, "lng: ", lng);

        props.setLat(lat);
        props.setLng(lng);
      });
    },
    [map, props]
  );

  return (
    <div>
      Lat {map.center.lat()} Lng {map.center.lng()}
    </div>
  );
}

const MemoizedMyComponentWithHook = React.memo(MyComponentWithHook);

function Maps() {
  // Initial map coordinates that will change
  // when onCenterChanged is called
  const [lat, setLat] = useState(47.5845);
  const [lng, setLng] = useState(-122.3070);

  console.log("Latitude and longitude:", {
    lat,
    lng
  });

  return (
    <div style={{ display: "flex", height: "calc(70vh - 50px)" }}>
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          id="my-map"
          zoom={12}
          mapContainerStyle={{
            flex: 1
          }}
          center={{
            lat,
            lng
          }}
        >
          <MemoizedMyComponentWithHook setLat={setLat} setLng={setLng} />
        </GoogleMap>
      </LoadScript>
    </div>
  );
}

export default Maps;
