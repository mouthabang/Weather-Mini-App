



export const weatherApi = {


    getCurrentWeather: () => {
      console.log("We are her");
      return new Promise ( (resolve, reject) => {
        const todaysWeatherUrl ="https://api.open-meteo.com/v1/forecast?latitude=-29.3167&longitude=27.4833&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,wind_speed_10m,wind_direction_10m&timezone=Africa%2FJohannesburg";

        my.request({
          url: todaysWeatherUrl,
          method: "GET",
          dataType: 'json',
          success:  (res) => {
            resolve(res.data);
          },
          fail: (error) => {
            reject(error);
          }
        });
      });
    },

    getWeatherForcast: () => {

      const todaysWeatherUrl ="https://api.open-meteo.com/v1/forecast?latitude=-29.3167&longitude=27.4833&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset,wind_speed_10m_max&timezone=Africa%2FJohannesburg&forecast_days=7";

      return new Promise ( (resolve, reject) => {
        my.request({
          url: todaysWeatherUrl,
          method: "GET",
          dataType: 'json',
          success:  (res) => {
            resolve(res.data);
          },
          fail: (error) => {
            reject(error);
          }
        });
      });
    },




}