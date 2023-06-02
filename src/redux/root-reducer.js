import { combineReducers } from '@reduxjs/toolkit';

import cardsReducer from './tweetsFollow/tweetsFollow-slice';
import filterReducer from './filter/filter-slice';

const rootReducer = combineReducers({
  cards: cardsReducer,
  filter: filterReducer,
});

export default rootReducer;
