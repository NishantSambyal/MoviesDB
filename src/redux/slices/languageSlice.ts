import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import { LanguageEnum } from 'src/utils/enums';

export interface LanguageState {
  selectedLanguage: string;
}

const initialState: LanguageState = {
  selectedLanguage: LanguageEnum.en,
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state, action: PayloadAction<string>) => {
      state.selectedLanguage = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { changeLanguage } = languageSlice.actions;

export default languageSlice.reducer;
