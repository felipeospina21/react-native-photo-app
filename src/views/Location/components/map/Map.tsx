import { View, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { CustomMarker } from './CustomMarker';
import React, { useEffect, useState } from 'react';
import * as Location from 'expo-location';

export function Map() {
  // TODO: Add user img, isPro, title, description to coordinates to pass it to Marker
  const coordinates = [
    { latitude: 37.46983956800143, longitude: -122.140482410822 },
    { latitude: 37.459211849710826, longitude: -122.10752342621889 },
    { latitude: 37.416685871717355, longitude: -122.15833519414868 },
    { latitude: 37.38341153910444, longitude: -122.04400871622107 },
    { latitude: 37.529217959820656, longitude: -122.0268425790414 },
  ];

  const [location, setLocation] = useState<Location.LocationObject>();
  const [errorMsg, setErrorMsg] = useState<string>('');
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
        return;
      }

      const location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  if (!location)
    return (
      <View>
        <Text>loading</Text>
      </View>
    );
  return (
    <View className="flex-1">
      <MapView
        className="w-full h-full"
        initialRegion={{
          latitude: location?.coords.latitude,
          longitude: location?.coords.longitude,
          latitudeDelta: 0.3922,
          longitudeDelta: 0.0421,
        }}
      >
        {coordinates.map((place, idx) => (
          <Marker key={idx} coordinate={{ ...place }} title="title" description="description">
            <CustomMarker />
          </Marker>
        ))}
      </MapView>
    </View>
  );
}
