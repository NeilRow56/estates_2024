import DoctorDetails from '@/components/frontend/DoctorDetails'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Plus } from 'lucide-react'
import React from 'react'

export default function DoctorPage() {
  return (
    <div className="h-screen bg-background">
      <div className="mx-auto max-w-4xl rounded-md border border-gray-200 bg-slate-50 shadow-lg dark:border-gray-600 dark:bg-slate-800">
        <div className="flex justify-center gap-4 p-6">
          <div className="flex w-[400px] flex-col text-lg leading-7">
            <h2 className="text-2xl font-bold">Vijal Patel, PA-C</h2>
            <p className="pt-1 text-xs uppercase text-gray-600 dark:text-gray-300">
              Adult Health
            </p>
            <div className="py-3">
              <p className="font-bold">In-person doctor visit</p>
              <p>3250 Lincoln Highway, Kendall Park, NJ 08824</p>
            </div>
          </div>
          <div className=" flex w-full items-center justify-end">
            <Avatar className="h-36 w-36 ">
              <AvatarImage src="/profile.jpg" />
              <AvatarFallback>DR</AvatarFallback>
            </Avatar>
          </div>
        </div>
        <DoctorDetails />
      </div>
      <div className="fixed bottom-0 w-full rounded-md bg-slate-100 px-6 py-8 shadow-2xl dark:bg-slate-700">
        <div className="mx-auto flex max-w-4xl items-center justify-between">
          <div>
            <p className="text-xl font-bold">£56</p>
            <p className="text-sm font-semibold">Tue, Mar 12 - 8:00 AM</p>
          </div>
          <Button className="primary px-16">
            <Plus className="mr-2 h-4 w-4" />
            Book
          </Button>
        </div>
      </div>
    </div>
  )
}
