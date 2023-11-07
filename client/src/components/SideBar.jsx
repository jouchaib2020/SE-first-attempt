
function SideBar() {
  return (
    <aside className="sidebar py-2 sm:w-48 sm:mx-6 mb-4 flex-none w-full">
      <span className="text-gray-800 text-sm px-6 sm:px-0">SORT BY</span>
      <ul className="px-6 sm:px-0">
        <li className="bg-yellow-500 hover:bg-yellow-600 text-white text-center mt-1"><a href="#" className="block py-2">Group</a></li>
        <li className="bg-gray-800 hover:bg-gray-900 text-white text-center mt-1"><a href="#" className="block py-2">Created Date</a></li>
        <li className="bg-teal-500 hover:bg-teal-600 text-white text-center mt-1"><a href="#" className="block py-2">Expiration Date</a></li>
        <li className="bg-blue-700 hover:bg-blue-800 text-white text-center mt-1"><a href="#" className="block py-2">No. of Applications</a></li>

      </ul>
    </aside>
  )
}

export default SideBar
