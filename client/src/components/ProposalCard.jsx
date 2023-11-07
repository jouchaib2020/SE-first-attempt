/* eslint-disable react/prop-types */
import Actions from "./Actions"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons'



function ProposalCard({Title, Professor, Location, Status, Applicants, Created, Expires}) {

    const handleSettingClick = (e) => {
        e.preventDefault()
        const dropdownMenu = e.target.nextElementSibling
        dropdownMenu.classList.toggle("hidden")
    }
  return (
    <>
    <tr className="bg-white hover:shadow-lg border">
        <td className="px-4 py-3"><input type="checkbox" /></td>

        {[Title, Professor, Location, Applicants, Created, Expires].map((item, index)=> <td key={index} className="px-4 py-2">{item}</td>)}
        {Status === "Active" ? (
            <td className="px-4 py-2 bg-green-200">{Status}</td>
        ) : (
            <td className="px-4 py-2 bg-red-200">{Status}</td>
        )}
        <td 
        className="px-4 py-2 cursor-pointer"
        onClick={handleSettingClick}
        >
            <div className="dropdown relative flex justify-center items-center transition ">
                <FontAwesomeIcon icon={faEllipsisH} />
            <Actions />
            </div>
        </td>
        </tr>
    <tr>
    <td className="py-2"></td>
  </tr>
  </>
  )
}

export default ProposalCard