/* eslint-disable react/prop-types */

import { useNavigate } from "react-router-dom"

function ApplyingCard({Title, Professor, Applicants, Created, Expires, Description, Image}) {

  const navigateTo = useNavigate()
  
  return (
    <div className="flex mb-6 border-b pb-4">
        <div className="flex-none mr-8 max-w-xs ">
          <img className=" rounded-t-lg" src={Image} alt="" />
        </div>

        <div className="post w-3/4">
          <h5 className="title font-bold text-lg">{Title}</h5>
          <span className="employer">{Professor}</span>
          <p className="description text-sm text-gray-600 leading-tight">{Description}</p>
        </div>

        <div className="meta w-1/4 text-right">
          <button 
          className="type bg-teal-500 text-white p-2 text-sm rounded-md"
          onClick={() => {
            navigateTo('/proposals/0')
          }}
          >
            Apply
          </button>
          <br />
          <span className="location text-xs">Posted on : {Created}</span>
          <br />
          <span className="location text-xs">Deadline :{Expires}</span>
          <br />
          <span className="location text-xs">Number of applicants : {Applicants}</span>
        </div>
        <hr />
      </div>
  )
}

export default ApplyingCard