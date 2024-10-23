const people = [
  {
    name: "Citam",
    location: "Valley Road",
    email: "citamvalleyroad@gmail.com",
    phone: "+254788908777",
    contact: "Joe Doe",
    createdAt: "23/10/2024",
    status: "Active"
  },
  // More people...
];

export default function ChurchTables() {
  return (
    <div className="mt-5 bg-white p-3 shadow rounded-lg">
      <div className="sm:flex sm:items-center">
        <div className="sm:flex-auto">
          <h1 className="text-xl font-bold ">Manage Churches</h1>
          <p className="mt-2 text-sm text-gray-700">
            A list of all the churches registered in the system
          </p>
        </div>
        <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-transparent bg-[#083D77] px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-[#083D77] focus:outline-none 2   sm:w-auto"
          >
            Add Church
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="inline-block  min-w-full py-2 align-middle md:px-6 lg:px-8">
            <div className="overflow-auto shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
              <table className="min-w-full overflow-auto divide-y divide-gray-300">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="py-3.5 pl-4 pr-3 text-left text-sm font-bold text-gray-900 sm:pl-6"
                    >
                      Church Name
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      Location
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      Telephone
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      Email
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      Contact Person
                    </th>
                    <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      Date Created
                    </th>
                     <th
                      scope="col"
                      className="px-3 py-3.5 text-left text-sm font-bold text-gray-900"
                    >
                      Status
                    </th>
                  </tr>
                 
                </thead>
                <tbody className="bg-white">
                  {people.map((person, personIdx) => (
                    <tr
                      key={person.email}
                      className={personIdx % 2 === 0 ? undefined : "bg-gray-50"}
                    >
                      <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                        {person.name}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.location}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.phone}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.email}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.contact}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.createdAt}
                      </td>
                      <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                        {person.status}
                      </td>
                      
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
