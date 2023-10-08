"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

import s7Logo from "../public/s7logo.png"
import { usePathname } from "next/navigation"

const Header = () => {
  const pathname = usePathname()
  return (
    <div className="flex justify-between items-center px-5 py-2 max-w-screen-xl mx-auto">
      <div>
        <Image src={s7Logo} alt="Logo" width={120} height={60} />
      </div>
      <nav>
        <ul className="flex gap-2">
          <li>
            {pathname === "/" ? null : (
              <Button asChild className="bg-blue-600">
                <Link href="..">Home</Link>
              </Button>
            )}
          </li>
          <li>
            <Button asChild>
              <Link href="https://github.com/RizvanGit/s7airlines-test">GitHub</Link>
            </Button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
