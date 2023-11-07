/* eslint-disable react/prop-types */
import { useState } from 'react'

import Header from '../components/Header'
import ProfessorBoard from '../components/ProfessorBoard'
import SideBar from '../components/SideBar'
import Sort from '../components/Sort'
import StudentBoard from '../components/StudentBoard'

function MainPage({user}) {
  const [myUser, setMyUser] = useState(user);

  return (
        <>
          <Header isLoggedIn={false} />
          {myUser.role ==="student" &&(
          <div className="sm:flex">
            <SideBar />
          <StudentBoard />
          </div>
          )}
         {myUser.role === "professor" && 
         <main className="bg-gray-200 px-4 pb-6 w-full flex flex-col">
            <Sort />
            <ProfessorBoard />
          </main>}
          <button
          onClick={() => {
            if(myUser.role === "student"){
              setMyUser({role: "professor"})
            }else{
              setMyUser({role: "student"})
            }
          }}
          type="button" 
          className=" rounded-full fixed bottom-5 right-10 text-white bg-green-700 font-small text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">switch</button>
        </>
  )
}

export default MainPage