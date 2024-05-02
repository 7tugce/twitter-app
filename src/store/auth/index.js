import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentAccount: {
    id: "1",
    username: "Tuğçe",
    fullname: "Tuğçe Özelmaci",
    avatar: "../../../public/tigey.PNG"
  },
  accounts: [{
          id: "1",
          username: "Tuğçe",
          fullname: "Tuğçe Özelmaci",
          avatar: "../../../public/tigey.PNG"
        },{
          id: "2",
          username: "Tuçe",
          fullname: "Tuçe",
          avatar: "../../../public/biz.PNG"
        },]
};

const auth = createSlice({
  name: "auth",
  initialState,
  reducers: {
    _addAccount: (state, action) => {
      state.accounts.push(action.payload);
    },
    _removeAccount: (state, action) => {
      state.accounts = state.accounts.filter(account => account.id !== action.payload);
      if (state.currentAccount && action.payload === state.currentAccount.id) {
        state.currentAccount = false;
      }
    },
    _setCurrentAccount: (state, action) => {
      state.currentAccount = action.payload;
    }
  }
});

export const { _addAccount, _removeAccount, _setCurrentAccount } = auth.actions;
export default auth.reducer;
