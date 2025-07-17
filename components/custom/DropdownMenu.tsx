"use client"

import { FC, useState } from 'react'
import { Button } from '../ui/button'

interface DropdownMenuProps {
  NameOfUser: string,
}

const DropdownMenu: FC<DropdownMenuProps> = ({ NameOfUser }) => {
  const [isOpen, setIsOpen] = useState(false)    

  return (
    <div>
      <button className='relative inline-block' onClick={() => setIsOpen(prev => !prev)}>{NameOfUser}</button>
      {isOpen && 
        <div className='flex flex-col absolute mt-2 right-0'>
          <Button>Пошук ваканцій</Button>
          <Button>Профіль</Button>
          <Button>Для шукача</Button>
          <Button>Для роботодавця</Button>
        </div>
      }
    </div>
  )
}

export default DropdownMenu