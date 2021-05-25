import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

const weatherOptions = {
  Dust: {
    iconName: 'smog',
    gradient: ['#decba4', '#3e5151'],
    title: '미세먼지가 심합니다.',
    subTitle: '외출을 삼가해주세요!',
  },
  Haze: {
    iconName: 'weather-fog',
    gradient: ['#4da0b0', '#d39d3b'],
    title: '안개를 조심하세요!!',
    subTitle: '안개가 있으니 운전등 조심하세요',
  },
  Mist: {
    iconName: 'weather-fog',
    gradient: ['#4da0b0', '#d39d3b'],
    title: '안개를 조심하세요!!',
    subTitle: '안개가 있으니 운전등 조심하세요',
  },
  Clouds: {
    iconName: 'weather-cloudy',
    gradient: ['#bdc3c7', '#2c3e50'],
    title: '구름이 있어요 🌂',
    subTitle: '날씨가 흐립니다. 비가 올지도 몰라요',
  },
  Snow: {
    iconName: 'snowman',
    gradient: ['#4da0b0', '#d39d3b'],
    title: '눈이 내려요~!',
    subTitle: '우산을 챙겨주세요☃️',
  },
  Drizzle: {
    iconName: 'weather-hail',
    gradient: ['#89F7FE', '#66A6FF'],
    title: '눈이 내려요~!',
    subTitle: '우산을 챙겨주세요☃️',
  },
  Rain: {
    iconName: 'weather-rainy',
    gradient: ['#00C6FB', '#005BEA'],
    title: '비가 옵니다.',
    subTitle: '우산을 챙겨주세요☔️',
  },
  Thunderstorm: {
    iconName: 'weather-lightning',
    gradient: ['#373B44', '#4286f4'],
    title: '천둥⚡⚡️',
    subTitle: '폭풍이 예상됩니다. 조심하세요!',
  },
  Clear: {
    iconName: 'weather-sunny',
    gradient: ['#9CECFB', '#65C7F7', '#0052D4'],
    title: `맑은 하늘☀️`,
    subTitle: '우산을 챙겨주세요☃️',
  },
};

export default function Weather({ temp, condition, description }) {
  return (
    <LinearGradient
      colors={weatherOptions['Clouds'].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={106}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subTitle}>
          {weatherOptions[condition].subTitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    'Thunderstorm',
    'Drizzle',
    'Rain',
    'Snow',
    'Atmosphere',
    'Clear',
    'Clouds',
    'Haze',
    'Mist',
    'Dust',
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  temp: {
    fontSize: 40,
    color: 'white',
  },
  description: {
    fontSize: 18,
    paddingTop: 10,
    color: 'white',
  },
  halfContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: 'white',
    fontSize: 44,
    fontWeight: '300',
    marginBottom: 10,
  },
  subTitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 20,
  },
  textContainer: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    flex: 1,
  },
});
