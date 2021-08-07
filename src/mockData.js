const weather = {
  cod: "200",
  message: 0,
  cnt: 40,
  list: [
    {
      dt: 1628272800,
      main: {
        temp: 293.35,
        feels_like: 292.97,
        temp_min: 290.6,
        temp_max: 293.35,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 949,
        humidity: 59,
        temp_kf: 2.75,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 51,
      },
      wind: {
        speed: 1.65,
        deg: 284,
        gust: 2.29,
      },
      visibility: 10000,
      pop: 0.2,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-06 18:00:00",
    },
    {
      dt: 1628283600,
      main: {
        temp: 291.43,
        feels_like: 291.12,
        temp_min: 287.59,
        temp_max: 291.43,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 950,
        humidity: 69,
        temp_kf: 3.84,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 53,
      },
      wind: {
        speed: 1.1,
        deg: 220,
        gust: 1.15,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-08-06 21:00:00",
    },
    {
      dt: 1628294400,
      main: {
        temp: 289.2,
        feels_like: 288.95,
        temp_min: 287.13,
        temp_max: 289.2,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 950,
        humidity: 80,
        temp_kf: 2.07,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 51,
      },
      wind: {
        speed: 1.24,
        deg: 197,
        gust: 1.26,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-08-07 00:00:00",
    },
    {
      dt: 1628305200,
      main: {
        temp: 286.26,
        feels_like: 286.05,
        temp_min: 286.26,
        temp_max: 286.26,
        pressure: 1010,
        sea_level: 1010,
        grnd_level: 949,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 84,
      },
      wind: {
        speed: 1.65,
        deg: 136,
        gust: 1.63,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-08-07 03:00:00",
    },
    {
      dt: 1628316000,
      main: {
        temp: 288.7,
        feels_like: 288.5,
        temp_min: 288.7,
        temp_max: 288.7,
        pressure: 1009,
        sea_level: 1009,
        grnd_level: 949,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 80,
      },
      wind: {
        speed: 1.98,
        deg: 130,
        gust: 3.65,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-07 06:00:00",
    },
    {
      dt: 1628326800,
      main: {
        temp: 294.24,
        feels_like: 294.08,
        temp_min: 294.24,
        temp_max: 294.24,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 949,
        humidity: 64,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 3.66,
        deg: 107,
        gust: 5.32,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-07 09:00:00",
    },
    {
      dt: 1628337600,
      main: {
        temp: 296.87,
        feels_like: 296.79,
        temp_min: 296.87,
        temp_max: 296.87,
        pressure: 1004,
        sea_level: 1004,
        grnd_level: 946,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 5.19,
        deg: 87,
        gust: 6.42,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-07 12:00:00",
    },
    {
      dt: 1628348400,
      main: {
        temp: 296.75,
        feels_like: 296.86,
        temp_min: 296.75,
        temp_max: 296.75,
        pressure: 1002,
        sea_level: 1002,
        grnd_level: 944,
        humidity: 65,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.43,
        deg: 66,
        gust: 6.58,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-07 15:00:00",
    },
    {
      dt: 1628359200,
      main: {
        temp: 287.75,
        feels_like: 287.69,
        temp_min: 287.75,
        temp_max: 287.75,
        pressure: 1008,
        sea_level: 1008,
        grnd_level: 947,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 8.89,
        deg: 300,
        gust: 14.31,
      },
      visibility: 8464,
      pop: 0.62,
      rain: {
        "3h": 0.93,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-07 18:00:00",
    },
    {
      dt: 1628370000,
      main: {
        temp: 286.43,
        feels_like: 286.32,
        temp_min: 286.43,
        temp_max: 286.43,
        pressure: 1011,
        sea_level: 1011,
        grnd_level: 950,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 3.01,
        deg: 226,
        gust: 10.56,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 8.18,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2021-08-07 21:00:00",
    },
    {
      dt: 1628380800,
      main: {
        temp: 286.63,
        feels_like: 286.54,
        temp_min: 286.63,
        temp_max: 286.63,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 953,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 501,
          main: "Rain",
          description: "moderate rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 4.99,
        deg: 247,
        gust: 11.39,
      },
      visibility: 6328,
      pop: 1,
      rain: {
        "3h": 4.45,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2021-08-08 00:00:00",
    },
    {
      dt: 1628391600,
      main: {
        temp: 285.43,
        feels_like: 285.22,
        temp_min: 285.43,
        temp_max: 285.43,
        pressure: 1014,
        sea_level: 1014,
        grnd_level: 953,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.66,
        deg: 212,
        gust: 7.93,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 2.55,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2021-08-08 03:00:00",
    },
    {
      dt: 1628402400,
      main: {
        temp: 285.88,
        feels_like: 285.69,
        temp_min: 285.88,
        temp_max: 285.88,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 953,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 2.14,
        deg: 183,
        gust: 5.92,
      },
      visibility: 10000,
      pop: 1,
      rain: {
        "3h": 1.58,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-08 06:00:00",
    },
    {
      dt: 1628413200,
      main: {
        temp: 289.87,
        feels_like: 289.53,
        temp_min: 289.87,
        temp_max: 289.87,
        pressure: 1015,
        sea_level: 1015,
        grnd_level: 955,
        humidity: 74,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 3.07,
        deg: 211,
        gust: 4.93,
      },
      visibility: 10000,
      pop: 0.45,
      rain: {
        "3h": 0.34,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-08 09:00:00",
    },
    {
      dt: 1628424000,
      main: {
        temp: 290.61,
        feels_like: 290.24,
        temp_min: 290.61,
        temp_max: 290.61,
        pressure: 1016,
        sea_level: 1016,
        grnd_level: 956,
        humidity: 70,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 99,
      },
      wind: {
        speed: 3.69,
        deg: 235,
        gust: 5.4,
      },
      visibility: 10000,
      pop: 0.58,
      rain: {
        "3h": 0.12,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-08 12:00:00",
    },
    {
      dt: 1628434800,
      main: {
        temp: 288.8,
        feels_like: 288.54,
        temp_min: 288.8,
        temp_max: 288.8,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 957,
        humidity: 81,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 2.74,
        deg: 250,
        gust: 5.84,
      },
      visibility: 10000,
      pop: 0.4,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-08 15:00:00",
    },
    {
      dt: 1628445600,
      main: {
        temp: 287.3,
        feels_like: 287.02,
        temp_min: 287.3,
        temp_max: 287.3,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 958,
        humidity: 86,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 1.89,
        deg: 214,
        gust: 4.01,
      },
      visibility: 10000,
      pop: 0.32,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-08 18:00:00",
    },
    {
      dt: 1628456400,
      main: {
        temp: 287.21,
        feels_like: 286.84,
        temp_min: 287.21,
        temp_max: 287.21,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 959,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.27,
        deg: 221,
        gust: 1.9,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-08-08 21:00:00",
    },
    {
      dt: 1628467200,
      main: {
        temp: 286.23,
        feels_like: 285.81,
        temp_min: 286.23,
        temp_max: 286.23,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 959,
        humidity: 85,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 97,
      },
      wind: {
        speed: 1.26,
        deg: 221,
        gust: 1.29,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-08-09 00:00:00",
    },
    {
      dt: 1628478000,
      main: {
        temp: 285.94,
        feels_like: 285.47,
        temp_min: 285.94,
        temp_max: 285.94,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 959,
        humidity: 84,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04n",
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 0.87,
        deg: 158,
        gust: 0.94,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "n",
      },
      dt_txt: "2021-08-09 03:00:00",
    },
    {
      dt: 1628488800,
      main: {
        temp: 287.31,
        feels_like: 286.87,
        temp_min: 287.31,
        temp_max: 287.31,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 959,
        humidity: 80,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 1.22,
        deg: 118,
        gust: 2.07,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-09 06:00:00",
    },
    {
      dt: 1628499600,
      main: {
        temp: 292.3,
        feels_like: 291.86,
        temp_min: 292.3,
        temp_max: 292.3,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 960,
        humidity: 61,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 90,
      },
      wind: {
        speed: 2.4,
        deg: 90,
        gust: 3.21,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-09 09:00:00",
    },
    {
      dt: 1628510400,
      main: {
        temp: 295.23,
        feels_like: 294.9,
        temp_min: 295.23,
        temp_max: 295.23,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 959,
        humidity: 54,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 80,
      },
      wind: {
        speed: 2.47,
        deg: 75,
        gust: 2.16,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-09 12:00:00",
    },
    {
      dt: 1628521200,
      main: {
        temp: 295.5,
        feels_like: 295.28,
        temp_min: 295.5,
        temp_max: 295.5,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 959,
        humidity: 57,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 93,
      },
      wind: {
        speed: 1.97,
        deg: 67,
        gust: 1.65,
      },
      visibility: 10000,
      pop: 0.02,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-09 15:00:00",
    },
    {
      dt: 1628532000,
      main: {
        temp: 292.01,
        feels_like: 291.99,
        temp_min: 292.01,
        temp_max: 292.01,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 958,
        humidity: 78,
        temp_kf: 0,
      },
      weather: [
        {
          id: 804,
          main: "Clouds",
          description: "overcast clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 92,
      },
      wind: {
        speed: 1.42,
        deg: 65,
        gust: 1.47,
      },
      visibility: 10000,
      pop: 0.03,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-09 18:00:00",
    },
    {
      dt: 1628542800,
      main: {
        temp: 289.97,
        feels_like: 289.87,
        temp_min: 289.97,
        temp_max: 289.97,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 959,
        humidity: 83,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 96,
      },
      wind: {
        speed: 1.61,
        deg: 274,
        gust: 2.05,
      },
      visibility: 10000,
      pop: 0.39,
      rain: {
        "3h": 0.13,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2021-08-09 21:00:00",
    },
    {
      dt: 1628553600,
      main: {
        temp: 287.38,
        feels_like: 287.29,
        temp_min: 287.38,
        temp_max: 287.38,
        pressure: 1023,
        sea_level: 1023,
        grnd_level: 961,
        humidity: 93,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 98,
      },
      wind: {
        speed: 3.41,
        deg: 263,
        gust: 9.72,
      },
      visibility: 10000,
      pop: 0.75,
      rain: {
        "3h": 1.5,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2021-08-10 00:00:00",
    },
    {
      dt: 1628564400,
      main: {
        temp: 285.8,
        feels_like: 285.63,
        temp_min: 285.8,
        temp_max: 285.8,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 959,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 80,
      },
      wind: {
        speed: 0.85,
        deg: 137,
        gust: 1.27,
      },
      visibility: 10000,
      pop: 0.8,
      rain: {
        "3h": 1.35,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2021-08-10 03:00:00",
    },
    {
      dt: 1628575200,
      main: {
        temp: 287.68,
        feels_like: 287.56,
        temp_min: 287.68,
        temp_max: 287.68,
        pressure: 1021,
        sea_level: 1021,
        grnd_level: 959,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 47,
      },
      wind: {
        speed: 1.38,
        deg: 144,
        gust: 2.18,
      },
      visibility: 10000,
      pop: 0.63,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-10 06:00:00",
    },
    {
      dt: 1628586000,
      main: {
        temp: 293.94,
        feels_like: 293.8,
        temp_min: 293.94,
        temp_max: 293.94,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 960,
        humidity: 66,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 57,
      },
      wind: {
        speed: 0.26,
        deg: 235,
        gust: 1.21,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-10 09:00:00",
    },
    {
      dt: 1628596800,
      main: {
        temp: 297.15,
        feels_like: 296.96,
        temp_min: 297.15,
        temp_max: 297.15,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 959,
        humidity: 52,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 41,
      },
      wind: {
        speed: 2.08,
        deg: 303,
        gust: 4.17,
      },
      visibility: 10000,
      pop: 0,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-10 12:00:00",
    },
    {
      dt: 1628607600,
      main: {
        temp: 297.15,
        feels_like: 297.12,
        temp_min: 297.15,
        temp_max: 297.15,
        pressure: 1017,
        sea_level: 1017,
        grnd_level: 958,
        humidity: 58,
        temp_kf: 0,
      },
      weather: [
        {
          id: 802,
          main: "Clouds",
          description: "scattered clouds",
          icon: "03d",
        },
      ],
      clouds: {
        all: 50,
      },
      wind: {
        speed: 1.98,
        deg: 319,
        gust: 2.75,
      },
      visibility: 10000,
      pop: 0.17,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-10 15:00:00",
    },
    {
      dt: 1628618400,
      main: {
        temp: 292.85,
        feels_like: 293.02,
        temp_min: 292.85,
        temp_max: 292.85,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 957,
        humidity: 82,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 55,
      },
      wind: {
        speed: 0.81,
        deg: 303,
        gust: 1.13,
      },
      visibility: 10000,
      pop: 0.21,
      rain: {
        "3h": 0.55,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-10 18:00:00",
    },
    {
      dt: 1628629200,
      main: {
        temp: 289.65,
        feels_like: 289.73,
        temp_min: 289.65,
        temp_max: 289.65,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 958,
        humidity: 91,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10n",
        },
      ],
      clouds: {
        all: 68,
      },
      wind: {
        speed: 0.61,
        deg: 323,
        gust: 1.49,
      },
      visibility: 10000,
      pop: 0.76,
      rain: {
        "3h": 0.74,
      },
      sys: {
        pod: "n",
      },
      dt_txt: "2021-08-10 21:00:00",
    },
    {
      dt: 1628640000,
      main: {
        temp: 288.19,
        feels_like: 288.23,
        temp_min: 288.19,
        temp_max: 288.19,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 958,
        humidity: 95,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 74,
      },
      wind: {
        speed: 0.81,
        deg: 288,
        gust: 0.91,
      },
      visibility: 10000,
      pop: 0.87,
      rain: {
        "3h": 1.13,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-11 00:00:00",
    },
    {
      dt: 1628650800,
      main: {
        temp: 287.74,
        feels_like: 287.76,
        temp_min: 287.74,
        temp_max: 287.74,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 958,
        humidity: 96,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 0.88,
        deg: 233,
        gust: 0.88,
      },
      visibility: 10000,
      pop: 0.61,
      rain: {
        "3h": 1.01,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-11 03:00:00",
    },
    {
      dt: 1628661600,
      main: {
        temp: 289.5,
        feels_like: 289.65,
        temp_min: 289.5,
        temp_max: 289.5,
        pressure: 1020,
        sea_level: 1020,
        grnd_level: 959,
        humidity: 94,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.3,
        deg: 234,
        gust: 2.17,
      },
      visibility: 10000,
      pop: 0.48,
      rain: {
        "3h": 0.11,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-11 06:00:00",
    },
    {
      dt: 1628672400,
      main: {
        temp: 293.93,
        feels_like: 294.05,
        temp_min: 293.93,
        temp_max: 293.93,
        pressure: 1019,
        sea_level: 1019,
        grnd_level: 959,
        humidity: 76,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 100,
      },
      wind: {
        speed: 1.48,
        deg: 265,
        gust: 2.57,
      },
      visibility: 10000,
      pop: 0.39,
      rain: {
        "3h": 0.29,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-11 09:00:00",
    },
    {
      dt: 1628683200,
      main: {
        temp: 297.28,
        feels_like: 297.29,
        temp_min: 297.28,
        temp_max: 297.28,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 959,
        humidity: 59,
        temp_kf: 0,
      },
      weather: [
        {
          id: 803,
          main: "Clouds",
          description: "broken clouds",
          icon: "04d",
        },
      ],
      clouds: {
        all: 68,
      },
      wind: {
        speed: 2.8,
        deg: 300,
        gust: 4.18,
      },
      visibility: 10000,
      pop: 0.34,
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-11 12:00:00",
    },
    {
      dt: 1628694000,
      main: {
        temp: 296.14,
        feels_like: 296.4,
        temp_min: 296.14,
        temp_max: 296.14,
        pressure: 1018,
        sea_level: 1018,
        grnd_level: 959,
        humidity: 73,
        temp_kf: 0,
      },
      weather: [
        {
          id: 500,
          main: "Rain",
          description: "light rain",
          icon: "10d",
        },
      ],
      clouds: {
        all: 50,
      },
      wind: {
        speed: 2.54,
        deg: 319,
        gust: 3.64,
      },
      visibility: 10000,
      pop: 0.99,
      rain: {
        "3h": 0.88,
      },
      sys: {
        pod: "d",
      },
      dt_txt: "2021-08-11 15:00:00",
    },
  ],
  city: {
    id: 2867714,
    name: "Munich",
    coord: {
      lat: 48.1374,
      lon: 11.5755,
    },
    country: "DE",
    population: 1260391,
    timezone: 7200,
    sunrise: 1628222163,
    sunset: 1628275387,
  },
};

export default weather;
