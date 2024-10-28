import React from 'react'
import LoggedLayout from '../../components/LoggedUser'
import LoggedHeader from '../../components/LoggedHeader'

const page = () => {
  return (
    <LoggedLayout>
        <div>
            <LoggedHeader/>
        </div>
    </LoggedLayout>
  )
}

export default page