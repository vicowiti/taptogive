"use client";
import React from "react";

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/
// import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

interface Props {
  label: string;
  type: string;
  required: boolean;
  name: string;
}

export default function AdminInput(props: Props) {
  return (
    <div>
      <label
        htmlFor={props.name}
        className="block text-sm font-medium text-gray-700"
      >
        {props.label}
      </label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <input
          type={props.type}
          name={props.name}
          id={props.name}
          required={props.required}
          className="block w-full rounded-md border p-2 border-re-300 pr-10 text-red-900 placeholder-red-300 focus:border-red-500 focus:outline-none shadow focus:ring-red-500 sm:text-sm"
        //   placeholder="you@example.com"
          
          aria-invalid="true"
          aria-describedby="email-error"
        />
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          {/* <ExclamationCircleIcon
            className="h-5 w-5 text-red-500"
            aria-hidden="true"
          /> */}
        </div>
      </div>
      {/* <p className="mt-2 text-sm text-red-600" id="email-error">
        Your password must be less than 4 characters.
      </p> */}
    </div>
  );
}
