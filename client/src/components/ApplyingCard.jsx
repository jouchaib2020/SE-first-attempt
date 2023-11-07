/* eslint-disable react/prop-types */

function ApplyingCard({Title, Professor, Applicants, Created, Expires, Description}) {
  return (
    <div className=" flex mb-6 border-b pb-4">
        <div className="employer-logo flex-none mr-8">
          <img className="h-12 w-12" src="https://www.leadeight.com/wp-content/uploads/2017/08/basecamp-logo-e1503765309709.png" alt="" />
        </div>

        <div className="post w-3/4">
          <h5 className="title font-bold text-lg">{Title}</h5>
          <span className="employer">{Professor}</span>
          <p className="description text-sm text-gray-600 leading-tight">{Description}</p>
        </div>

        <div className="meta w-1/4 text-right">
          <button className="type bg-teal-500 text-white p-2 text-sm rounded-md">Apply</button>
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