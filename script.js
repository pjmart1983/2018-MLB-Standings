let nlEast = [
  {
    team: "Atlanta Braves",
    wins: 33,
    losses: 23
  },
  {
    team: "Philadelphia Phillies",
    wins: 31,
    losses: 23
  },
  {
    team: "New York Mets",
    wins: 27,
    losses: 27
  },
  {
    team: "Washington Nationals",
    wins: 32,
    losses: 23
  },
  {
    team: "Miami Marlins",
    wins: 20,
    losses: 36
  }
];

let nlCentral = [
  {
    team: "Milwaukee Brewers",
    wins: 36,
    losses: 21
  },
  {
    team: "St. Louis Cardinals",
    wins: 30,
    losses: 24
  },
  {
    team: "Pittsburgh Pirates",
    wins: 29,
    losses: 27
  },
  {
    team: "Chicago Cubs",
    wins: 30,
    losses: 23
  },
  {
    team: "Cincinnati Reds",
    wins: 20,
    losses: 37
  }
];

let nlWest = [
  {
    team: "Colorado Rockies",
    wins: 30,
    losses: 26
  },
  {
    team: "Arizona Diamondbacks",
    wins: 28,
    losses: 27
  },
  {
    team: "San Francisco Giants",
    wins: 26,
    losses: 30
  },
  {
    team: "Los Angeles Dodgers",
    wins: 26,
    losses: 30
  },
  {
    team: "San Diego Padres",
    wins: 25,
    losses: 33
  }
];

let alEast = [
  {
    team: "Boston Red Sox",
    wins: 39,
    losses: 18
  },
  {
    team: "New York Yankees",
    wins: 35,
    losses: 17
  },
  {
    team: "Toronto Blue Jays",
    wins: 25,
    losses: 31
  },
  {
    team: "Tampa Bay Rays",
    wins: 28,
    losses: 27
  },
  {
    team: "Baltimore Orioles",
    wins: 17,
    losses: 39
  }
];

let alCentral = [
  {
    team: "Cleveland Indians",
    wins: 30,
    losses: 25
  },
  {
    team: "Minnesota Twins",
    wins: 22,
    losses: 30
  },
  {
    team: "Detroit Tigers",
    wins: 26,
    losses: 30
  },
  {
    team: "Kansas City Royals",
    wins: 20,
    losses: 36
  },
  {
    team: "Chicago White Sox",
    wins: 16,
    losses: 37
  }
];

let alWest = [
  {
    team: "Houston Astros",
    wins: 36,
    losses: 22
  },
  {
    team: "Seattle Mariners",
    wins: 34,
    losses: 22
  },
  {
    team: "Los Angeles Angels",
    wins: 30,
    losses: 27
  },
  {
    team: "Oakland Athletics",
    wins: 29,
    losses: 28
  },
  {
    team: "Texas Rangers",
    wins: 24,
    losses: 35
  }
];

let scores = [
  {
    away: "Washington Nationals",
    home: "Atlanta Braves",
    aruns: 0,
    hruns: 4,
    inning: "Final"
  },
  {
    away: "Philadelphia Phillies",
    home: "San Francisco Giants",
    aruns: 0,
    hruns: 4,
    inning: "Final"
  },
  {
    away: "Miami Marlins",
    home: "Arizona Diamondbacks",
    aruns: 1,
    hruns: 9,
    inning: "Final"
  },
  {
    away: "Chicago Cubs",
    home: "New York Mets",
    aruns: 7,
    hruns: 4,
    inning: "Final"
  },
  {
    away: "New York Yankees",
    home: "Baltimore Orioles",
    aruns: 4,
    hruns: 1,
    inning: "Final"
  },
  {
    away: "Toronto Blue Jays",
    home: "Detroit Tigers",
    aruns: 2,
    hruns: 5,
    inning: "Final"
  },
  {
    away: "Cleveland Indians",
    home: "Minnesota Twins",
    aruns: 4,
    hruns: 7,
    inning: "Final"
  },
  {
    away: "Boston Red Sox",
    home: "Houston Astros",
    aruns: 3,
    hruns: 7,
    inning: "Final"
  },
  {
    away: "Milwaukee Brewers",
    home: "Chicago White Sox",
    aruns: 3,
    hruns: 8,
    inning: "Final"
  },
  {
    away: "Oakland Athletics",
    home: "Kansas City Royals",
    aruns: 16,
    hruns: 0,
    inning: "Final"
  },
  {
    away: "Pittsburgh Pirates",
    home: "St. Louis Cardinals",
    aruns: 4,
    hruns: 0,
    inning: "Final"
  },
  {
    away: "Los Angeles Dodgers",
    home: "Colorado Rockies",
    aruns: 11,
    hruns: 8,
    inning: "Final"
  },
  {
    away: "Texas Rangers",
    home: "Los Angeles Angels",
    aruns: 0,
    hruns: 6,
    inning: "Final"
  },
  {
    away: "Cincinnati Reds",
    home: "San Diego Padres",
    aruns: 7,
    hruns: 2,
    inning: "Final"
  },
  {
    away: "Tampa Bay Rays",
    home: "Seattle Mariners",
    aruns: 3,
    hruns: 4,
    inning: "Final"
  }
]; //6-1-18

