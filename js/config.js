var config = {
  lang: 'en',
  time: {
    hourFormat: 'h',
    displaySeconds: true,
    digitFade: false,
  },
  weather: {
    // Change weather params here:
    // Units: metric or imperial
    params: {
      q: 'Severna Park, Maryland',
      units: 'imperial',
      // if you want a different lang for the weather that what is set above, change it here
      lang: 'en',
      // Loaded from config.js
      APPID: typeof openWeatherApiKey != 'undefined' ? openWeatherApiKey : '',
      dateFormat: 'h:mm a'
    }
  },
  compliments: {
    interval: 30000,
    fadeInterval: 4000,
    morning: [
      'Good morning, Theodore!',
      'Good morning handsome!!',
      'Rise and shine!'
    ],
    afternoon: [
      'Theo rocks!',
      'Looking good today bud!'
    ],
    evening: [
      "Wow, you're awesome!",
      'Did I hear a plane?',
      'Where is Mr. Raccoon?'
    ]
  },
  calendar: {
    maximumEntries: 10, // Total Maximum Entries
    displaySymbol: true,
    defaultSymbol: 'calendar', // Fontawsome Symbol see http://fontawesome.io/cheatsheet/
    urls: [
  {
    symbol: 'calendar-plus-o',
    url: 'https://p01-calendarws.icloud.com/ca/subscribe/1/n6x7Farxpt7m9S8bHg1TGArSj7J6kanm_2KEoJPL5YIAk3y70FpRo4GyWwO-6QfHSY5mXtHcRGVxYZUf7U3HPDOTG5x0qYnno1Zr_VuKH2M'
  },
  {
    symbol: 'soccer-ball-o',
    url: 'https://www.google.com/calendar/ical/akvbisn5iha43idv0ktdalnor4%40group.calendar.google.com/public/basic.ics',
  },
  // {
    // symbol: 'mars',
    // url: "https://server/url/to/his.ics",
  // },
  // {
    // symbol: 'venus',
    // url: "https://server/url/to/hers.ics",
  // },
  // {
    // symbol: 'venus-mars',
    // url: "https://server/url/to/theirs.ics",
  // },
  ]
  },
  news: {
    feed: 'http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml'
  },
  version: {
    // Five minutes.
    updateInterval: 300000
  }

}
