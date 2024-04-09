import { LoginForm } from '@/components/frontend/auth/LoginForm'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function LoginPage() {
  return (
    <div className="">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="hidden bg-slate-400 shadow-md sm:w-[350px] md:flex">
          <Image
            src="/login_pic.jpg"
            width={350}
            height={250}
            sizes="50vw"
            alt="hero"
            priority
            className="h-auto w-[350px] max-w-full object-cover lg:ml-auto"
          />
        </div>
        <div>
          <LoginForm />
        </div>
      </div>
    </div>
  )
}
