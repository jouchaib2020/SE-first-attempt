import { PROPOSALS_MOCK } from "../utils/proposals_mock"
import ApplyingCard from "./ApplyingCard"

function StudentBoard() {
  return (
    <main className="main bg-white px-16 py-6 text-left">
      {PROPOSALS_MOCK.map((proposal, index) => <ApplyingCard key={index} {...proposal} />)}
    </main>
    
  )
}

export default StudentBoard