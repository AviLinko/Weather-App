import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLocation } from '../services/weatherSlice';
import { Box, Typography, Stack, Divider } from '@mui/material';
import { useGetForecastWeatherQuery } from '../services/weatherApi';
import Moment from 'react-moment';
import useGeoLocation from '../hooks/useGeolocation';
import WeatherChart from '../components/Charts';
import TodaysOverView from '../components/TodaysOverview';
import SearchBar from '../components/searchbar';
import ThreeDaysForecast from '../components/ThreeDaysForecast';
import Loader from '../components/Loader';

const Dashboard = () => {
  const getGeoLocation = useGeoLocation();
  const isLoadingLocation = getGeoLocation.loaded;
  const locationState = useSelector((state) => state.weatherState);
  const { data, isFetching } = useGetForecastWeatherQuery(locationState);
  const dispatch = useDispatch();

  const current = data?.current;
  const forecast = data?.forecast.forecastday;
  const location = data?.location;
  const dateToFormat = location?.localtime;

  useEffect(() => {
      let currentLocation = '';

      if (locationState) {
        currentLocation = locationState;
      } else if (getGeoLocation?.loaded) 
        currentLocation = [getGeoLocation?.coordinates.lat, getGeoLocation?.coordinates.lng];
        
    })

  if(isFetching || !isLoadingLocation) return (
    <div>Loading</div>
  )
  return <div>Dashboard</div>;
};

export default Dashboard;
