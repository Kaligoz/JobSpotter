"use client"

import { FC, useState } from 'react'
import Link from 'next/link'

interface DropdownMenuProps {
  NameOfUser: string,
}

const DropdownMenu: FC<DropdownMenuProps> = ({ NameOfUser }) => {
  const [isOpen, setIsOpen] = useState(false)    

  return (
    <div>
      <button className='relative inline-block' onClick={() => setIsOpen(prev => !prev)}>{NameOfUser}</button>
      {isOpen && 
        <div className='flex flex-col absolute mt-2 right-0 border border-[#33474D4D] rounded-md text-[#969BBB] m-2 p-2'>
          <div className="absolute left-1/2 top-0 translate-x-[-50%] translate-y-[-100%] w-0 h-0 border-x-8 border-x-transparent border-b-12 border-b-[#B3C6CC]"></div>
          <div className="absolute left-1/2 top-0 translate-x-[-50%] translate-y-[-100%] w-0 h-0 border-x-8 border-x-transparent border-b-12 border-b-[#B3C6CC]"></div>
          <Link href="/vacancies" className=''>Пошук ваканцій</Link>
          <Link href="/profile">Профіль</Link>
          <Link href="/">Для шукача</Link>
          <Link href="/">Для роботодавця</Link>
        </div>
      }
    </div>
  )
}

export default DropdownMenu