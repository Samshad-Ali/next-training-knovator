import React, { useContext } from 'react'
import Navbar from './Navbar'
import ProfileForm from './ProfileForm'
import ProfilePassword from './ProfilePassword'
import Header from './Header'
import { context } from '../Context'
import Loader from './Loader'
const ProfilePage = ({ handleSubmit, onSubmit, register, errors }) => {
  const { loader } = useContext(context)
  return (
    <div className="w-full min-h-screen flex">
      <aside className="min-h-screen">
        <Navbar />
      </aside>
      <div className="flex-1 min-h-screen flex gap-2 flex-col bg-gray-100">
        {loader ? (
          <div className="w-full h-full flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <div>
            <Header title="Profile" />
            <div className="p-4 flex flex-col gap-10">
              <ProfileForm
                handleSubmit={handleSubmit}
                register={register}
                errors={errors}
                onSubmit={onSubmit}
              />
              <ProfilePassword />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfilePage
