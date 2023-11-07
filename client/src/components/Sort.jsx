
function Sort() {
  return (
    <div className="w-64 mb-6 flex border border-gray-400 bg-white rounded self-center">
        <label className="text-gray-700 font-bold py-3  leading-tight mx-2" htmlFor="sort-by">
        Sort by
        </label>
        <div className="relative flex-grow">
            <select className="block appearance-none w-full bg-white p-3 leading-tight rounded" id="sort-by" name="sort-by">
                <option >Created Date</option>
                <option>Expiration Date</option>
                <option>No. of Applications</option>
            </select>

        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
        </div>
        </div>
    </div>
  )
}

export default Sort