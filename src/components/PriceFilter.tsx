import { AiFillCaretUp } from "react-icons/ai";
import { AiFillCaretDown } from "react-icons/ai";

export function PriceFilter() {
    return (
        <>
            <div className="border-2 mt-5 border-gray-600 px-4 rounded-sm">
                <span className="text-xl text-gray-700 mr-6">Sort</span>
                <button type="button" className="scale-150 border-x-2 m-0 p-0 border-gray-600 px-4 group inline-flex justify-center text-sm font-medium hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                    <AiFillCaretUp className="text-zinc-600 active:-translate-y-1  transition-all ease-in scale-150 p-0 m-0"/>
                </button>
                   <button type="button" className="text-zinc-600 px-4 ml-5  scale-150 group inline-flex justify-center text-sm font-medium hover:text-gray-900" id="menu-button" aria-expanded="false" aria-haspopup="true">
                   <AiFillCaretDown className="active:-translate-y-1  transition-all ease-in scale-150 p-0 m-0"/> 
                </button>   
            </div>

        </>

    )
}