scores.push(
  //6-2-18
  {
    away: "Milwaukee Brewers",
    home: "Chicago White Sox",
    aruns: 5,
    hruns: 0,
    inning: "Final"
  },
  {
    away: "Pittsburgh Pirates",
    home: "St. Louis Cardinals",
    aruns: 2,
    hruns: 3,
    inning: "Final"
  },
  {
    away: "Oakland Athletics",
    home: "Kansas City Royals",
    aruns: 4,
    hruns: 5,
    inning: "Final"
  },
  {
    away: "New York Yankees",
    home: "Baltimore Orioles",
    aruns: 8,
    hruns: 5,
    inning: "Final"
  },
  {
    away: "Cleveland Indians",
    home: "Minnesota Twins",
    aruns: 1,
    hruns: 7,
    inning: "Final"
  },
  {
    away: "Toronto Blue Jays",
    home: "Detroit Tigers",
    aruns: 4,
    hruns: 7,
    inning: "Final"
  },
  {
    away: "Washington Nationals",
    home: "Atlanta Braves",
    aruns: 5,
    hruns: 3,
    inning: "Final"
  },
  {
    away: "Chicago Cubs",
    home: "New York Mets",
    aruns: 7,
    hruns: 1,
    inning: "Final"
  },
  {
    away: "Boston Red Sox",
    home: "Houston Astros",
    aruns: 5,
    hruns: 4,
    inning: "Final"
  },
  {
    away: "Los Angeles Dodgers",
    home: "Colorado Rockies",
    aruns: 12,
    hruns: 4,
    inning: "Final"
  },
  {
    away: "Cincinnati Reds",
    home: "San Diego Padres",
    aruns: 2,
    hruns: 8,
    inning: "Final"
  },
  {
    away: "Texas Rangers",
    home: "Los Angeles Angels",
    aruns: 3,
    hruns: 2,
    inning: "Final"
  },
  {
    away: "Philadelphia Phillies",
    home: "San Francisco Giants",
    aruns: 0,
    hruns: 2,
    inning: "Final"
  },
  {
    away: "Tampa Bay Rays",
    home: "Seattle Mariners",
    aruns: 1,
    hruns: 3,
    inning: "Final"
  },
  {
    away: "Miami Marlins",
    home: "Arizona Diamondbacks",
    aruns: 2,
    hruns: 6,
    inning: "Final"
  },
  //6-3-18
  {
    away: "Milwaukee Brewers",
    home: "Chicago White Sox",
    aruns: 1,
    hruns: 6,
    inning: "Final"
  },
  {
    away: "Pittsburgh Pirates",
    home: "St. Louis Cardinals",
    aruns: 0,
    hruns: 5,
    inning: "Final"
  },
  {
    away: "Oakland Athletics",
    home: "Kansas City Royals",
    aruns: 5,
    hruns: 1,
    inning: "Final"
  },
  {
    away: "New York Yankees",
    home: "Baltimore Orioles",
    aruns: 0,
    hruns: 0,
    inning: "PPD"
  },
  {
    away: "Cleveland Indians",
    home: "Minnesota Twins",
    aruns: 5,
    hruns: 7,
    inning: "Final"
  },
  {
    away: "Toronto Blue Jays",
    home: "Detroit Tigers",
    aruns: 8,
    hruns: 4,
    inning: "Final"
  },
  {
    away: "Washington Nationals",
    home: "Atlanta Braves",
    aruns: 2,
    hruns: 4,
    inning: "Final"
  },
  {
    away: "Chicago Cubs",
    home: "New York Mets",
    aruns: 2,
    hruns: 0,
    inning: "Final"
  },
  {
    away: "Boston Red Sox",
    home: "Houston Astros",
    aruns: 9,
    hruns: 3,
    inning: "Final"
  },
  {
    away: "Los Angeles Dodgers",
    home: "Colorado Rockies",
    aruns: 10,
    hruns: 7,
    inning: "Final"
  },
  {
    away: "Cincinnati Reds",
    home: "San Diego Padres",
    aruns: 3,
    hruns: 6,
    inning: "Final"
  },
  {
    away: "Texas Rangers",
    home: "Los Angeles Angels",
    aruns: 1,
    hruns: 3,
    inning: "Final"
  },
  {
    away: "Philadelphia Phillies",
    home: "San Francisco Giants",
    aruns: 1,
    hruns: 6,
    inning: "Final"
  },
  {
    away: "Tampa Bay Rays",
    home: "Seattle Mariners",
    aruns: 1,
    hruns: 2,
    inning: "Final"
  },
  {
    away: "Miami Marlins",
    home: "Arizona Diamondbacks",
    aruns: 1,
    hruns: 6,
    inning: "Final"
  },
  //6-4-18
  {
    away: "New York Yankees",
    home: "Detroit Tigers",
    aruns: 7,
    hruns: 4,
    inning: "Final"
  },
  {
    away: "New York Yankees",
    home: "Detroit Tigers",
    aruns: 2,
    hruns: 4,
    inning: "Final"
  },
  {
    away: "Kansas City Royals",
    home: "Los Angeles Angels",
    aruns: 6,
    hruns: 9,
    inning: "Final"
  },
  {
    away: "Atlanta Braves",
    home: "San Diego Padres",
    aruns: 4,
    hruns: 11,
    inning: "Final"
  },
  {
    away: "Arizona Diamondbacks",
    home: "San Francisco Giants",
    aruns: 3,
    hruns: 10,
    inning: "Final"
  },
  //6-5-18
  {
    away: "Chicago White Sox",
    home: "Minnesota Twins",
    aruns: 2,
    hruns: 4,
    inning: "Final"
  },
  {
    away: "Los Angeles Dodgers",
    home: "Pittsburgh Pirates",
    aruns: 5,
    hruns: 0,
    inning: "Final"
  },
  {
    away: "Tampa Bay Rays",
    home: "Washington Nationals",
    aruns: 2,
    hruns: 4,
    inning: "Final"
  },
  {
    away: "New York Yankees",
    home: "Toronto Blue Jays",
    aruns: 7,
    hruns: 2,
    inning: "Final"
  },
  {
    away: "Colorado Rockies",
    home: "Cincinnati Reds",
    aruns: 9,
    hruns: 6,
    inning: "Final"
  },
  {
    away: "Detroit Tigers",
    home: "Boston Red Sox",
    aruns: 0,
    hruns: 6,
    inning: "Final"
  },
  {
    away: "Milwaukee Brewers",
    home: "Cleveland Indians",
    aruns: 2,
    hruns: 3,
    inning: "Final"
  },
  {
    away: "Baltimore Orioles",
    home: "New York Mets",
    aruns: 2,
    hruns: 1,
    inning: "Final"
  },
  {
    away: "Chicago White Sox",
    home: "Minnesota Twins",
    aruns: 6,
    hruns: 3,
    inning: "Final"
  },
  {
    away: "Oakland Athletics",
    home: "Texas Rangers",
    aruns: 4,
    hruns: 7,
    inning: "Final"
  },
  {
    away: "Philadelphia Phillies",
    home: "Chicago Cubs",
    aruns: 6,
    hruns: 1,
    inning: "Final"
  },
  {
    away: "Seattle Mariners",
    home: "Houston Astros",
    aruns: 7,
    hruns: 1,
    inning: "Final"
  },
  {
    away: "Miami Marlins",
    home: "St. Louis Cardinals",
    aruns: 7,
    hruns: 4,
    inning: "Final"
  },
  {
    away: "Kansas City Royals",
    home: "Los Angeles Angels",
    aruns: 0,
    hruns: 1,
    inning: "Final"
  },
  {
    away: "Atlanta Braves",
    home: "San Diego Padres",
    aruns: 14,
    hruns: 1,
    inning: "Final"
  },
  {
    away: "Arizona Diamondbacks",
    home: "San Francisco Giants",
    aruns: 3,
    hruns: 2,
    inning: "Final"
  },
  //6-6-18
  {
    away: "Chicago White Sox",
    home: "Minnesota Twins",
    aruns: 5,
    hruns: 2,
    inning: "Final"
  },
  {
    away: "Los Angeles Dodgers",
    home: "Pittsburgh Pirates",
    aruns: 9,
    hruns: 11,
    inning: "Final"
  },
  {
    away: "Tampa Bay Rays",
    home: "Washington Nationals",
    aruns: 2,
    hruns: 11,
    inning: "Final"
  },
  {
    away: "New York Yankees",
    home: "Toronto Blue Jays",
    aruns: 3,
    hruns: 0,
    inning: "Final"
  },
  {
    away: "Colorado Rockies",
    home: "Cincinnati Reds",
    aruns: 6,
    hruns: 3,
    inning: "Final"
  },
  {
    away: "Detroit Tigers",
    home: "Boston Red Sox",
    aruns: 0,
    hruns: 7,
    inning: "Final"
  },
  {
    away: "Milwaukee Brewers",
    home: "Cleveland Indians",
    aruns: 1,
    hruns: 3,
    inning: "Final"
  },
  {
    away: "Baltimore Orioles",
    home: "New York Mets",
    aruns: 1,
    hruns: 0,
    inning: "Final"
  },
  {
    away: "Oakland Athletics",
    home: "Texas Rangers",
    aruns: 2,
    hruns: 8,
    inning: "Final"
  },
  {
    away: "Philadelphia Phillies",
    home: "Chicago Cubs",
    aruns: 5,
    hruns: 7,
    inning: "Final"
  },
  {
    away: "Seattle Mariners",
    home: "Houston Astros",
    aruns: 5,
    hruns: 7,
    inning: "Final"
  },
  {
    away: "Miami Marlins",
    home: "St. Louis Cardinals",
    aruns: 11,
    hruns: 3,
    inning: "Final"
  },
  {
    away: "Kansas City Royals",
    home: "Los Angeles Angels",
    aruns: 3,
    hruns: 4,
    inning: "Final"
  },
  {
    away: "Atlanta Braves",
    home: "San Diego Padres",
    aruns: 1,
    hruns: 3,
    inning: "Final"
  },
  {
    away: "Arizona Diamondbacks",
    home: "San Francisco Giants",
    aruns: 4,
    hruns: 5,
    inning: "Final"
  },
  //6-7-18
  {
    "away": "Colorado Rockies",
    "home": "Cincinnati Reds",
    "aruns": 5,
    "hruns": 7,
    "ahits": 13,
    "hhits": 10,
    "aerrors": 0,
    "herrors": 1,
    "inning": "Final"
  },
  {
    "away": "Los Angeles Dodgers",
    "home": "Pittsburgh Pirates",
    "aruns": 8,
    "hruns": 7,
    "ahits": 13,
    "hhits": 9,
    "aerrors": 1,
    "herrors": 0,
    "inning": "Final"
  },
  {
    "away": "Chicago White Sox",
    "home": "Minnesota Twins",
    "aruns": 2,
    "hruns": 7,
    "ahits": 6,
    "hhits": 9,
    "aerrors": 0,
    "herrors": 0,
    "inning": "Final"
  },
  {
    "away": "Miami Marlins",
    "home": "St. Louis Cardinals",
    "aruns": 1,
    "hruns": 4,
    "ahits": 4,
    "hhits": 11,
    "aerrors": 0,
    "herrors": 1,
    "inning": "Final"
  },
  {
    "away": "Philadelphia Phillies",
    "home": "Chicago Cubs",
    "aruns": 3,
    "hruns": 4,
    "ahits": 6,
    "hhits": 6,
    "aerrors": 3,
    "herrors": 2,
    "inning": "Final"
  },
  {
    "away": "Baltimore Orioles",
    "home": "Toronto Blue Jays",
    "aruns": 4,
    "hruns": 5,
    "ahits": 7,
    "hhits": 12,
    "aerrors": 0,
    "herrors": 0,
    "inning": "Final"
  },
  {
    "away": "Detroit Tigers",
    "home": "Boston Red Sox",
    "aruns": 7,
    "hruns": 2,
    "ahits": 10,
    "hhits": 7,
    "aerrors": 0,
    "herrors": 0,
    "inning": "Final"
  },
  {
    "away": "Seattle Mariners",
    "home": "Tampa Bay Rays",
    "aruns": 5,
    "hruns": 4,
    "ahits": 8,
    "hhits": 10,
    "aerrors": 0,
    "herrors": 1,
    "inning": "Final"
  },
  {
    "away": "Houston Astros",
    "home": "Texas Rangers",
    "aruns": 5,
    "hruns": 2,
    "ahits": 9,
    "hhits": 8,
    "aerrors": 0,
    "herrors": 1,
    "inning": "Final"
  },
  {
    "away": "Kansas City Royals",
    "home": "Oakland Athletics",
    "aruns": 1,
    "hruns": 4,
    "ahits": 4,
    "hhits": 9,
    "aerrors": 0,
    "herrors": 0,
    "inning": "Final"
  },
  //6-8-18
  {
    "away": "Pittsburgh Pirates",
    "home": "Chicago Cubs",
    "aruns": 1,
    "hruns": 3,
    "ahits": 9,
    "hhits": 9,
    "aerrors": 0,
    "herrors": 0,
    "inning": "Final"
  },
  {
    "away": "San Francisco Giants",
    "home": "Washington Nationals",
    "aruns": 9,
    "hruns": 5,
    "ahits": 15,
    "hhits": 9,
    "aerrors": 1,
    "herrors": 0,
    "inning": "Final"
  },
  {
    "away": "Milwaukee Brewers",
    "home": "Philadelphia Phillies",
    "aruns": 12,
    "hruns": 4,
    "ahits": 13,
    "hhits": 8,
    "aerrors": 0,
    "herrors": 0,
    "inning": "Final"
  },
  {
    "away": "Baltimore Orioles",
    "home": "Toronto Blue Jays",
    "aruns": 1,
    "hruns": 5,
    "ahits": 5,
    "hhits": 13,
    "aerrors": 0,
    "herrors": 1,
    "inning": "Final"
  },
  {
    "away": "Chicago White Sox",
    "home": "Boston Red Sox",
    "aruns": 1,
    "hruns": 0,
    "ahits": 6,
    "hhits": 3,
    "aerrors": 1,
    "herrors": 0,
    "inning": "Final"
  },
  {
    "away": "Cleveland Indians",
    "home": "Detroit Tigers",
    "aruns": 4,
    "hruns": 1,
    "ahits": 7,
    "hhits": 7,
    "aerrors": 0,
    "herrors": 0,
    "inning": "Final"
  },
  {
    "away": "San Diego Padres",
    "home": "Miami Marlins",
    "aruns": 0,
    "hruns": 4,
    "ahits": 6,
    "hhits": 8,
    "aerrors": 0,
    "herrors": 0,
    "inning": "Final"
  },
  {
    "away": "New York Yankees",
    "home": "New York Mets",
    "aruns": 4,
    "hruns": 1,
    "ahits": 5,
    "hhits": 4,
    "aerrors": 0,
    "herrors": 1,
    "inning": "Final"
  },
  {
    "away": "Seattle Mariners",
    "home": "Tampa Bay Rays",
    "aruns": 4,
    "hruns": 3,
    "ahits": 8,
    "hhits": 8,
    "aerrors": 1,
    "herrors": 0,
    "inning": "Final"
  },
  {
    "away": "St. Louis Cardinals",
    "home": "Cincinnati Reds",
    "aruns": 7,
    "hruns": 6,
    "ahits": 8,
    "hhits": 13,
    "aerrors": 0,
    "herrors": 1,
    "inning": "Final"
  },
  {
    "away": "Houston Astros",
    "home": "Texas Rangers",
    "aruns": 7,
    "hruns": 3,
    "ahits": 10,
    "hhits": 5,
    "aerrors": 0,
    "herrors": 0,
    "inning": "Final"
  },
  {
    "away": "Los Angeles Angels",
    "home": "Minnesota Twins",
    "aruns": 4,
    "hruns": 2,
    "ahits": 7,
    "hhits": 7,
    "aerrors": 0,
    "herrors": 0,
    "inning": "Final"
  },
  {
    "away": "Arizona Diamondbacks",
    "home": "Colorado Rockies",
    "aruns": 9,
    "hruns": 4,
    "ahits": 12,
    "hhits": 10,
    "aerrors": 1,
    "herrors": 0,
    "inning": "Final"
  },
  {
    "away": "Kansas City Royals",
    "home": "Oakland Athletics",
    "aruns": 2,
    "hruns": 7,
    "ahits": 7,
    "hhits": 11,
    "aerrors": 1,
    "herrors": 1,
    "inning": "Final"
  },
  {
    "away": "Atlanta Braves",
    "home": "Los Angeles Dodgers",
    "aruns": 3,
    "hruns": 7,
    "ahits": 6,
    "hhits": 8,
    "aerrors": 0,
    "herrors": 0,
    "inning": "Final"
  },
  //6-9-18
  {
    "away": "Pittsburgh Pirates",
    "home": "Chicago Cubs",
    "aruns": 0,
    "hruns": 2,
    "ahits": 1,
    "hhits": 6,
    "aerrors": 0,
    "herrors": 0,
    "inning": "Final"
  },
  {
    "away": "San Francisco Giants",
    "home": "Washington Nationals",
    "aruns": 5,
    "hruns": 7,
    "ahits": 11,
    "hhits": 10,
    "aerrors": 0,
    "herrors": 0,
    "inning": "Final"
  },
  {
    "away": "Milwaukee Brewers",
    "home": "Philadelphia Phillies",
    "aruns": 12,
    "hruns": 3,
    "ahits": 13,
    "hhits": 6,
    "aerrors": 0,
    "herrors": 2,
    "inning": "Final"
  },
  {
    "away": "Baltimore Orioles",
    "home": "Toronto Blue Jays",
    "aruns": 3,
    "hruns": 4,
    "ahits": 8,
    "hhits": 12,
    "aerrors": 0,
    "herrors": 1,
    "inning": "Final"
  },
  {
    "away": "Chicago White Sox",
    "home": "Boston Red Sox",
    "aruns": 2,
    "hruns": 4,
    "ahits": 6,
    "hhits": 8,
    "aerrors": 3,
    "herrors": 0,
    "inning": "Final"
  },
  {
    "away": "Cleveland Indians",
    "home": "Detroit Tigers",
    "aruns": 2,
    "hruns": 4,
    "ahits": 7,
    "hhits": 10,
    "aerrors": 0,
    "herrors": 0,
    "inning": "Final"
  },
  {
    "away": "San Diego Padres",
    "home": "Miami Marlins",
    "aruns": 5,
    "hruns": 4,
    "ahits": 12,
    "hhits": 7,
    "aerrors": 2,
    "herrors": 0,
    "inning": "Final"
  },
  {
    "away": "New York Yankees",
    "home": "New York Mets",
    "aruns": 4,
    "hruns": 3,
    "ahits": 8,
    "hhits": 6,
    "aerrors": 0,
    "herrors": 0,
    "inning": "Final"
  },
  {
    "away": "Seattle Mariners",
    "home": "Tampa Bay Rays",
    "aruns": 3,
    "hruns": 7,
    "ahits": 10,
    "hhits": 10,
    "aerrors": 1,
    "herrors": 2,
    "inning": "Final"
  },
  {
    "away": "St. Louis Cardinals",
    "home": "Cincinnati Reds",
    "aruns": 6,
    "hruns": 4,
    "ahits": 7,
    "hhits": 10,
    "aerrors": 0,
    "herrors": 0,
    "inning": "Final"
  },
  {
    "away": "Houston Astros",
    "home": "Texas Rangers",
    "aruns": 4,
    "hruns": 3,
    "ahits": 9,
    "hhits": 5,
    "aerrors": 1,
    "herrors": 0,
    "inning": "Final"
  },
  {
    "away": "Los Angeles Angels",
    "home": "Minnesota Twins",
    "aruns": 2,
    "hruns": 1,
    "ahits": 6,
    "hhits": 7,
    "aerrors": 0,
    "herrors": 0,
    "inning": "Final"
  },
  {
    "away": "Arizona Diamondbacks",
    "home": "Colorado Rockies",
    "aruns": 12,
    "hruns": 7,
    "ahits": 13,
    "hhits": 9,
    "aerrors": 1,
    "herrors": 2,
    "inning": "Final"
  },
  {
    "away": "Kansas City Royals",
    "home": "Oakland Athletics",
    "aruns": 2,
    "hruns": 0,
    "ahits": 4,
    "hhits": 4,
    "aerrors": 0,
    "herrors": 1,
    "inning": "Final"
  },
  {
    "away": "Atlanta Braves",
    "home": "Los Angeles Dodgers",
    "aruns": 5,
    "hruns": 3,
    "ahits": 13,
    "hhits": 4,
    "aerrors": 0,
    "herrors": 1,
    "inning": "Top 8"
  },
  //6-10-18
  {
    "away": "Pittsburgh Pirates",
    "home": "Chicago Cubs",
    "aruns": 0,
    "hruns": 0,
    "ahits": 0,
    "hhits": 0,
    "aerrors": 0,
    "herrors": 0,
    "inning": ""
  },
  {
    "away": "San Francisco Giants",
    "home": "Washington Nationals",
    "aruns": 0,
    "hruns": 0,
    "ahits": 0,
    "hhits": 0,
    "aerrors": 0,
    "herrors": 0,
    "inning": ""
  },
  {
    "away": "Milwaukee Brewers",
    "home": "Philadelphia Phillies",
    "aruns": 0,
    "hruns": 0,
    "ahits": 0,
    "hhits": 0,
    "aerrors": 0,
    "herrors": 0,
    "inning": ""
  },
  {
    "away": "Baltimore Orioles",
    "home": "Toronto Blue Jays",
    "aruns": 0,
    "hruns": 0,
    "ahits": 0,
    "hhits": 0,
    "aerrors": 0,
    "herrors": 0,
    "inning": ""
  },
  {
    "away": "Chicago White Sox",
    "home": "Boston Red Sox",
    "aruns": 0,
    "hruns": 0,
    "ahits": 0,
    "hhits": 0,
    "aerrors": 0,
    "herrors": 0,
    "inning": ""
  },
  {
    "away": "Cleveland Indians",
    "home": "Detroit Tigers",
    "aruns": 0,
    "hruns": 0,
    "ahits": 0,
    "hhits": 0,
    "aerrors": 0,
    "herrors": 0,
    "inning": ""
  },
  {
    "away": "San Diego Padres",
    "home": "Miami Marlins",
    "aruns": 0,
    "hruns": 0,
    "ahits": 0,
    "hhits": 0,
    "aerrors": 0,
    "herrors": 0,
    "inning": ""
  },
  {
    "away": "New York Yankees",
    "home": "New York Mets",
    "aruns": 0,
    "hruns": 0,
    "ahits": 0,
    "hhits": 0,
    "aerrors": 0,
    "herrors": 0,
    "inning": ""
  },
  {
    "away": "Seattle Mariners",
    "home": "Tampa Bay Rays",
    "aruns": 0,
    "hruns": 0,
    "ahits": 0,
    "hhits": 0,
    "aerrors": 0,
    "herrors": 0,
    "inning": ""
  },
  {
    "away": "St. Louis Cardinals",
    "home": "Cincinnati Reds",
    "aruns": 0,
    "hruns": 0,
    "ahits": 0,
    "hhits": 0,
    "aerrors": 0,
    "herrors": 0,
    "inning": ""
  },
  {
    "away": "Houston Astros",
    "home": "Texas Rangers",
    "aruns": 0,
    "hruns": 0,
    "ahits": 0,
    "hhits": 0,
    "aerrors": 0,
    "herrors": 0,
    "inning": ""
  },
  {
    "away": "Los Angeles Angels",
    "home": "Minnesota Twins",
    "aruns": 0,
    "hruns": 0,
    "ahits": 0,
    "hhits": 0,
    "aerrors": 0,
    "herrors": 0,
    "inning": ""
  },
  {
    "away": "Arizona Diamondbacks",
    "home": "Colorado Rockies",
    "aruns": 0,
    "hruns": 0,
    "ahits": 0,
    "hhits": 0,
    "aerrors": 0,
    "herrors": 0,
    "inning": ""
  },
  {
    "away": "Kansas City Royals",
    "home": "Oakland Athletics",
    "aruns": 0,
    "hruns": 0,
    "ahits": 0,
    "hhits": 0,
    "aerrors": 0,
    "herrors": 0,
    "inning": ""
  },
  {
    "away": "Atlanta Braves",
    "home": "Los Angeles Dodgers",
    "aruns": 0,
    "hruns": 0,
    "ahits": 0,
    "hhits": 0,
    "aerrors": 0,
    "herrors": 0,
    "inning": ""
  },
);

