import {weatherApi } from "../../services/api";
const app = getApp();

Page({
  data: {
    firstname: '',
    temperature: "",
    forecast: []
  },
 
 async onLoad(options) {

    this.setData({
      firstname: options.firstname
    });

    const response = await weatherApi.getCurrentWeather();

    this.setData({
      temperature: response.current.apparent_temperature
    });

    const weatherRes = await weatherApi.getWeatherForcast();
  
    console.log(weatherRes);

    this.setData({
      forecast: weatherRes.daily.temperature_2m_max
    });
 
    console.log(this.data.forecast);
  },
});
