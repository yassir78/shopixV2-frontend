// @flow
import * as React from 'react';
import {ChangeEventHandler} from 'react';

type Props = {
    name: string,
    label: string,
    type: string,
    value: string,
    placeHolder: string,
    onChange: ChangeEventHandler<HTMLInputElement>,
    error: string,
    clearError: (key: string) => void,
};

export function Input({name, label, type, value, placeHolder, onChange, error, clearError}: Props) {

    return (
        <div className="my-5">
            <label htmlFor={name} className="sr-only">{label}</label>
            <input id={name}
                   name={name}
                   type={type}
                   value={value}
                   onChange={onChange}
                   className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                   placeholder={placeHolder}/>
            {error &&
            <div className="bg-red-100 my-5 border border-red-400 text-red-700 px-4 py-1 rounded relative" role="alert">
                <span className="block sm:inline">{error}</span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-1" onClick={() => clearError(name)}>

                  <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg"
                       viewBox="0 0 20 20"><title>Close</title>
                      <path
                          d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/>
                  </svg>
                </span>
            </div>}
        </div>

    )
        ;
};