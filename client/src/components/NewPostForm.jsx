
import { useNavigate } from "react-router-dom"

function NewPostForm() {

  const navigateTo = useNavigate()
  return (
    
      <form onSubmit={
        (e)=>{
          e.preventDefault()
          navigateTo('/')
        }
      }>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" >Title</label>
            <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" name="title" placeholder="Title example" />
          </div>

          <div className="md:flex md:justify-between">
            
            <div className="w-full md:w-3/12 mb-4 md:mb-0">
                <label className="block text-gray-700 text-sm mb-2" >Duration</label>
            <div className="relative">
                  <select className="block appearance-none w-full bg-white border border-gray-400 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:border-gray-500" id="job-type" name="job-type">
                    <option>3-Months</option>
                    <option>6-Months</option>
                    <option>12-Months</option>
                  </select>

                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
            </div>

            <div className="w-full md:w-8/12 mb-4 md:mb-0">
              <label className="block text-gray-700 text-sm mb-2">Location</label>
              <input type="text" className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" name="location" placeholder="Torino" />
            </div>
          </div>
          <div>
            <label className="block text-gray-700 text-sm mb-2 ">Description</label>
            <textarea className="border border-gray-400" name="postContent" rows={4} cols={76} placeholder="Describe the thesis proposal"/>
          </div>

          <div className="flex flex-wrap -mx-3">
            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label className="block text-gray-700 text-sm mb-2">Academic Advisor</label>
              <input type="text" className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" name="company" placeholder="Dr. Ibra" />
            </div>

            <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
              <label className="block text-gray-700 text-sm mb-2">Website</label>
              <input className="appearance-none block w-full bg-white text-gray-700 border border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-500" id="company" name="company" placeholder="https://www.example.com/" />
            </div>
          </div>


          <div className="mb-4 md:mb-0">
            <label htmlFor="company-logo" className="block text-gray-700 text-sm mb-2">Descriptive Image</label>
            <input type="file" className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-3 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="company-logo" name="company-logo" />
        </div>
        <button className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-3 rounded" type="submit">Submit</button>

      </form>
  )
}

export default NewPostForm