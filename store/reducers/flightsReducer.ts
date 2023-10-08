import { TicketProps } from "@/types"
import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface FlightsState {
  flights: TicketProps
}

let flightsInitValue: TicketProps = {
  fromCity: "",
  toCity: "",
  flyoutDate: "",
  arrivalDate: "",
}

if(typeof window !== "undefined"){
  let stored: string | null = '' 
  stored = localStorage.getItem("flightData")
  if (stored) {
    flightsInitValue = JSON.parse(stored)
  }
}

const initialState: FlightsState = {
  flights: flightsInitValue,
}

export const counterSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    setFlights: (state, action: PayloadAction<TicketProps>) => {
      if(typeof window !== "undefined"){
        localStorage.setItem("flightData", JSON.stringify(action.payload))
      }
      state.flights = {
        fromCity: action.payload.fromCity,
        toCity: action.payload.toCity,
        flyoutDate: action.payload.flyoutDate,
        arrivalDate: action.payload.arrivalDate,
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { setFlights } = counterSlice.actions

export default counterSlice.reducer
