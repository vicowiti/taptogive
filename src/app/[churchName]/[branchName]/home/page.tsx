import React from 'react'
import LoggedLayout from '../../components/LoggedUser'
import LoggedHeader from '../../components/LoggedHeader'
import { PageProps } from '../../../../../.next/types/app/layout'
import { FaGift } from "react-icons/fa6";
import { categories } from '../../../../data';

const page = ({params}:PageProps) => {
  return (
    <LoggedLayout churchName={params.churchName} branchName={params.branchName}>
        <div>
            <LoggedHeader churchName={params.churchName} branchName={params.branchName}/>

            <div>
              <h6 className="font-bold text-green-600 text-center my-3 text-2xl">Give</h6>
            </div>

            <article className="grid grid-cols-3 gap-5">
              {categories.map(item => <div key={item.id} className="p-5 shadow flex border rounded-lg bg-gradient-to-br from-green-200 to-indigo-500 flex-col gap-3 justify-center items-center">
                <FaGift  className="text-green-600 text-2xl"/>
                <p className="font-bold text-white">{item.name}</p>
              </div>)}
            </article>
        </div>

    </LoggedLayout>
  )
}

export default page