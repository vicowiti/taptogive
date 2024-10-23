import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/20/solid'
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline'

const stats = [
  { id: 1, name: 'YTD Giving', stat: 'KES 5M', icon: UsersIcon, change: '37.8%', changeType: 'increase' , bg: "#deffed" },
  { id: 2, name: 'Giving This Quarter', stat: 'KES 1M', icon: EnvelopeOpenIcon, change: '2%', changeType: 'decrease', bg:"#cbf2ff" },
  { id: 3, name: 'Giving This Month', stat: 'KES 200K', icon: CursorArrowRaysIcon, change: '11%', changeType: 'increase', bg:"#ffb5dc" },
  { id: 4, name: 'Giving Last Week', stat: 'KES 52K', icon: CursorArrowRaysIcon, change: '8%', changeType: 'increase', bg:"#da94fd" },
]

function classNames(...classes:string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function DashboardCards() {
  return (
    <div>
    

      <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((item) => (
          <div
            key={item.id}
            className="relative overflow-hidden rounded-lg bg-white px-4 pt-5 pb-12 shadow sm:px-6 sm:pt-6"
          >
            <dt>
              <div style={{backgroundColor: item.bg}} className="absolute   p-3 rounded-full">
                <item.icon className="h-6 w-6 " aria-hidden="true" />
              </div>
              <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
            </dt>
            <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
              <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
              <p
                className={classNames(
                  item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                  'ml-2 flex items-baseline text-sm font-semibold'
                )}
              >
                {item.changeType === 'increase' ? (
                  <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                ) : (
                  <ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                )}

                <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                {item.change}
              </p>
              <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                
              </div>
            </dd>
          </div>
        ))}
      </dl>
    </div>
  )
}
