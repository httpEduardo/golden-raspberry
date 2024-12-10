export const MOCK_YEARS_WITH_MULTIPLE_WINNERS = [
  { year: 1986, winnerCount: 2 },
  { year: 1990, winnerCount: 2 },
  { year: 2015, winnerCount: 2 },
];

export const MOCK_STUDIOS_WITH_WIN_COUNT = [
  { name: 'Columbia Pictures', winCount: 6 },
  { name: 'Paramount Pictures', winCount: 6 },
  { name: 'Warner Bros.', winCount: 5 },
];

export const MOCK_MAX_MIN_INTERVAL_FOR_PRODUCERS = {
  min: [
    {
      producer: 'Joel Silver',
      interval: 1,
      previousWin: 1990,
      followingWin: 1991,
    },
  ],
  max: [
    {
      producer: 'Matthew Vaughn',
      interval: 13,
      previousWin: 2002,
      followingWin: 2015,
    },
  ],
};

export const MOCK_MOVIES = [
  { id: 1, year: 1980, title: "Can't Stop the Music", winner: true },
  { id: 2, year: 1980, title: 'Cruising', winner: false },
  { id: 3, year: 1980, title: 'The Formula', winner: false },
  { id: 4, year: 1980, title: 'Friday the 13th', winner: false },
  { id: 5, year: 1980, title: 'The Nude Bomb', winner: false },
];