const homeScores = () => {
  for (i = 0; i < scores.length; i++) {
    if (scores[i].home === nlEast[0].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        nlEast[0].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlEast[0].losses++;
      }
    } else if (scores[i].home === nlEast[1].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        nlEast[1].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlEast[1].losses++;
      }
    } else if (scores[i].home === nlEast[2].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        nlEast[2].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlEast[2].losses++;
      }
    } else if (scores[i].home === nlEast[3].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        nlEast[3].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlEast[3].losses++;
      }
    } else if (scores[i].home === nlEast[4].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        nlEast[4].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlEast[4].losses++;
      }
    } else if (scores[i].home === nlCentral[0].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        nlCentral[0].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlCentral[0].losses++;
      }
    } else if (scores[i].home === nlCentral[1].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        nlCentral[1].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlCentral[1].losses++;
      }
    } else if (scores[i].home === nlCentral[2].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        nlCentral[2].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlCentral[2].losses++;
      }
    } else if (scores[i].home === nlCentral[3].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        nlCentral[3].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlCentral[3].losses++;
      }
    } else if (scores[i].home === nlCentral[4].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        nlCentral[4].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlCentral[4].losses++;
      }
    } else if (scores[i].home === nlWest[0].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        nlWest[0].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlWest[0].losses++;
      }
    } else if (scores[i].home === nlWest[1].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        nlWest[1].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlWest[1].losses++;
      }
    } else if (scores[i].home === nlWest[2].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        nlWest[2].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlWest[2].losses++;
      }
    } else if (scores[i].home === nlWest[3].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        nlWest[3].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlWest[3].losses++;
      }
    } else if (scores[i].home === nlWest[4].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        nlWest[4].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlWest[4].losses++;
      }
    } else if (scores[i].home === alEast[0].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        alEast[0].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alEast[0].losses++;
      }
    } else if (scores[i].home === alEast[1].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        alEast[1].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alEast[1].losses++;
      }
    } else if (scores[i].home === alEast[2].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        alEast[2].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alEast[2].losses++;
      }
    } else if (scores[i].home === alEast[3].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        alEast[3].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alEast[3].losses++;
      }
    } else if (scores[i].home === alEast[4].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        alEast[4].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alEast[4].losses++;
      }
    } else if (scores[i].home === alCentral[0].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        alCentral[0].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alCentral[0].losses++;
      }
    } else if (scores[i].home === alCentral[1].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        alCentral[1].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alCentral[1].losses++;
      }
    } else if (scores[i].home === alCentral[2].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        alCentral[2].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alCentral[2].losses++;
      }
    } else if (scores[i].home === alCentral[3].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        alCentral[3].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alCentral[3].losses++;
      }
    } else if (scores[i].home === alCentral[4].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        alCentral[4].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alCentral[4].losses++;
      }
    } else if (scores[i].home === alWest[0].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        alWest[0].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alWest[0].losses++;
      }
    } else if (scores[i].home === alWest[1].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        alWest[1].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alWest[1].losses++;
      }
    } else if (scores[i].home === alWest[2].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        alWest[2].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alWest[2].losses++;
      }
    } else if (scores[i].home === alWest[3].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        alWest[3].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alWest[3].losses++;
      }
    } else if (scores[i].home === alWest[4].team) {
      if (scores[i].hruns > scores[i].aruns && scores[i].inning === "Final") {
        alWest[4].wins++;
      } else if (
        scores[i].hruns < scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alWest[4].losses++;
      }
    }
  }
};

