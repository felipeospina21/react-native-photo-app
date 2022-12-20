import cameraIcon from '@assets/camera_icon.png';
import { photographers } from '@mocks';
import { Spinner } from '@components';
import React from 'react';
import { Image, Text, View } from 'react-native';
import MapView from 'react-native-maps';
import { useLocation } from '../hooks';
import { MapMarkers } from './MapMarkers';

export function Map() {
  const location = useLocation();
  const PHOTOGRAPHERS_COUNT = photographers.length;
  if (!location) return <Spinner />;

  return (
    <View className="flex-1">
      <View className="bg-bg-brown_light py-1 px-2 flex-row items-center">
        <Image source={cameraIcon} accessibilityIgnoresInvertColors className="w-4 mb-1 ml-2" />
        <Text className="font-secondary ml-3">
          <Text className="font-secondary_bold">{PHOTOGRAPHERS_COUNT}</Text> photographers in your
          area
        </Text>
      </View>
      <MapView
        className="w-full h-full"
        initialRegion={{
          latitude: location?.coords.latitude,
          longitude: location?.coords.longitude,
          latitudeDelta: 0.3922,
          longitudeDelta: 0.0421,
        }}
      >
        <MapMarkers data={photographers} />
      </MapView>
    </View>
  );
}
