import React from 'react'

interface Props{
    churchName?:string
    branchName?:string
}
const LoggedHeader = (props: Props) => {
  return (
    <div className="p-5 text-white shadow border rounded-lg bg-gradient-to-br from-green-900 to-[#083D77]">
      <h3>
        Welcome! <span className="font-bold text-green-600">Edwin</span>
      </h3>
      <h6>0700000000</h6>
      <p>Church: <span className="font-bold text-green-600">{props.churchName}</span></p>
      <p>Branch: <span className="font-bold text-green-600">{props.branchName}</span></p>
    </div>
  );
}

export default LoggedHeader