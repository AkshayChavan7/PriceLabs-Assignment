/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "./Map.css";
import { GoogleMap, useJsApiLoader, LoadScript } from "@react-google-maps/api";
import { Marker } from "@react-google-maps/api";
// import { Polygon } from "@react-google-maps/api";
import { OverlayView } from "@react-google-maps/api";
import { Stack } from "@mui/material";

const Map = (props) => {
  // console.log("hovered listing", props.hoveredListing);
  const containerStyle = {
    width: "100%",
    height: "100vh",
  };

  const center = {
    lat: 48.8566,
    lng: 2.3522,
  };

  const position = {
    lat: 48.8566,
    lng: 2.3522,
  };

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCuR5af4fifSI-5IKiBuGvajDq2oKuIBpM",
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const paths = [
    { lat: 25.774, lng: -80.19 },
    { lat: 18.466, lng: -66.118 },
    { lat: 32.321, lng: -64.757 },
    { lat: 25.774, lng: -80.19 },
  ];

  const options2 = { closeBoxURL: "", enableEventPropagation: true };

  const options = {
    fillColor: "lightblue",
    fillOpacity: 1,
    strokeColor: "red",
    strokeOpacity: 1,
    strokeWeight: 2,
    clickable: false,
    draggable: true,
    editable: true,
    geodesic: false,
    zIndex: 1,
  };

  const handleMarkerClick = (listing) => {
    // console.log("handleMarkerClick called", listing);
    props.setSelectedListingNumber(listing.listingNumber);
  };

  // console.log("propsss", props);
  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={5}
        onLoad={onLoad}
        onUnmount={onUnmount}
      >
        {props?.listings?.map((listing) => {
          let position = {
            lat: listing.geoCode.latitude,
            lng: listing.geoCode.longitude,
          };
          return (
            <>
              <Marker
                position={position}
                title={listing.propertyMetadata.headline}
                // onClick={(e) => handleMarkerClick(listing)}
                onMouseOver={(e) => handleMarkerClick(listing)}
                onMouseOut={(e) => handleMarkerClick({})}
              />
              {props.hoveredListing.listingNumber === listing.listingNumber ? (
                <OverlayView
                  position={{
                    lat: listing.geoCode.latitude,
                    lng: listing.geoCode.longitude,
                  }}
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                >
                  <div className="marker-info-div">
                    <Stack direction={"row"} spacing={1}>
                      <img
                        src={listing.images[0].c6_uri}
                        className="info-div-image"
                      />
                      <div>
                        <p
                          style={{
                            fontSize: 14,
                            fontWeight: 600,
                            color: "#626262",
                            marginBottom: 4,
                          }}
                        >
                          {listing.propertyType}
                        </p>
                        <p style={{ color: "#787878", fontSize: 10 }}>
                          {listing.bedrooms} br • {listing.bathrooms.full} ba •
                          Sleeps {listing.sleeps}
                        </p>
                        <p className="remove-label">Remove</p>
                      </div>
                    </Stack>
                  </div>
                </OverlayView>
              ) : (
                <span />
              )}
            </>
          );
        })}
      </GoogleMap>
    </>
  ) : (
    <>Could not load map!</>
  );
};

export default Map;
