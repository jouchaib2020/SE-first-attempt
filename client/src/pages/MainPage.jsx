import Header from '../components/Header'
import Sort from '../components/Sort'
import StudentBoard from '../components/StudentBoard'

function MainPage() {
  return (
        <>
          <Header isLoggedIn={false} />
          <div className="sm:flex">
            <Sort />
          <StudentBoard />
          </div>
         {/*<main className="main bg-gray-200 px-4 pb-6 w-full flex flex-col">
            {<Sort />
            <ProfessorBoard />}
            
          </main>}*/}
        </>
  )
}

export default MainPage