import { useState } from 'react'
import Btn from './FormBtn'
import InputPasswordField from './InputPasswordField'
import useProfilePasswordHook from '../hooks/useProfilePassword'
const ProfilePassword = () => {
  const {
    curPasswordEyeToggle,
    handleCurPasswordToggler,
    newPasswordEyeToggle,
    handleNewPasswordToggler,
    confPasswordEyeToggle,
    handleConfPasswordToggler,
    register,
    errors,
    handleSubmit,
    onSubmit,
    isDirty,
    isValid,
  } = useProfilePasswordHook()
  return (
    <div className="w-full border border-gray-300 p-4 bg-white rounded-lg flex flex-col gap-4">
      <p className="text-lg tracking-wide">Change Password</p>
      <div className="flex flex-col gap-4 w-full">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-wrap gap-4 w-full"
        >
          <div className="flex flex-col gap-8 w-full">
            <InputPasswordField
              eyeToggle={curPasswordEyeToggle}
              setEyeToggle={handleCurPasswordToggler}
              label="Current Password"
              name="curPassword"
              placeholder="Enter Current Password"
              register={register}
              errors={errors}
            />
            <div className="flex gap-6">
              <InputPasswordField
                eyeToggle={newPasswordEyeToggle}
                setEyeToggle={handleNewPasswordToggler}
                label="New Password"
                name="newPassword"
                placeholder="Enter New Password"
                register={register}
                errors={errors}
              />
              <InputPasswordField
                eyeToggle={confPasswordEyeToggle}
                setEyeToggle={handleConfPasswordToggler}
                label="Confirm Password"
                name="confPassword"
                placeholder="Enter Confirm Password"
                register={register}
                errors={errors}
                isValid={isValid}
                isDirty={isDirty}
              />
            </div>
          </div>
          <div className="flex gap-4 mt-5">
            <Btn value="Save Changes" type="submit" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default ProfilePassword
