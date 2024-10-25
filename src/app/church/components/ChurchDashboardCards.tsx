
import { CursorArrowRaysIcon, EnvelopeOpenIcon, UsersIcon } from '@heroicons/react/24/outline'

const stats = [
  { id: 1, name: 'YTD Giving', stat: 'KES 5M', icon: UsersIcon, change: '37.8%', changeType: 'increase' , bg: "#deffed" },
  { id: 2, name: 'Giving This Quarter', stat: 'KES 1M', icon: EnvelopeOpenIcon, change: '2%', changeType: 'decrease', bg:"#cbf2ff" },
  { id: 3, name: 'Giving This Month', stat: 'KES 200K', icon: CursorArrowRaysIcon, change: '11%', changeType: 'increase', bg:"#ffb5dc" },
  { id: 4, name: 'Giving Last Week', stat: 'KES 52K', icon: CursorArrowRaysIcon, change: '8%', changeType: 'increase', bg:"#da94fd" },
   { id: 5, name: 'YTD Pledges', stat: 'KES 52K', icon: CursorArrowRaysIcon, change: '8%', changeType: 'increase', bg:"#da94fd" },
]


export default function ChurchDashboardCards() {
  return (
    <div>
    

      <dl className="mt-5 grid grid-cols-1 items-center justify-center gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {stats.map((item) => (
          <div key={item.id} className="shadow p-5 rounded-lg bg-white">
           <div className="flex justify-center items-center mb-3">
             <span style={{backgroundColor:item.bg}} className="p-3 w- flex justify-center items-center rounded-full ">
              <item.icon className="h-12"/>
            </span>
           </div>
            <article className="text-center">
              <h6>{item.name}</h6>
              <h6 className="text-black font-bold text-xl">{item.stat}</h6>
            </article>
          </div>
        ))}
      </dl>
    </div>
  )
}
