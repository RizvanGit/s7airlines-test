"use client"
import { FC, useState, FocusEvent, useEffect } from "react"
import { useAppDispatch, useAppSelector } from "@/hooks"
import { setFlights } from "@/store/reducers"
import { useRouter } from "next/navigation"

import DatePicker from "../ui/DatePicker/DatePicker"
import Input from "../ui/Input"
import {Button} from "../ui/button"
import { Toaster, toast } from "sonner"

import { TicketProps } from "@/types"

const Search: FC = () => {
  const flightsValue = useAppSelector(state => state.flights.flights)
  const dispatch = useAppDispatch()
  const router = useRouter()
  
  
  const [searchValues, setSearchValues] = useState<TicketProps>(flightsValue)
  const isValid: boolean = !!searchValues.toCity && !!searchValues.fromCity && !!searchValues.flyoutDate

  const onDatePickHandler = (direction: string, date: string) => {
    if(direction === 'Туда'){
      setSearchValues(p => ({...p, flyoutDate: date}))
    } else if( direction === 'Обратно'){
      setSearchValues(p => ({...p, arrivalDate: date}))
    }
  }
  const onBlurHandler = (event: FocusEvent<HTMLInputElement>) => {
    const target = event.target
    if(target.value.length < 3) {
      target.classList.remove('border-transparent', 'border-green-500')
      target.classList.add('border-red-500')
      if(event.target.id === 'from') {
        setSearchValues(p => ({...p, fromCity: ''}))
      } else {
        setSearchValues(p => ({...p, toCity: ''}))
      }
      return;
    } 
    target.classList.remove('border-transparent', 'border-red-500')
    target.classList.add('border-green-500')
    if(event.target.id === 'from') {
      setSearchValues(p => ({...p, fromCity: target.value}))
    } else {
      setSearchValues(p => ({...p, toCity: target.value}))
    }
  }

  const onSubmitHandler = () => {
    if(!searchValues.toCity || !searchValues.flyoutDate || !searchValues.fromCity){
      toast.error('Ошибка! Заполните обязательные поля.')
      console.log('INVALID')
      return;
    }
    dispatch(setFlights(searchValues))
    router.push('/avia/info')
  }
  
  return (<div className="w-full h-full max-w-screen-xl mx-auto">
  <Toaster richColors/>
  <div className="mx-auto bg-gray-200 rounded-xl drop-shadow-3xl">
    <div className="bg-blue-500 p-4 w-full flex flex-wrap justify-center gap-3 rounded-t-xl text-black">
      <div>
        <Input id="from" value={searchValues.fromCity}  labelText="Откуда" onBlur={onBlurHandler}/>
      </div>
      <div>
        <Input id="to" value={searchValues.toCity}  labelText="Куда" onBlur={onBlurHandler}/>
      </div>
      <div>
           <DatePicker dateInit={searchValues.flyoutDate} label="Туда" getDate={onDatePickHandler}  upToDate={searchValues.arrivalDate}/>
      </div>
      <div>
           <DatePicker dateInit={searchValues.arrivalDate} label="Обратно" getDate={onDatePickHandler} fromDate={searchValues.flyoutDate}/>
      </div>
    </div>
    <div className="p-4 flex justify-center">
      <div className="max-w-[1055px] w-full flex justify-end">
        <Button className="bg-blue-500" onClick={onSubmitHandler} disabled={!isValid}>Найти билеты</Button>
      </div>
    </div>
  </div>
</div>
  )
}

export default Search
