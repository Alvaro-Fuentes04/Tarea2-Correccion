const CARD_TYPES = {
  BOMB: 'Bomb',
  DEFUSE: 'Defuse',
  SKIP_TURN: 'Skip Turn',
  NOPE: 'Nope',
  POINTS: 'Points'
};

// Card Quantities
const CARD_QUANTITIES = {
  [CARD_TYPES.BOMB]: 4,
  [CARD_TYPES.DEFUSE]: 6,
  [CARD_TYPES.SKIP_TURN]: 10,
  [CARD_TYPES.NOPE]: 5,
  [CARD_TYPES.POINTS]: 35
};

// Game Configuration
const GAME_CONFIG = {
  MIN_POINT_CARD_VALUE: 1,
  MAX_POINT_CARD_VALUE: 10
};
