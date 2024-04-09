import { RegisterForm } from '@/components/frontend/auth/RegisterForm'
import Image from 'next/image'
import React from 'react'

export default function RegisterPage() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="hidden bg-slate-400 shadow-md sm:w-[350px] md:flex">
          <Image
            src="/register_pic2.jpg"
            width={150}
            height={350}
            sizes="50vw"
            alt="hero"
            priority
            className="h-auto w-[350px] max-w-full object-cover lg:ml-auto"
          />
        </div>
        <div>
          <RegisterForm />
        </div>
      </div>
    </div>
  )
}
