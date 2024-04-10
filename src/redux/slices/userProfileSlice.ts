import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

export interface UserProfileState {
  userInfo?: string;
}

const initialState: UserProfileState = {
  userInfo: undefined,
};

export const userProfileSlice = createSlice({
  name: 'userProfile',
  initialState,
  reducers: {
    loginUser: (state, action: PayloadAction<string>) => {
      state.userInfo = action.payload;
    },
    logoutUser: () => {
      return initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loginUser, logoutUser } = userProfileSlice.actions;

export default userProfileSlice.reducer;
