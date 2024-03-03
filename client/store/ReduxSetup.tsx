'use client'
import { Provider } from "react-redux"
import store from "./index"
import { ReactNode } from "react"
type PropTypes = {
    children: ReactNode
}
const ReduxSetup = ({children}: PropTypes) => {
  return (
    <Provider store={store}>{children}</Provider>
  )
}

export default ReduxSetup