import { PROPOSALS_MOCK } from "../utils/proposals_mock"
import ApplyingCard from "./ApplyingCard"

function StudentBoard() {
  return (
    <main className="w-4/5 main bg-white px-16 py-6 text-left border rounded-lg">
      {PROPOSALS_MOCK.map((proposal, index) => <ApplyingCard key={index} {...proposal} />)}
    </main>
    
  )
}

export default StudentBoard