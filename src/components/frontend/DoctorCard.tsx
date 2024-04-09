import { Stethoscope, Video } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export default function DoctorCard({
  isInPerson = false,
}: {
  isInPerson?: boolean
}) {
  const timestamps = [
    {
      time: '8.30',
      period: 'am',
    },
    {
      time: '10.30',
      period: 'am',
    },
    {
      time: '11.30',
      period: 'am',
    },
    {
      time: '1.30',
      period: 'pm',
    },
    {
      time: '2.00',
      period: 'pm',
    },
    {
      time: '2.30',
      period: 'pm',
    },
    {
      time: '4.00',
      period: 'pm',
    },
  ]
  return (
    <div className="  mt-8 flex max-w-[400px]  flex-col rounded-md border border-gray-200 bg-gray-50 pl-4 pt-4 transition-all duration-300 hover:border-gray-400 hover:bg-gray-100 dark:bg-slate-800 dark:text-slate-50 dark:hover:bg-slate-700">
      <Link href="/doctors/slug">
        <h2 className="text-2xl font-bold uppercase tracking-widest">
          Vojal Patel, PA-C
        </h2>
        {isInPerson && <span>3250 Lincoln Highway, Kendal Park, NJ 06824</span>}
        <div className="flex  items-center px-3 py-6">
          <div className="relative ">
            <Avatar className="h-24 w-24 ">
              <AvatarImage src="/profile.jpg" />
              <AvatarFallback>DR</AvatarFallback>
            </Avatar>
            {!isInPerson && (
              <p className=" absolute bottom-0 right-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-200 text-blue-700">
                <Video className="h-6 w-6" />
              </p>
            )}
          </div>
          <div className="flex w-full flex-col items-center  gap-2 ">
            <p className="flex  items-center">
              <Stethoscope className="mr-2 h-4 w-4 flex-shrink-0" />
              <span>Family Medicine</span>
            </p>
            <p className="dark: rounded-md bg-green-200 px-6 py-3 uppercase text-slate-600">
              Available today
            </p>
          </div>
        </div>
      </Link>
      <div className="border-t border-gray-400 pt-6">
        <h3 className="flex items-center justify-between gap-4 px-2">
          <span className="text-gray-600 dark:text-slate-50">
            Tue, March 12
          </span>
          <span className="font-bold">£127</span>
        </h3>
        <div className="grid grid-cols-3 p-2 ">
          {timestamps.slice(0, 5).map((item, i) => {
            return (
              <Link
                className="m-2 h-8 rounded-sm bg-blue-600  px-2 pt-2 text-center text-secondary dark:text-slate-50"
                key={i}
                href="/"
              >
                {' '}
                {item.time}
                {item.period}
              </Link>
            )
          })}
          <Link
            className="m-2 h-8 rounded-sm bg-blue-900  pt-2 text-center text-secondary dark:text-slate-50 "
            href="/doctors/slug"
          >
            More times
          </Link>
        </div>
      </div>
    </div>
  )
}
