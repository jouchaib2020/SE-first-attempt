/* eslint-disable react/prop-types */
import { useState } from 'react'

import Header from '../components/Header'
import ProfessorBoard from '../components/ProfessorBoard'
import SideBar from '../components/SideBar'
import Sort from '../components/Sort'
import StudentBoard from '../components/StudentBoard'

function MainPage({user}) {
  const [myUser, setMyUser] = useState(user);
  const [LoggedIn, setLoggedIn] = useState(false)

  return (
        <>
          <Header isLoggedIn={LoggedIn} />
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
            setLoggedIn(!LoggedIn)
          }}
          type="button" 
          className=" rounded-full fixed bottom-5 right-10 text-white bg-green-500 hover:bg-green-700 text-sm px-5 py-2.5 mr-2 mb-2 "
          >
            switch
          </button>
        </>
  )
}

export default MainPage