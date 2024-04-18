import React, { useContext } from 'react'
import Navbar from './Navbar'
import UsersHeader from './UsersHeader'
import UsersData from './UsersData'
import AddUser from './AddUser'
import { context } from '../Context'
import DeleteUser from './DeleteUser'
import Loader from './Loader'

const UsersPage = () => {
  const { isDelete, loader } = useContext(context);
  return (
    <>
      {isDelete && <DeleteUser />}
      <div className="overflow-hidden">
        <div className="w-full relative">
          <AddUser />
        </div>
        <div className="flex w-full min-h-screen">
          <aside>
            <Navbar />
          </aside>
          {loader ? (
            <div className="w-full h-full flex justify-center items-center">
              <Loader />
            </div>
          ) : (
            <div className="flex-1 flex gap-2 flex-col bg-gray-100">
              <UsersHeader />
              <div className="p-4">
                <UsersData />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default UsersPage
