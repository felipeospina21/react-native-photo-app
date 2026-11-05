# react-native-photo-app

A React Native (Expo) photo app built as a practice project. It lets you browse photos from Unsplash, take your own pictures with the device camera, see a map of your location, and view a profile with your captured photos.

## Features

- **Photo feed and topics**: search and browse photos and topics from the [Unsplash API](https://unsplash.com/developers)
- **Camera**: take pictures with `expo-camera` and store them in app state
- **Location**: map view with markers (`react-native-maps` and `expo-location`)
- **Profile**: header and photo grid for the user
- **Tests**: unit and component tests with Jest, plus API mocking with MSW

## Tech stack

- [Expo](https://expo.dev/) 47 / React Native 0.70 / TypeScript
- React Navigation (native stack)
- React Query for data fetching, with Axios
- Zustand for state management
- NativeWind (Tailwind CSS) for styling
- Jest and `jest-expo` for tests

## Getting started

Requires Node 18 (see `.nvmrc`) and Yarn.

```bash
yarn install
```

Create a `.env` file in the project root with your Unsplash access key:

```
API_ACCESS_KEY=your_unsplash_access_key
```

Then start the app:

```bash
yarn start      # Expo dev server
yarn ios        # iOS simulator
yarn android    # Android emulator
yarn web        # Web
yarn test       # Run tests
```

## Project structure

```
src/
├── api/          # React Query hooks for Unsplash (photos, topics, collections)
├── components/   # Shared UI (buttons, loaders)
├── layouts/      # Page layouts (header, nav bar)
├── views/        # Screens: Home, Main, Location, Profile, Camera
├── zustand/      # Global store
├── mocks/        # Mock data
└── test-utils/   # Custom render and MSW handlers
```

> This was a learning project and is not actively maintained.
