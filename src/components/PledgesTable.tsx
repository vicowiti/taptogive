



export default function PledgesTable() {
   return (
      <div className="">
         <div className="sm:flex sm:items-center">
            <div className="sm:flex-auto">
               <h1 className="text-xl font-semibold text-gray-900">Pledges</h1>
               <p className="mt-2 text-sm text-gray-700">A list of member Pledges.</p>
            </div>
            <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
               
            </div>
         </div>
         <div className="mt-8 flex flex-col">
            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
               <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                  <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                     <table className="min-w-full divide-y divide-gray-300">
                        <thead className="bg-gray-50">
                           <tr>
                              <th
                                 scope="col"
                                 className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6"
                              >
                                Giver Name
                              </th>
                              <th
                                 scope="col"
                                 className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Date Made
                              </th>
                              <th
                                 scope="col"
                                 className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                 Pledge Id
                              </th>
                              <th
                                 scope="col"
                                 className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                 Pledge Amount
                              </th>
                              <th
                                 scope="col"
                                 className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                 Amount Due
                              </th>
                              <th
                                 scope="col"
                                 className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Expected Sette Date
                              </th>
                               <th
                                 scope="col"
                                 className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Payment Reference
                              </th>
                               <th
                                 scope="col"
                                 className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                              >
                                Payment Status
                              </th>

                             
                           </tr>
                        </thead>
                        {/* <tbody className="divide-y divide-gray-200 bg-white">
                           {categories?.map((person) => (
                              <tr key={person.id}>
                                 <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                    {person.name}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {person.description}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {person.start_date}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {person.end_date}
                                 </td>
                                 <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                    {person.status ? 'Active' : 'Inactive'}
                                 </td>
                                 <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                    <a href="#" className="text-indigo-600 hover:text-indigo-900">
                                       <span className="sr-only">, {person.id}</span>
                                    </a>
                                 </td>
                              </tr>
                           ))}
                        </tbody> */}
                     </table>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}