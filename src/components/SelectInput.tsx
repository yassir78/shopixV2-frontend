// @flow
import * as React from 'react';

export function SelectInput() {
    return (
      <div className="relative">
        <select className="block appearance-none  bg-white border-2 border-gray-300  text-gray-700 py-2 px-4 pr-8 rounded-lg   leading-tight focus:outline-none focus:bg-white focus:border-gray-500" placeholder="Brand" id="grid-state">
          <option>Missouri</option>
          <option>Texas</option>
        </select>
    </div>
    );
};