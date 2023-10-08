"use client"

import { FC, FocusEvent, useState } from "react"

type InputProps = {
  labelText?: string,
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void,
  id: string,
  value: string,
}

const Input: FC<InputProps> = ({labelText, onBlur, id, value}) => {
  const [inputText, setInputText] = useState(value)

        return <label className="text-sm text-white flex flex-col">
          <span className="text-sm">{labelText}</span>
          <input 
            type="text"
            id={id}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className={`px-[1rem] py-[0.5rem]
              h-[40px] rounded-md out outline-none focus:border-gray-500 border-transparent
              text-black font-medium border-2 
            `}
            onBlur={onBlur}
          />
        </label>
}

export default Input
