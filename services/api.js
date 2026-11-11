const BASE_URL_UAT = 'http://10.20.0.171:9294/insight/miniapps/';
const CURRENT_ENV = "UAT";

export const weatherApi = {

  getCurrentWeather: () => {
    console.log("We are her");
    return new Promise((resolve, reject) => {
      const todaysWeatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=-29.3167&longitude=27.4833&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,weather_code,wind_speed_10m,wind_direction_10m&timezone=Africa%2FJohannesburg";

      my.request({
        url: todaysWeatherUrl,
        method: "GET",
        dataType: 'json',
        success: (res) => {
          resolve(res.data);
        },
        fail: (error) => {
          reject(error);
        }
      });
    });
  },

  getWeatherForcast: () => {

    const todaysWeatherUrl = "https://api.open-meteo.com/v1/forecast?latitude=-29.3167&longitude=27.4833&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,sunrise,sunset,wind_speed_10m_max&timezone=Africa%2FJohannesburg&forecast_days=7";

    return new Promise((resolve, reject) => {
      my.request({
        url: todaysWeatherUrl,
        method: "GET",
        dataType: 'json',
        success: (res) => {
          resolve(res.data);
        },
        fail: (error) => {
          reject(error);
        }
      });
    });
  },


  getCustomerInfo: (inputValue) => {
    console.log({
      action: 'G',
      eventId: "10596",
      msisdn: "26659389854",
      miniAppTxId: "3483010251992326",
      thirdPartyRef: inputValue
    });
    if (CURRENT_ENV == "UAT") {
      return new Promise((resolve, reject) => {
        my.request({
          url: BASE_URL_UAT + 'G',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            "Authorization": "ApiKey on6my5pbj28fqadcpyz9kolunbtdturv"
          },
          data: {
            "eventId": "10662",
            "action": "GB",
            "msisdn": "26659389854"

          },
          dataType: 'json',
          success: (result) => {
            console.log(result);
            resolve(result.data);
          },
          fail: (error) => {
            reject(error);
          }
        });
      });

    } else {
      return new Promise((resolve, reject) => {
        my.call("makeRequest", {
          "payload": JSON.stringify({
            "msisdn": "msisdn",
            "proxiedRequest": {
              "needsIdentity": true,
              "needsPIN": true,
              "requestInfo": {
                "httpMethod": "POST",
                "payload": JSON.stringify({
                  "action": "G",
                  "eventId": ENVENT_ID,
                  "msisdn": "msisdn",
                  "miniAppTxId": MINI_APP_ID,
                  "thirdPartyRef": inputValue
                }),
                "headers": {
                  "Content-Type": "application/json",
                  "Authorization": "ApiKey on6my5pbj28fqadcpyz9kolunbtdturv"
                }
              }
            }
          }),
          "replaceParams": [
            "msisdn"
          ],
          "url": BASE_URL_PROD,
          success: (result) => {
            console.log(result);
            resolve(JSON.parse(result.proxiedResponse.data.content));
          },
          fail: (error) => {
            console.log(error);
            reject(error);
          }
        });

      });
    }
  },

}