const awayScores = () => {
  for (i = 0; i < scores.length; i++) {
    if (scores[i].away === nlEast[0].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        nlEast[0].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlEast[0].losses++;
      }
    } else if (scores[i].away === nlEast[1].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        nlEast[1].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlEast[1].losses++;
      }
    } else if (scores[i].away === nlEast[2].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        nlEast[2].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlEast[2].losses++;
      }
    } else if (scores[i].away === nlEast[3].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        nlEast[3].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlEast[3].losses++;
      }
    } else if (scores[i].away === nlEast[4].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        nlEast[4].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlEast[4].losses++;
      }
    } else if (scores[i].away === nlCentral[0].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        nlCentral[0].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlCentral[0].losses++;
      }
    } else if (scores[i].away === nlCentral[1].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        nlCentral[1].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlCentral[1].losses++;
      }
    } else if (scores[i].away === nlCentral[2].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        nlCentral[2].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlCentral[2].losses++;
      }
    } else if (scores[i].away === nlCentral[3].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        nlCentral[3].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlCentral[3].losses++;
      }
    } else if (scores[i].away === nlCentral[4].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        nlCentral[4].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlCentral[4].losses++;
      }
    } else if (scores[i].away === nlWest[0].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        nlWest[0].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlWest[0].losses++;
      }
    } else if (scores[i].away === nlWest[1].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        nlWest[1].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlWest[1].losses++;
      }
    } else if (scores[i].away === nlWest[2].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        nlWest[2].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlWest[2].losses++;
      }
    } else if (scores[i].away === nlWest[3].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        nlWest[3].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlWest[3].losses++;
      }
    } else if (scores[i].away === nlWest[4].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        nlWest[4].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        nlWest[4].losses++;
      }
    } else if (scores[i].away === alEast[0].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        alEast[0].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alEast[0].losses++;
      }
    } else if (scores[i].away === alEast[1].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        alEast[1].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alEast[1].losses++;
      }
    } else if (scores[i].away === alEast[2].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        alEast[2].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alEast[2].losses++;
      }
    } else if (scores[i].away === alEast[3].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        alEast[3].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alEast[3].losses++;
      }
    } else if (scores[i].away === alEast[4].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        alEast[4].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alEast[4].losses++;
      }
    } else if (scores[i].away === alCentral[0].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        alCentral[0].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alCentral[0].losses++;
      }
    } else if (scores[i].away === alCentral[1].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        alCentral[1].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alCentral[1].losses++;
      }
    } else if (scores[i].away === alCentral[2].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        alCentral[2].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alCentral[2].losses++;
      }
    } else if (scores[i].away === alCentral[3].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        alCentral[3].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alCentral[3].losses++;
      }
    } else if (scores[i].away === alCentral[4].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        alCentral[4].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alCentral[4].losses++;
      }
    } else if (scores[i].away === alWest[0].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        alWest[0].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alWest[0].losses++;
      }
    } else if (scores[i].away === alWest[1].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        alWest[1].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alWest[1].losses++;
      }
    } else if (scores[i].away === alWest[2].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        alWest[2].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alWest[2].losses++;
      }
    } else if (scores[i].away === alWest[3].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        alWest[3].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alWest[3].losses++;
      }
    } else if (scores[i].away === alWest[4].team) {
      if (scores[i].hruns < scores[i].aruns && scores[i].inning === "Final") {
        alWest[4].wins++;
      } else if (
        scores[i].hruns > scores[i].aruns &&
        scores[i].inning === "Final"
      ) {
        alWest[4].losses++;
      }
    }
  }
};

