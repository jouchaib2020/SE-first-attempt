import Header from "../components/Header"
import NewPostForm from "../components/NewPostForm"

function AddingPage() {
  return (
    <>
        <Header isLoggedIn={true}/>
        <main className="main bg-white px-6 md:px-16 py-6">
            <div className="w-full max-w-xl mx-auto text-left">
                <h1 className="text-2xl mb-2 text-center mb-4">New Thesis Proposal</h1>
                <NewPostForm />
            </div>
        </main>
    </>
  )
}

export default AddingPage