import DetailedPost from "../components/DetailedPost"
import DetailedSide from "../components/DetailedSide"
import Header from "../components/Header"

function DetailPage(props) {
  return (
    <>
    <Header isLoggedIn={true}/>

    <main className="main bg-white px-6 md:px-16 py-6 text-left">
      <div className="flex flex-wrap justify-between max-w-6xl mx-auto">
        <DetailedPost {...props} />
        
        <DetailedSide {...props} /> 
      </div>
    </main>
  </>
    
  )
}

export default DetailPage