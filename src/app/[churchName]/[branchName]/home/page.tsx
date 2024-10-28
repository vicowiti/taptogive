import React from 'react'
import LoggedLayout from '../../components/LoggedUser'
import LoggedHeader from '../../components/LoggedHeader'
import { PageProps } from '../../../../../.next/types/app/layout'

const page = ({params}:PageProps) => {
  return (
    <LoggedLayout churchName={params.churchName} branchName={params.branchName}>
        <div>
            <LoggedHeader churchName={params.churchName} branchName={params.branchName}/>
            <div className="h-[500px]"/>
            <div className="h-[500px]"/>
            <div className="h-[500px]"/>
            <div className="h-[500px]"/><div className="h-[500px]"/><div className="h-[500px]"/><div className="h-[500px]"/><div className="h-[500px]"/><div className="h-[500px]"/><div className="h-[500px]"/><div className="h-[500px]"/><div className="h-[500px]"/><div className="h-[500px]"/>
        </div>

    </LoggedLayout>
  )
}

export default page