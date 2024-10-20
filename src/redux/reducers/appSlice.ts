import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getManyRandomElements } from '../../utils';

export type PlaceState = {
  id: number;
  name: string;
  location: string;
  yearConstructed: string;
  description: string;
  image: string;
  keyFacts: string[];
};

type AppState = {
  places: PlaceState[];
  highlights: PlaceState[];
  visited: number[];
};

const initialState: AppState = {
  places: [],
  highlights: [],
  visited: []
};

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPlaces: (state, action: PayloadAction<PlaceState[]>) => {
      state.places = action.payload;
      state.highlights = getManyRandomElements(action.payload, 5);
    },
    appendVisitedPlace: (state, action: PayloadAction<number>) => {
      const placeId = action.payload;
      if (!state.visited.includes(placeId)) {
        state.visited.push(placeId);
      }
    },
    removeVisitedPlace: (state, action: PayloadAction<number>) => {
      const placeId = action.payload;
      state.visited = state.visited.filter((id) => id !== placeId);
    }
  }
});

export const { setPlaces, appendVisitedPlace, removeVisitedPlace } =
  appSlice.actions;
export default appSlice.reducer;
