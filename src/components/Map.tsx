import React, { VFC, useState } from 'react';
import ReactMapGL, { Marker, Popup } from 'react-map-gl';
import { getCenter } from 'geolib';

type searchType = {
  img?: string;
  location?: string;
  title?: string;
  description?: string;
  star?: number;
  price?: string;
  total?: string;
  long?: number;
  lat?: number;
};
type Props = {
  searchResults: searchType[];
};

export const Map: VFC<Props> = ({ searchResults }) => {
  const coords = searchResults.map((el, i) => ({
    longitude: el.long,
    latitude: el.lat,
  }));

  const center: any = getCenter(coords);

  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  const [selectedLocation, setSelectedLocation] = useState<searchType>({});

  return (
    <ReactMapGL
      mapStyle={process.env.NEXT_PUBLIC_MAPBOX_STYLE}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_KEY}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {searchResults.map((el, i) => (
        <div className="" key={i}>
          <Marker longitude={el.long} latitude={el.lat} offsetLeft={-20} offsetTop={-10}>
            <p
              onClick={() => setSelectedLocation(el)}
              aria-label="push-pin"
              role="img"
              className="cursor-pointer text-2xl animate-bounce"
            >
              📍
            </p>
          </Marker>
          {selectedLocation.long === el.long ? (
            <Popup
              onClose={() => setSelectedLocation({})}
              closeOnClick={true}
              latitude={el.lat}
              longitude={el.long}
            >
              {el.title}
            </Popup>
          ) : (
            false
          )}
        </div>
      ))}
    </ReactMapGL>
  );
};
