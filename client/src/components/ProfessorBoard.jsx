import { PROPOSALS_MOCK } from "../utils/proposals_mock"
import ProposalCard from "./ProposalCard"

function ProfessorBoard() {
    const TABLE_HEADINGS = ["Title","Professor","Location","Applicantions","Created Date","Expiration Date","Status","Settings"]

  return (
    <table className="talbe-auto text-sm mx-auto">
        <thead className="text-left text-gray-900">
          <tr>
            <th className="px-4 py-2">
              <input type="checkbox"/>
            </th>
           {TABLE_HEADINGS.map((heading, index) => <th className="px-4 py-2 text-center" key={index}>{heading}</th>)}
          </tr>
        </thead>
        <tbody className="text-gray-700">
            {PROPOSALS_MOCK.map((proposal, index) => <ProposalCard key={index} {...proposal} />)}

        </tbody>



    </table>
  )
}

export default ProfessorBoard