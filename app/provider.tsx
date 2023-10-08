"use client"

import { StoreProvider } from "@/store"
import { PropsWithChildren } from "react"

type ProviderProps = PropsWithChildren

export default function Providers({children}: PropsWithChildren) {

  return (
    <>
      <StoreProvider>
        {children}
      </StoreProvider>
    </>
  )
}
