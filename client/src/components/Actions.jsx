import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTrash, faPen } from "@fortawesome/free-solid-svg-icons"


function Actions() {
  return (
    <ul className="dropdown-menu absolute bg-white hidden shadow z-10">
        <li className="py-2 px-4 block hover:bg-gray-200 whitespace-no-wrap flex items-center ">
            <span className="text-gray-600 mr-2">
                    <FontAwesomeIcon icon={faPen} />
            </span>
            <a>Edit</a>
        </li>
        <li className="py-2 px-4 block hover:bg-gray-200 whitespace-no-wrap flex items-center ">
            <span className="text-gray-600 mr-2">
                <FontAwesomeIcon icon={faTrash} />
            </span>
            <a>Delete</a>
        </li>
    </ul>
  )
}

export default Actions