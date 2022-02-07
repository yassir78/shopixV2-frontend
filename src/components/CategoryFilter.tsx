export function CategoryFilter() {
    return (

        <form className="hidden lg:block">
            <div className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                    <button type="button" className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-0" aria-expanded="false">
                        <span className="font-medium text-gray-900"> Brand </span>
                        <span className="ml-6 flex items-center">

                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                            </svg>

                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>
                </h3>
                <div className="pt-6" id="filter-section-0">
                    <div className="space-y-4">
                        <div className="flex items-center ">
                            <input id="filter-brand-0" name="brand[]" value="white" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-brand-0" className="ml-3 text-sm text-gray-600"> Burberry </label>
                        </div>

                        <div className="flex items-center">
                            <input id="filter-brand-1" name="brand[]" value="beige" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-brand-1" className="ml-3 text-sm text-gray-600"> Bvlgari </label>
                        </div>

                        <div className="flex items-center">
                            <input id="filter-brand-2" name="brand[]" value="blue" type="checkbox" checked className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-brand-2" className="ml-3 text-sm text-gray-600"> Carolina Herrera </label>
                        </div>

                        <div className="flex items-center">
                            <input id="filter-brand-3" name="brand[]" value="brown" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-brand-3" className="ml-3 text-sm text-gray-600"> Chanel </label>
                        </div>

                        <div className="flex items-center">
                            <input id="filter-brand-4" name="brand[]" value="green" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-brand-4" className="ml-3 text-sm text-gray-600"> Creed </label>
                        </div>

                        <div className="flex items-center">
                            <input id="filter-brand-5" name="brand[]" value="purple" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-brand-5" className="ml-3 text-sm text-gray-600"> Dior </label>
                        </div>
                        <div className="flex items-center">
                            <input id="filter-brand-5" name="brand[]" value="purple" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-brand-5" className="ml-3 text-sm text-gray-600"> Gucci </label>
                        </div>
                    </div>
                </div>
            </div>

            <div className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                    <button type="button" className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                        <span className="font-medium text-gray-900"> Gender </span>
                        <span className="ml-6 flex items-center">

                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                            </svg>

                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>
                </h3>
                <div className="pt-6" id="filter-section-1">
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <input id="filter-gender-1" name="gender[]" value="sale" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-gender-1" className="ml-3 text-sm text-gray-600"> Male </label>
                        </div>

                        <div className="flex items-center">
                            <input id="filter-gender-2" name="gender[]" value="travel" type="checkbox" checked className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-gender-2" className="ml-3 text-sm text-gray-600"> Female </label>
                        </div>

                    </div>
                </div>
            </div>

            <div className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                    <button type="button" className="py-3 bg-white w-full flex items-center justify-between text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                        <span className="font-medium text-gray-900"> Price </span>
                        <span className="ml-6 flex items-center">

                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                            </svg>

                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clip-rule="evenodd" />
                            </svg>
                        </span>
                    </button>
                </h3>
                <div className="pt-6" id="filter-section-2">
                    <div className="space-y-4">
                        <div className="flex items-center">
                            <input id="filter-price-0" name="price[]" value="2l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-price-0" className="ml-3 text-sm text-gray-600"> Any </label>
                        </div>

                        <div className="flex items-center">
                            <input id="filter-price-1" name="price[]" value="6l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-price-1" className="ml-3 text-sm text-gray-600"> 15 - 25 $ </label>
                        </div>

                        <div className="flex items-center">
                            <input id="filter-price-2" name="price[]" value="12l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-price-2" className="ml-3 text-sm text-gray-600"> 25 - 40 $ </label>
                        </div>

                        <div className="flex items-center">
                            <input id="filter-price-3" name="price[]" value="18l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-price-3" className="ml-3 text-sm text-gray-600"> 40 - 90 $ </label>
                        </div>

                        <div className="flex items-center">
                            <input id="filter-price-4" name="price[]" value="20l" type="checkbox" className="h-4 w-4 border-gray-300 rounded text-indigo-600 focus:ring-indigo-500" />
                            <label htmlFor="filter-price-4" className="ml-3 text-sm text-gray-600"> 90 - 175+ $ </label>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )

}