homeScores();
awayScores();

nlEast[0].image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Atlanta_Braves_Insignia.svg/250px-Atlanta_Braves_Insignia.svg.png";

nlEast[1].image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Philadelphia_Phillies_Insignia.svg/250px-Philadelphia_Phillies_Insignia.svg.png";

nlEast[2].image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/New_York_Mets_Insignia.svg/250px-New_York_Mets_Insignia.svg.png";

nlEast[3].image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Washington_Nationals_Cap_Insig.svg/508px-Washington_Nationals_Cap_Insig.svg.png";

nlEast[4].image =
  "https://upload.wikimedia.org/wikipedia/en/thumb/d/d8/Miami_Marlins_cap_logo.svg/200px-Miami_Marlins_cap_logo.svg.png";

nlCentral[0].image =
  "https://upload.wikimedia.org/wikipedia/en/thumb/4/4a/MilwaukeeBrewers_caplogo.svg/250px-MilwaukeeBrewers_caplogo.svg.png";

nlCentral[1].image =
  "https://upload.wikimedia.org/wikipedia/commons/e/ee/St_Louis_Cardinals_Cap_Insignia.svg";

nlCentral[2].image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Pittsburgh_Pirates_Cap_Insignia.svg/197px-Pittsburgh_Pirates_Cap_Insignia.svg.png";

nlCentral[3].image =
  "https://upload.wikimedia.org/wikipedia/commons/8/89/Chicago_Cubs_Cap_Insignia.svg";

nlCentral[4].image =
  "https://upload.wikimedia.org/wikipedia/commons/7/71/Cincinnati_Reds_Cap_Insignia.svg";

nlWest[0].image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Colorado_Rockies_Cap_Insignia.svg/224px-Colorado_Rockies_Cap_Insignia.svg.png";

nlWest[1].image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Arizona_Diamondbacks_cap_logo.svg/260px-Arizona_Diamondbacks_cap_logo.svg.png";

nlWest[2].image =
  "https://upload.wikimedia.org/wikipedia/commons/4/49/San_Francisco_Giants_Cap_Insignia.svg";

nlWest[3].image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/LA_Dodgers.svg/502px-LA_Dodgers.svg.png";

nlWest[4].image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/San_Diego_Padres_logotype.svg/250px-San_Diego_Padres_logotype.svg.png";

alEast[0].image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Boston_Red_Sox_cap_logo.svg/147px-Boston_Red_Sox_cap_logo.svg.png";

alEast[1].image =
  "https://upload.wikimedia.org/wikipedia/commons/7/70/NewYorkYankees_caplogo.svg";

alEast[2].image =
  "https://upload.wikimedia.org/wikipedia/en/1/11/TorontoBlueJays2012cap.png";

alEast[3].image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Tampa_Bay_Rays_cap_logo.svg/200px-Tampa_Bay_Rays_cap_logo.svg.png";

alEast[4].image =
  "https://upload.wikimedia.org/wikipedia/en/thumb/7/75/Baltimore_Orioles_cap.svg/200px-Baltimore_Orioles_cap.svg.png";

alCentral[0].image =
  "https://nbchardballtalk.files.wordpress.com/2013/11/indians-block-c-logo.jpg?w=610&h=343&crop=1";

alCentral[1].image =
  "https://upload.wikimedia.org/wikipedia/en/thumb/2/2f/Minnesota_Twins_Insignia.svg/250px-Minnesota_Twins_Insignia.svg.png";

alCentral[2].image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Detroit_Tigers_Insignia.svg/250px-Detroit_Tigers_Insignia.svg.png";

alCentral[3].image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Kansas_City_Royals_Insignia.svg/250px-Kansas_City_Royals_Insignia.svg.png";

alCentral[4].image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Chicago_White_Sox_Insignia.svg/250px-Chicago_White_Sox_Insignia.svg.png";

alWest[0].image =
  "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Houston_Astros_cap_logo.svg/200px-Houston_Astros_cap_logo.svg.png";

alWest[1].image =
  "https://upload.wikimedia.org/wikipedia/en/thumb/8/8a/Seattle_Mariners_Insignia.svg/250px-Seattle_Mariners_Insignia.svg.png";

alWest[2].image =
  "https://upload.wikimedia.org/wikipedia/commons/7/79/Los_Angeles_Angels_of_Anaheim_Insignia.svg";

alWest[3].image =
  "https://upload.wikimedia.org/wikipedia/commons/7/7c/Oakland_A%27s_cap_logo.svg";

alWest[4].image =
  "https://upload.wikimedia.org/wikipedia/commons/e/e2/Texas_Rangers_Insignia.svg";

