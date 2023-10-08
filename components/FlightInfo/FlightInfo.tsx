"use client"

import { FC } from "react"
import Ticket from "./Ticket"
import { useAppSelector } from "@/hooks"

const FlightInfo: FC = () => {
  const { fromCity, flyoutDate, toCity, arrivalDate } = useAppSelector(
    (state) => state.flights.flights
  )

  return (
    <div className="rounded-xl drop-shadow-3xl  bg-white flex flex-col sm:flex-row">
      <div className="flex flex-wrap flex-col flex-1 items-center sm:flex-row sm:items-stretch">
        <Ticket fromCity={fromCity} toCity={toCity} flyoutDate={flyoutDate} />
        {arrivalDate ? (
          <Ticket
            fromCity={toCity}
            toCity={fromCity}
            flyoutDate={arrivalDate}
          />
        ) : null}
      </div>
      <div
        className={`flex justify-center items-center border-t-2 border-t-gray-300
                    sm:border-l-2 sm:border-l-gray-300 px-8 py-5 text-2xl
                    font-bold sm:border-t-0 w-full sm:w-[190px] sm:py-2`}
      >
        {arrivalDate ? <p>9300 P.</p> : <p>4150 P.</p>}
      </div>
    </div>
  )
}

export default FlightInfo
