export type TicketProps = {
  fromCity: string,
  toCity: string,
  flyoutDate: string,
  arrivalDate: string,
}

export type FlightTimeDataType = {
  morning: {
    start: string,
    end: string 
    },
  afternoon: {
    start: string,
    end: string
    },
  evening: {
    start: string,
    end: string
    }
}
