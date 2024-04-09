import Link from 'next/link'
import { Label } from '../ui/label'
import { Switch } from '../ui/switch'
import SectionHeading from './SectionHeading'
import DoctorCard from './DoctorCard'
import { Map } from 'lucide-react'

export default function DoctorsList({
  title = 'Telehealth vist',
  isInPerson,
  className = 'bg-pink-100 dark:bg-slate-500 py-8 lg:py-24 container mx-auto',
}: {
  title?: string
  isInPerson?: boolean
  className?: string
}) {
  const doctors = [
    { name: 'John' },
    { name: 'John' },
    { name: 'John' },
    { name: 'John' },
    { name: 'John' },
  ]
  return (
    <div className={className}>
      <SectionHeading title={title} />

      <div className=" flex items-center justify-between">
        {isInPerson ? (
          <Link className="flex items-center gap-2 text-blue-600" href="/">
            <Map className="flex-shrink-o h-6 w-6" />
            <span> Map View</span>
          </Link>
        ) : (
          <div className=" flex h-10 items-center space-x-2">
            <Switch className="dark:bg-slate-300" id="2_hours" />

            <Label className="font-bold text-red-600" htmlFor="2_hours">
              Within 2 hours
            </Label>
          </div>
        )}

        <Link
          className="border border-orange-600 px-4 py-2 text-primary"
          href="/"
        >
          See All{' '}
        </Link>
      </div>
      <div className="mt-4 grid grid-cols-1 gap-4  pl-5 md:grid-cols-2  lg:grid-cols-3">
        {doctors.map((doctor, i) => {
          return <DoctorCard key={1} isInPerson={isInPerson} />
        })}
      </div>
    </div>
  )
}
