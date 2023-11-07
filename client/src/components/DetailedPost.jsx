/* eslint-disable react/prop-types */

function DetailedPost({Title, Professor, Created, Expires, Description }) {
  return (
    <div className="post w-full md:w-8/12 flex flex-col gap-2">
        <div className="meta mb-4">
            <span className="text-xs text-gray-500">Posted on : {Created}</span>
            <h1 className="title text-2xl">{Title}</h1>
            <span className="bg-teal-500 text-white p-1 text-xs mr-4">Deadline: {Expires}</span>
            <span className="bg-yellow-800 text-white p-1 text-xs mr-4">{Professor}</span>
        </div>
        <div className="admin-controls block md:hidden text-sm mb-4 border-t border-b py-2">
          <h5 className="text-gray-700 mb-2">Admin controls</h5>
          <div className="controls mb-2">
          <button className=" border-2 text-teal-500 hover:text-white rounded border-teal-500 hover:bg-teal-500 p-1 mr-1">Edit</button>
          <button className=" border-2 text-teal-500 hover:text-white rounded border-teal-500 hover:bg-teal-500 p-1">Delete</button>
        </div>
        </div>
        <div className="description mb-4">
            <p className="mb-2">
                {Description}
            </p>
            
        </div>
    </div> 
  )
}

export default DetailedPost