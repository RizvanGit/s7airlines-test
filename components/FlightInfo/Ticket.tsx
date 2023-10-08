"use client"
import { FC, MouseEvent, useState } from "react";
import { Button } from "../ui/button";
import {BsBag} from 'react-icons/bs'
import {LuLuggage} from 'react-icons/lu'

import Image from "next/image";
import Logo from '../../public/s7logo2.png'

import flightTimeData from "@/data";

type TicketProps = {
  fromCity: string;
  toCity: string;
  flyoutDate: string;
  arrivalDate?: string;
}


const Ticket: FC<TicketProps> = ({fromCity, toCity, flyoutDate}) => {
  const [flightTime, setFlightTime] = useState<typeof flightTimeData.morning>(flightTimeData.morning)
  
  const onChangeFlightTimeHandler = (e: MouseEvent<HTMLButtonElement>) => {
    const time = e.currentTarget.id as "morning" | "afternoon" | "evening";
    setFlightTime(flightTimeData[time])
  }
  return <>
    <div className="flex flex-col flex-1 w-full even:border-t-2 border-dotted">
      <div className="px-4 py-[0.5px] text-sm bg-cyan-600 text-white w-[130px] rounded-tl-xl rounded-br-xl">Нeвозвратный</div>
      <div className="flex px-4 py-2 flex-col md:flex-row">
        <div className="flex flex-col items-center justify-center px-8">
          <Image src={Logo} alt="Logo S7" width={40} height={40} />
          <p>S7 Airlines</p>
        </div>
        <div className="flex-1 flex flex-col gap-5 relative">
          <div className="flex">
            <div className="flex-1 flex gap-5 flex-col sm:flex-row justify-center">
              <div className="text-center">
                <div className="text-2xl font-bold sm:w-[80px]">{flightTime.start}</div>
                <div className="flex flex-col text-xs">
                  <div className="font-bold">{fromCity}</div>
                  <div>{flyoutDate}</div>
                </div>
              </div>
              <div className="flex-1 px-5 flex flex-col gap-2">
                <div className="text-sm text-gray-500/80 flex justify-between">
                  <div>SVO</div>
                  <div>ROV</div>
                </div>
                <div className="flex items-center">
                  <div className="h-2 w-2 rounded-full bg-gray-500/80"></div>
                  <div className="flex-1 w-full h-[2px] bg-gray-500/80"></div>
                  <div className="h-2 w-2 rounded-full bg-gray-500/80"></div>
                </div>
                <div className="flex justify-center text-sm text-gray-500/80">
                  В Пути 1 ч 55 мин
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold sm:w-[80px]">{flightTime.end}</div>
                <div className="flex flex-col text-xs">
                  <div className="font-bold">{toCity}</div>
                  <div>{flyoutDate}</div>
                </div>
              </div>
            </div>
            <div className="pl-4 pr-2  absolute top-[-50px] right-3 md:top-[-20px] flex text-blue-500">
              <BsBag className="text-xl"/>
              <LuLuggage className="text-2xl"/>
            </div>
          </div>
          <div className="flex gap-3">
            <Button id="morning" onClick={onChangeFlightTimeHandler} variant="outline" className="px-2 py-1 text-sm font-medium border-2 border-gray-200 rounded-xl">{flightTimeData.morning.start} - <span className="text-xs">{flightTimeData.morning.end}</span></Button>
            <Button id='afternoon' onClick={onChangeFlightTimeHandler} variant="outline" className="px-2 py-1 text-sm font-medium border-2 border-gray-200 rounded-xl">{flightTimeData.afternoon.start} - <span className="text-xs">{flightTimeData.afternoon.end}</span></Button>
            <Button id='evening' onClick={onChangeFlightTimeHandler} variant="outline" className="px-2 py-1 text-sm font-medium border-2 border-gray-200 rounded-xl">{flightTimeData.evening.start} - <span className="text-xs">{flightTimeData.evening.end}</span></Button>
          </div>
        </div>
      </div>
    </div>
  </>
}

export default Ticket
