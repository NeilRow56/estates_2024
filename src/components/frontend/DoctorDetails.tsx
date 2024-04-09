'use client'

import { useState } from 'react'
import { Button } from '../ui/button'

export default function DoctorDetails() {
  const [isActive, setIsActive] = useState('availability')
  return (
    <div className="bg-blue-200 text-slate-50 dark:bg-blue-600">
      <div className="flex w-full gap-1 p-2">
        <Button
          onClick={() => setIsActive('!availability')}
          variant="secondary"
          className={
            isActive === 'availability'
              ? 'flex w-full bg-blue-800 text-white hover:text-slate-800'
              : ' flex w-full bg-primary'
          }
        >
          Service Details
        </Button>
        <Button
          onClick={() => setIsActive('availability')}
          variant="default"
          className={
            isActive === 'availability'
              ? 'flex w-full bg-primary'
              : ' flex w-full bg-blue-800 text-white hover:text-slate-800'
          }
        >
          Availability
        </Button>
      </div>

      {isActive === '!availability' ? (
        <div className="pt-8">Service Details Component</div>
      ) : (
        <div className="pt-8">Availability Details Component</div>
      )}
    </div>
  )
}
