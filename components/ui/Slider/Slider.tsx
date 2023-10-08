"use client"

import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import Image from "next/image"

import PictureOne from "../../../public/assets/pic1.jpg"
import PictureTwo from "../../../public/assets/pic2.png"
import PictureThree from "../../../public/assets/pic3.jpg"
import { Button } from "../button"
import Link from "next/link"

export default function Slider() {
  const [ref] = useKeenSlider<HTMLDivElement>({ loop: true })

  return (
    <div>
      <div ref={ref} className="keen-slider max-w-screen-xl mx-auto">
        <div className="keen-slider__slide number-slide1">
          <Image
            src={PictureOne}
            alt="banner1"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image
            src={PictureTwo}
            alt="banner2"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
        <div className="keen-slider__slide number-slide2">
          <Image
            src={PictureThree}
            alt="banner3"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
      <div className="flex justify-center relative">
        <Button className="bg-blue-600 text-xl p-6 absolute top-[-25px]">
          <Link href="/avia">Купить билеты</Link>
        </Button>
      </div>
    </div>
  )
}
