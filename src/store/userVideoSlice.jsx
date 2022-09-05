/* eslint-disable no-param-reassign */
import { createSlice } from "@reduxjs/toolkit"

export const userVideoSlice = createSlice({
  name: "userVideo",
  initialState: {
    userVideo: null,
  },
  reducers: {
    userVideoLoad(state, action) {
      state.userVideo = action.payload
    },
  },
})

export const { userVideoLoad } = userVideoSlice.actions

export default userVideoSlice.reducer