nlEast[0].website = "https://www.mlb.com/braves";

nlEast[1].website = "https://www.mlb.com/phillies";

nlEast[2].website = "https://www.mlb.com/mets";

nlEast[3].website = "https://www.mlb.com/nationals";

nlEast[4].website = "https://www.mlb.com/marlins";

nlCentral[0].website = "https://www.mlb.com/brewers";

nlCentral[1].website = "https://www.mlb.com/cardinals";

nlCentral[2].website = "https://www.mlb.com/pirates";

nlCentral[3].website = "https://www.mlb.com/cubs";

nlCentral[4].website = "https://www.mlb.com/reds";

nlWest[0].website = "https://www.mlb.com/rockies";

nlWest[1].website = "https://www.mlb.com/dbacks";

nlWest[2].website = "https://www.mlb.com/giants";

nlWest[3].website = "https://www.mlb.com/dodgers";

nlWest[4].website = "https://www.mlb.com/padres";

alEast[0].website = "https://www.mlb.com/redsox";

alEast[1].website = "https://www.mlb.com/yankees";

alEast[2].website = "https://www.mlb.com/bluejays";

alEast[3].website = "https://www.mlb.com/rays";

alEast[4].website = "https://www.mlb.com/orioles";

alCentral[0].website = "https://www.mlb.com/indians";

alCentral[1].website = "https://www.mlb.com/twins";

alCentral[2].website = "https://www.mlb.com/tigers";

alCentral[3].website = "https://www.mlb.com/royals";

alCentral[4].website = "https://www.mlb.com/whitesox";

alWest[0].website = "https://www.mlb.com/astros";

alWest[1].website = "https://www.mlb.com/mariners";

alWest[2].website = "https://www.mlb.com/angels";

alWest[3].website = "https://www.mlb.com/athletics";

alWest[4].website = "https://www.mlb.com/rangers";

function nlEastStandings(tbody) {
  let pctBraves =
    Math.round(nlEast[0].wins / (nlEast[0].wins + nlEast[0].losses) * 1000) /
    1000;

  let pctBravesStr = pctBraves.toPrecision(3);

  nlEast[0].pct = pctBravesStr.toString().replace(/^[0.]+/, ".");

  let pctPhillies =
    Math.round(nlEast[1].wins / (nlEast[1].wins + nlEast[1].losses) * 1000) /
    1000;

  let pctPhilliesStr = pctPhillies.toPrecision(3);

  nlEast[1].pct = pctPhilliesStr.toString().replace(/^[0.]+/, ".");

  let pctMets =
    Math.round(nlEast[2].wins / (nlEast[2].wins + nlEast[2].losses) * 1000) /
    1000;

  let pctMetsStr = pctMets.toPrecision(3);

  nlEast[2].pct = pctMetsStr.toString().replace(/^[0.]+/, ".");

  let pctNationals =
    Math.round(nlEast[3].wins / (nlEast[3].wins + nlEast[3].losses) * 1000) /
    1000;

  let pctNationalsStr = pctNationals.toPrecision(3);

  nlEast[3].pct = pctNationalsStr.toString().replace(/^[0.]+/, ".");

  let pctMarlins =
    Math.round(nlEast[4].wins / (nlEast[4].wins + nlEast[4].losses) * 1000) /
    1000;

  let pctMarlinsStr = pctMarlins.toPrecision(3);

  nlEast[4].pct = pctMarlinsStr.toString().replace(/^[0.]+/, ".");

  function compare(a, b) {
    if (a.pct > b.pct) return -1;
    if (a.pct < b.pct) return 1;
    return 0;
  }

  nlEast.sort(compare);

  document.getElementById("division").innerHTML = "nl east";

  tbody = document.getElementById("standings");

  for (i = 0; i < nlEast.length; i++) {
    tbody.rows[i].cells[0].innerHTML =
      '<a class="team" href="' +
      nlEast[i].website +
      '" target="_blank"><img src="' +
      nlEast[i].image +
      '" ></a> ' +
      nlEast[i].team;
    tbody.rows[i].cells[1].innerHTML = nlEast[i].wins;
    tbody.rows[i].cells[2].innerHTML = nlEast[i].losses;
    tbody.rows[i].cells[3].innerHTML = nlEast[i].pct;
  }

  tbody.rows[0].cells[4].innerHTML = "-";

  let gbSecond =
    (nlEast[1].losses - nlEast[0].losses + (nlEast[0].wins - nlEast[1].wins)) /
    2;
    
    if (gbSecond===0){
        tbody.rows[1].cells[4].innerHTML = "-";
    }else{
        tbody.rows[1].cells[4].innerHTML = gbSecond;
    };

  let gbThird =
    (nlEast[2].losses - nlEast[0].losses + (nlEast[0].wins - nlEast[2].wins)) /
    2;

  if (gbThird===0){
        tbody.rows[2].cells[4].innerHTML = "-";
    }else{
        tbody.rows[2].cells[4].innerHTML = gbThird;
    };

  let gbFourth =
    (nlEast[3].losses - nlEast[0].losses + (nlEast[0].wins - nlEast[3].wins)) /
    2;

  if (gbFourth===0){
        tbody.rows[3].cells[4].innerHTML = "-";
    }else{
        tbody.rows[3].cells[4].innerHTML = gbFourth;
    };

  let gbFifth =
    (nlEast[4].losses - nlEast[0].losses + (nlEast[0].wins - nlEast[4].wins)) /
    2;

  if (gbFifth===0){
        tbody.rows[4].cells[4].innerHTML = "-";
    }else{
        tbody.rows[4].cells[4].innerHTML = gbFifth;
    };
}

function nlCentralStandings(tbody) {
  let pctBrewers =
    Math.round(
      nlCentral[0].wins / (nlCentral[0].wins + nlCentral[0].losses) * 1000
    ) / 1000;

  let pctBrewersStr = pctBrewers.toPrecision(3);

  nlCentral[0].pct = pctBrewersStr.toString().replace(/^[0.]+/, ".");

  let pctCardinals =
    Math.round(
      nlCentral[1].wins / (nlCentral[1].wins + nlCentral[1].losses) * 1000
    ) / 1000;

  let pctCardinalsStr = pctCardinals.toPrecision(3);

  nlCentral[1].pct = pctCardinalsStr.toString().replace(/^[0.]+/, ".");

  let pctPirates =
    Math.round(
      nlCentral[2].wins / (nlCentral[2].wins + nlCentral[2].losses) * 1000
    ) / 1000;

  let pctPiratesStr = pctPirates.toPrecision(3);

  nlCentral[2].pct = pctPiratesStr.toString().replace(/^[0.]+/, ".");

  let pctCubs =
    Math.round(
      nlCentral[3].wins / (nlCentral[3].wins + nlCentral[3].losses) * 1000
    ) / 1000;

  let pctCubsStr = pctCubs.toPrecision(3);

  nlCentral[3].pct = pctCubsStr.toString().replace(/^[0.]+/, ".");

  let pctReds =
    Math.round(
      nlCentral[4].wins / (nlCentral[4].wins + nlCentral[4].losses) * 1000
    ) / 1000;

  let pctRedsStr = pctReds.toPrecision(3);

  nlCentral[4].pct = pctRedsStr.toString().replace(/^[0.]+/, ".");

  function compare(a, b) {
    if (a.pct > b.pct) return -1;
    if (a.pct < b.pct) return 1;
    return 0;
  }

  nlCentral.sort(compare);

  document.getElementById("division").innerHTML = "nl central";

  tbody = document.getElementById("standings");

  for (i = 0; i < nlCentral.length; i++) {
    tbody.rows[i].cells[0].innerHTML =
      '<a class="team" href="' +
      nlCentral[i].website +
      '" target="_blank"><img src="' +
      nlCentral[i].image +
      '" ></a> ' +
      nlCentral[i].team;
    tbody.rows[i].cells[1].innerHTML = nlCentral[i].wins;
    tbody.rows[i].cells[2].innerHTML = nlCentral[i].losses;
    tbody.rows[i].cells[3].innerHTML = nlCentral[i].pct;
  }

  tbody.rows[0].cells[4].innerHTML = "-";

  let gbSecond =
    (nlCentral[1].losses -
      nlCentral[0].losses +
      (nlCentral[0].wins - nlCentral[1].wins)) /
    2;

  if (gbSecond===0){
        tbody.rows[1].cells[4].innerHTML = "-";
    }else{
        tbody.rows[1].cells[4].innerHTML = gbSecond;
    };

  let gbThird =
    (nlCentral[2].losses -
      nlCentral[0].losses +
      (nlCentral[0].wins - nlCentral[2].wins)) /
    2;

  if (gbThird===0){
        tbody.rows[2].cells[4].innerHTML = "-";
    }else{
        tbody.rows[2].cells[4].innerHTML = gbThird;
    };

  let gbFourth =
    (nlCentral[3].losses -
      nlCentral[0].losses +
      (nlCentral[0].wins - nlCentral[3].wins)) /
    2;

  if (gbFourth===0){
        tbody.rows[3].cells[4].innerHTML = "-";
    }else{
        tbody.rows[3].cells[4].innerHTML = gbFourth;
    };

  let gbFifth =
    (nlCentral[4].losses -
      nlCentral[0].losses +
      (nlCentral[0].wins - nlCentral[4].wins)) /
    2;

  if (gbFifth===0){
        tbody.rows[4].cells[4].innerHTML = "-";
    }else{
        tbody.rows[4].cells[4].innerHTML = gbFifth;
    };
}

