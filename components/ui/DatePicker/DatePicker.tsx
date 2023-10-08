"use client"

import { FC, useState } from "react"
import { CalendarIcon } from "@radix-ui/react-icons"
import { format } from "date-fns"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

type DatePickerProps = {
  label: string;
  getDate: (dir: string, date: string) => void;
  fromDate?: string;
  upToDate?: string;
  dateInit: string;
}

const DatePicker: FC<DatePickerProps> = function ({getDate, dateInit, label, fromDate, upToDate}) {
  const [date, setDate] = useState<Date | undefined>(dateInit ? new Date(dateInit) : undefined)
  const [isOpen, setIsOpen] = useState(false)
  
  const disabledDays = [
    {from: new Date('1900-01-01'), to:fromDate ? new Date(fromDate) : new Date()},
    {
      from: upToDate ? new Date(upToDate) : new Date('1900-01-01'), 
      to: upToDate ? new Date('2100-01-01') : new Date()
    }
  ]
  return (
  
        <label className="text-sm text-white flex flex-col">
           {label}
    <Popover open={isOpen}>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          onClick={() => setIsOpen(true)}
          className={cn(
            "w-[255px] h-[40px] justify-start text-left font-normal",
            !date && "text-white"
          )}
        >
          <CalendarIcon className={`mr-2 h-4 w-4 ${date ? 'text-green-300' : 'text-red-800'}`} />
          {date ? format(date, "P") : <span className="hover:text-muted-foreground text-gray-300 italic">Выберите дату</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(d) =>{
            setDate(d)
            const stringfiedDate = d ? format(d, 'P') : '';
            getDate(label, stringfiedDate)
            setIsOpen(false)
          }}
          disabled={disabledDays}
          initialFocus
        />
      </PopoverContent>
    </Popover>
        </label>
  )
}

export default DatePicker
