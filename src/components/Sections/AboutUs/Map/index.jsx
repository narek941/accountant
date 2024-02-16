import React from 'react';
import {
  Marker,
  GoogleMap,
  withScriptjs,
  withGoogleMap,
} from 'react-google-maps';

import { mapStyles } from 'utils/index';

const location = {
  lat: 40.19873974498302, 
  lng: 44.48864377892839,
};

const InjectableGoogleMap = () => (
  <GoogleMap
    defaultZoom={17}
    defaultCenter={location}
    options={{
      styles: mapStyles,
      disableDefaultUI: true,
      fullscreenControl: true,
      zoomControl: true,
    }}
  >
    <Marker
      position={location}
      icon={{
        url: 'images/MapLocation.svg',
        scaledSize: new window.google.maps.Size(48.13, 64),
      }}
    />
  </GoogleMap>
);

const Map = withScriptjs(withGoogleMap(InjectableGoogleMap));

export default Map;
