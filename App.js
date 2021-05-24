import React from 'react';
import Loading from './Loading';
import * as Location from 'expo-location';

export default class extends React.Component {
  getLocation = async () => {
    try {
      const response = await Location.requestForegroundPermissionsAsync();
      console.log(response);
      const location = await Location.getCurrentPositionAsync();
      console.log(location);
    } catch (error) {}
  };

  componentDidMount() {
    this.getLocation();
  }
  render() {
    return <Loading />;
  }
}