function nlWestStandings(tbody) {
  let pctRockies =
    Math.round(nlWest[0].wins / (nlWest[0].wins + nlWest[0].losses) * 1000) /
    1000;

  let pctRockiesStr = pctRockies.toPrecision(3);

  nlWest[0].pct = pctRockiesStr.toString().replace(/^[0.]+/, ".");

  let pctDbacks =
    Math.round(nlWest[1].wins / (nlWest[1].wins + nlWest[1].losses) * 1000) /
    1000;

  let pctDbacksStr = pctDbacks.toPrecision(3);

  nlWest[1].pct = pctDbacksStr.toString().replace(/^[0.]+/, ".");

  let pctGiants =
    Math.round(nlWest[2].wins / (nlWest[2].wins + nlWest[2].losses) * 1000) /
    1000;

  let pctGiantsStr = pctGiants.toPrecision(3);

  nlWest[2].pct = pctGiantsStr.toString().replace(/^[0.]+/, ".");

  let pctDodgers =
    Math.round(nlWest[3].wins / (nlWest[3].wins + nlWest[3].losses) * 1000) /
    1000;

  let pctDodgersStr = pctDodgers.toPrecision(3);

  nlWest[3].pct = pctDodgersStr.toString().replace(/^[0.]+/, ".");

  let pctPadres =
    Math.round(nlWest[4].wins / (nlWest[4].wins + nlWest[4].losses) * 1000) /
    1000;

  let pctPadresStr = pctPadres.toPrecision(3);

  nlWest[4].pct = pctPadresStr.toString().replace(/^[0.]+/, ".");

  function compare(a, b) {
    if (a.pct > b.pct) return -1;
    if (a.pct < b.pct) return 1;
    return 0;
  }

  nlWest.sort(compare);

  document.getElementById("division").innerHTML = "nl west";

  tbody = document.getElementById("standings");

  for (i = 0; i < nlWest.length; i++) {
    tbody.rows[i].cells[0].innerHTML =
      '<a class="team" href="' +
      nlWest[i].website +
      '" target="_blank"><img src="' +
      nlWest[i].image +
      '" ></a> ' +
      nlWest[i].team;
    tbody.rows[i].cells[1].innerHTML = nlWest[i].wins;
    tbody.rows[i].cells[2].innerHTML = nlWest[i].losses;
    tbody.rows[i].cells[3].innerHTML = nlWest[i].pct;
  }

  tbody.rows[0].cells[4].innerHTML = "-";

  let gbSecond =
    (nlWest[1].losses - nlWest[0].losses + (nlWest[0].wins - nlWest[1].wins)) /
    2;

  if (gbSecond===0){
        tbody.rows[1].cells[4].innerHTML = "-";
    }else{
        tbody.rows[1].cells[4].innerHTML = gbSecond;
    };

  let gbThird =
    (nlWest[2].losses - nlWest[0].losses + (nlWest[0].wins - nlWest[2].wins)) /
    2;

  if (gbThird===0){
        tbody.rows[2].cells[4].innerHTML = "-";
    }else{
        tbody.rows[2].cells[4].innerHTML = gbThird;
    };

  let gbFourth =
    (nlWest[3].losses - nlWest[0].losses + (nlWest[0].wins - nlWest[3].wins)) /
    2;

  if (gbFourth===0){
        tbody.rows[3].cells[4].innerHTML = "-";
    }else{
        tbody.rows[3].cells[4].innerHTML = gbFourth;
    };

  let gbFifth =
    (nlWest[4].losses - nlWest[0].losses + (nlWest[0].wins - nlWest[4].wins)) /
    2;

  if (gbFifth===0){
        tbody.rows[4].cells[4].innerHTML = "-";
    }else{
        tbody.rows[4].cells[4].innerHTML = gbFifth;
    };
}

function alEastStandings(tbody) {
  let pctRedSox =
    Math.round(alEast[0].wins / (alEast[0].wins + alEast[0].losses) * 1000) /
    1000;

  let pctRedSoxStr = pctRedSox.toPrecision(3);

  alEast[0].pct = pctRedSoxStr.toString().replace(/^[0.]+/, ".");

  let pctYankees =
    Math.round(alEast[1].wins / (alEast[1].wins + alEast[1].losses) * 1000) /
    1000;

  let pctYankeesStr = pctYankees.toPrecision(3);

  alEast[1].pct = pctYankeesStr.toString().replace(/^[0.]+/, ".");

  let pctBlueJays =
    Math.round(alEast[2].wins / (alEast[2].wins + alEast[2].losses) * 1000) /
    1000;

  let pctBlueJaysStr = pctBlueJays.toPrecision(3);

  alEast[2].pct = pctBlueJaysStr.toString().replace(/^[0.]+/, ".");

  let pctRays =
    Math.round(alEast[3].wins / (alEast[3].wins + alEast[3].losses) * 1000) /
    1000;

  let pctRaysStr = pctRays.toPrecision(3);

  alEast[3].pct = pctRaysStr.toString().replace(/^[0.]+/, ".");

  let pctOrioles =
    Math.round(alEast[4].wins / (alEast[4].wins + alEast[4].losses) * 1000) /
    1000;

  let pctOriolesStr = pctOrioles.toPrecision(3);

  alEast[4].pct = pctOriolesStr.toString().replace(/^[0.]+/, ".");

  function compare(a, b) {
    if (a.pct > b.pct) return -1;
    if (a.pct < b.pct) return 1;
    return 0;
  }

  alEast.sort(compare);

  document.getElementById("division").innerHTML = "al east";

  tbody = document.getElementById("standings");

  for (i = 0; i < alEast.length; i++) {
    tbody.rows[i].cells[0].innerHTML =
      '<a class="team" href="' +
      alEast[i].website +
      '" target="_blank"><img src="' +
      alEast[i].image +
      '" ></a> ' +
      alEast[i].team;
    tbody.rows[i].cells[1].innerHTML = alEast[i].wins;
    tbody.rows[i].cells[2].innerHTML = alEast[i].losses;
    tbody.rows[i].cells[3].innerHTML = alEast[i].pct;
  }

  tbody.rows[0].cells[4].innerHTML = "-";

  let gbSecond =
    (alEast[1].losses - alEast[0].losses + (alEast[0].wins - alEast[1].wins)) /
    2;

  if (gbSecond===0){
        tbody.rows[1].cells[4].innerHTML = "-";
    }else{
        tbody.rows[1].cells[4].innerHTML = gbSecond;
    };

  let gbThird =
    (alEast[2].losses - alEast[0].losses + (alEast[0].wins - alEast[2].wins)) /
    2;

  if (gbThird===0){
        tbody.rows[2].cells[4].innerHTML = "-";
    }else{
        tbody.rows[2].cells[4].innerHTML = gbThird;
    };

  let gbFourth =
    (alEast[3].losses - alEast[0].losses + (alEast[0].wins - alEast[3].wins)) /
    2;

  if (gbFourth===0){
        tbody.rows[3].cells[4].innerHTML = "-";
    }else{
        tbody.rows[3].cells[4].innerHTML = gbFourth;
    };

  let gbFifth =
    (alEast[4].losses - alEast[0].losses + (alEast[0].wins - alEast[4].wins)) /
    2;

  if (gbFifth===0){
        tbody.rows[4].cells[4].innerHTML = "-";
    }else{
        tbody.rows[4].cells[4].innerHTML = gbFifth;
    };
}

