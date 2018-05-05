export const GAME_STATUS = {
  ON_GOING: 1,
  SUCCESS: 2,
  FAIL: 3
};

export const GAMES_LIST = [
  {
    user1: '1',
    user2: '2',
    image: '',
    word: '',
    hangGameId: '',
    failures: 1,
    status: GAME_STATUS.ON_GOING
  }
];

export const USERS_LIST = [
  {
    name: 'Maor',
    id: '1'
  }, {
    name: 'Gal',
    id: '2'
  }, {
    name: 'Avi',
    id: '3'
  }
];

export const HANG_GAMES = [
  {
    games: [
      GAMES_LIST[0]
    ],
    user1: '1',
    user2: '2'
  }
];