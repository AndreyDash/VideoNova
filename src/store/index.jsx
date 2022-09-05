/* eslint-disable no-param-reassign */
import React from "react"
import PropTypes from "prop-types"
import { configureStore, createSlice } from "@reduxjs/toolkit"
import { Provider } from "react-redux"
import { userRegSlice } from "./userRegisterSlice"
import { userVideoSlice } from "./userVideoSlice"

const siteInfoSlice = createSlice({
  name: "siteInfo",
  initialState: {
    test: "hello",
  },
})

export const { userReg, userAuthorize, userAuthName } = userRegSlice.actions
export const { userVideoLoad } = userVideoSlice.actions

export default userRegSlice

export const store = configureStore({
  reducer: {
    siteInfo: siteInfoSlice.reducer,
    userRegister: userRegSlice.reducer,
    userVideo: userVideoSlice.reducer,
  },
})

export function Store(props) {
  const { children } = props
  return <Provider store={store}>{children}</Provider>
}

Store.propTypes = {
  /**
   * Content inside block could be any react node
   */
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}
