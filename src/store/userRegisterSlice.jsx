/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

export const userRegSlice = createSlice({
  name: "userRegister",
  initialState: {
    userInfo: null,
    auth: false,
    authNumber: null,
  },
  reducers: {
    userReg(state, action) {
      state.userInfo = action.payload
    },
    userAuthorize(state) {
      state.auth = !state.auth
    },
    userAuthName(state, action) {
      state.authNumber = action.payload
    },
  },
})

export const { userReg, userAuthorize, userAuthName } = userRegSlice.actions

export default userRegSlice.reducer
