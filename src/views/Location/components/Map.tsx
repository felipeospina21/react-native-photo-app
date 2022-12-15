import { Spinner } from '@shared';
import React from 'react';
import { View } from 'react-native';
import MapView from 'react-native-maps';
import { useLocation } from '../hooks';
import { MapMarkers } from './MapMarkers';

export function Map() {
  const location = useLocation();
  if (!location) return <Spinner />;

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
        <MapMarkers />
      </MapView>
    </View>
  );
}