function alCentralStandings(tbody) {
  let pctIndians =
    Math.round(
      alCentral[0].wins / (alCentral[0].wins + alCentral[0].losses) * 1000
    ) / 1000;

  let pctIndiansStr = pctIndians.toPrecision(3);

  alCentral[0].pct = pctIndiansStr.toString().replace(/^[0.]+/, ".");

  let pctTwins =
    Math.round(
      alCentral[1].wins / (alCentral[1].wins + alCentral[1].losses) * 1000
    ) / 1000;

  let pctTwinsStr = pctTwins.toPrecision(3);

  alCentral[1].pct = pctTwinsStr.toString().replace(/^[0.]+/, ".");

  let pctTigers =
    Math.round(
      alCentral[2].wins / (alCentral[2].wins + alCentral[2].losses) * 1000
    ) / 1000;

  let pctTigersStr = pctTigers.toPrecision(3);

  alCentral[2].pct = pctTigersStr.toString().replace(/^[0.]+/, ".");

  let pctRoyals =
    Math.round(
      alCentral[3].wins / (alCentral[3].wins + alCentral[3].losses) * 1000
    ) / 1000;

  let pctRoyalsStr = pctRoyals.toPrecision(3);

  alCentral[3].pct = pctRoyalsStr.toString().replace(/^[0.]+/, ".");

  let pctWhiteSox =
    Math.round(
      alCentral[4].wins / (alCentral[4].wins + alCentral[4].losses) * 1000
    ) / 1000;

  let pctWhiteSoxStr = pctWhiteSox.toPrecision(3);

  alCentral[4].pct = pctWhiteSoxStr.toString().replace(/^[0.]+/, ".");

  function compare(a, b) {
    if (a.pct > b.pct) return -1;
    if (a.pct < b.pct) return 1;
    return 0;
  }

  alCentral.sort(compare);

  document.getElementById("division").innerHTML = "al central";

  tbody = document.getElementById("standings");

  for (i = 0; i < alCentral.length; i++) {
    tbody.rows[i].cells[0].innerHTML =
      '<a class="team" href="' +
      alCentral[i].website +
      '" target="_blank"><img src="' +
      alCentral[i].image +
      '" ></a> ' +
      alCentral[i].team;
    tbody.rows[i].cells[1].innerHTML = alCentral[i].wins;
    tbody.rows[i].cells[2].innerHTML = alCentral[i].losses;
    tbody.rows[i].cells[3].innerHTML = alCentral[i].pct;
  }

  tbody.rows[0].cells[4].innerHTML = "-";

  let gbSecond =
    (alCentral[1].losses -
      alCentral[0].losses +
      (alCentral[0].wins - alCentral[1].wins)) /
    2;

  if (gbSecond===0){
        tbody.rows[1].cells[4].innerHTML = "-";
    }else{
        tbody.rows[1].cells[4].innerHTML = gbSecond;
    };

  let gbThird =
    (alCentral[2].losses -
      alCentral[0].losses +
      (alCentral[0].wins - alCentral[2].wins)) /
    2;

  if (gbThird===0){
        tbody.rows[2].cells[4].innerHTML = "-";
    }else{
        tbody.rows[2].cells[4].innerHTML = gbThird;
    };

  let gbFourth =
    (alCentral[3].losses -
      alCentral[0].losses +
      (alCentral[0].wins - alCentral[3].wins)) /
    2;

  if (gbFourth===0){
        tbody.rows[3].cells[4].innerHTML = "-";
    }else{
        tbody.rows[3].cells[4].innerHTML = gbFourth;
    };

  let gbFifth =
    (alCentral[4].losses -
      alCentral[0].losses +
      (alCentral[0].wins - alCentral[4].wins)) /
    2;

  if (gbFifth===0){
        tbody.rows[4].cells[4].innerHTML = "-";
    }else{
        tbody.rows[4].cells[4].innerHTML = gbFifth;
    };
}

function alWestStandings(tbody) {
  let pctAstros =
    Math.round(alWest[0].wins / (alWest[0].wins + alWest[0].losses) * 1000) /
    1000;

  let pctAstrosStr = pctAstros.toPrecision(3);

  alWest[0].pct = pctAstrosStr.toString().replace(/^[0.]+/, ".");

  let pctMariners =
    Math.round(alWest[1].wins / (alWest[1].wins + alWest[1].losses) * 1000) /
    1000;

  let pctMarinersStr = pctMariners.toPrecision(3);

  alWest[1].pct = pctMarinersStr.toString().replace(/^[0.]+/, ".");

  let pctAngels =
    Math.round(alWest[2].wins / (alWest[2].wins + alWest[2].losses) * 1000) /
    1000;

  let pctAngelsStr = pctAngels.toPrecision(3);

  alWest[2].pct = pctAngelsStr.toString().replace(/^[0.]+/, ".");

  let pctAthletics =
    Math.round(alWest[3].wins / (alWest[3].wins + alWest[3].losses) * 1000) /
    1000;

  let pctAthleticsStr = pctAthletics.toPrecision(3);

  alWest[3].pct = pctAthleticsStr.toString().replace(/^[0.]+/, ".");

  let pctRangers =
    Math.round(alWest[4].wins / (alWest[4].wins + alWest[4].losses) * 1000) /
    1000;

  let pctRangersStr = pctRangers.toPrecision(3);

  alWest[4].pct = pctRangersStr.toString().replace(/^[0.]+/, ".");

  function compare(a, b) {
    if (a.pct > b.pct) return -1;
    if (a.pct < b.pct) return 1;
    return 0;
  }

  alWest.sort(compare);

  document.getElementById("division").innerHTML = "al west";

  tbody = document.getElementById("standings");

  for (i = 0; i < alWest.length; i++) {
    tbody.rows[i].cells[0].innerHTML =
      '<a class="team" href="' +
      alWest[i].website +
      '" target="_blank"><img src="' +
      alWest[i].image +
      '" ></a> ' +
      alWest[i].team;
    tbody.rows[i].cells[1].innerHTML = alWest[i].wins;
    tbody.rows[i].cells[2].innerHTML = alWest[i].losses;
    tbody.rows[i].cells[3].innerHTML = alWest[i].pct;
  }

  tbody.rows[0].cells[4].innerHTML = "-";

  let gbSecond =
    (alWest[1].losses - alWest[0].losses + (alWest[0].wins - alWest[1].wins)) /
    2;

  if (gbSecond===0){
        tbody.rows[1].cells[4].innerHTML = "-";
    }else{
        tbody.rows[1].cells[4].innerHTML = gbSecond;
    };

  let gbThird =
    (alWest[2].losses - alWest[0].losses + (alWest[0].wins - alWest[2].wins)) /
    2;

  if (gbThird===0){
        tbody.rows[2].cells[4].innerHTML = "-";
    }else{
        tbody.rows[2].cells[4].innerHTML = gbThird;
    };

  let gbFourth =
    (alWest[3].losses - alWest[0].losses + (alWest[0].wins - alWest[3].wins)) /
    2;

  if (gbFourth===0){
        tbody.rows[3].cells[4].innerHTML = "-";
    }else{
        tbody.rows[3].cells[4].innerHTML = gbFourth;
    };

  let gbFifth =
    (alWest[4].losses - alWest[0].losses + (alWest[0].wins - alWest[4].wins)) /
    2;

  if (gbFifth===0){
        tbody.rows[4].cells[4].innerHTML = "-";
    }else{
        tbody.rows[4].cells[4].innerHTML = gbFifth;
    };
}

document.addEventListener("DOMContentLoaded", nlEastStandings);

document.getElementById("nlEast").addEventListener("click", nlEastStandings);

document
  .getElementById("nlCentral")
  .addEventListener("click", nlCentralStandings);

document.getElementById("nlWest").addEventListener("click", nlWestStandings);

document.getElementById("alEast").addEventListener("click", alEastStandings);

document
  .getElementById("alCentral")
  .addEventListener("click", alCentralStandings);

document.getElementById("alWest").addEventListener("click", alWestStandings);
