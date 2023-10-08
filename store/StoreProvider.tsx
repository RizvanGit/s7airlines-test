"use client"

import { store } from "."
import { Provider } from "react-redux"

type StoreProviderPropsType = {
  children: React.ReactNode
}

export default function StoreProvider({ children }: StoreProviderPropsType) {
  return <Provider store={store}>{children}</Provider>
}
