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
      'Good morning!',
      'Rise and shine!',
      'Did you sleep well?'
    ],
    afternoon: [
      'Theo rocks!',
      'Looking good today!'
    ],
    evening: [
      "Wow, you're awesome!",
    ]
  },
  calendar: {
    maximumEntries: 10, // Total Maximum Entries
    displaySymbol: true,
    defaultSymbol: 'calendar', // Fontawsome Symbol see http://fontawesome.io/cheatsheet/
    urls: [
  {
    symbol: 'calendar-plus-o',
    url: 'https://calendar.google.com/calendar/ical/en.usa%23holiday%40group.v.calendar.google.com/public/basic.ics',
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
