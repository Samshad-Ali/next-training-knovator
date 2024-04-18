import React from 'react'
import InputField from './InputField'
import Btn from './FormBtn'
import { routes } from '../utils/routes'

const ProfileForm = ({handleSubmit, onSubmit, register, errors}) => {
  
  return (
    <div className="w-full border border-gray-300 p-4 bg-white rounded-lg flex flex-col gap-4">
      <p className="text-lg tracking-wide">Account Details</p>
      <div className="flex flex-col gap-4 w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-8 w-full"
        >
          <div className="flex flex-wrap gap-4 items-center w-full">
            <InputField
              label="First Name"
              name="fName"
              placeholder="Enter First Name"
              register={register}
              errors={errors}
            />
            <InputField
              label="Last Name"
              name="lName"
              placeholder="Enter Last Name"
              register={register}
              errors={errors}
            />
            <InputField
              label="Enter Email"
              name="email"
              placeholder="Enter Email"
              type="email"
              register={register}
              errors={errors}
            />
          </div>
          <div className="flex gap-4">
            <Btn value="Save Changes" routeUrl={routes.dashboard} type="submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfileForm
