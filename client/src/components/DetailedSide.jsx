/* eslint-disable react/prop-types */

function DetailedSide({Image}) {
  return (
    <div className="flex flex-col items-center w-full md:w-4/12 gap-2">
        <div className="info mb-4 text-center ">
            <img className="h-40 w-60 inline-block border rounded-md" src={Image} />
        </div>

        <button className="bg-teal-500 hover:bg-teal-600 text-white text-center block rounded-md p-2 mb-4">Apply for Thesis</button>
  
        <div className="admin-controls text-center text-sm">
          <h5 className="text-gray-700 mb-2">Admin controls</h5>
          <div className="controls">
          <button className=" border-2 text-teal-500 hover:text-white rounded border-teal-500 hover:bg-teal-500 p-1 mr-1">Edit</button>
          <button className=" border-2 text-teal-500 hover:text-white rounded border-teal-500 hover:bg-teal-500 p-1">Delete</button>
          </div>
        </div>
    </div> 
  )
}

export default DetailedSide