import React from 'react';
import Select from 'react-select/async';
const RolesOption = ({register,errors}) => {
  return (
    <div className="flex flex-col p-4 gap-2">
    <label>
      Role <span>*</span>{' '}
    </label>
    <select
    {...register('role',{ value:'' })}
     className="p-4 outline-cyan-500 rounded-md bg-white text-gray-500 border text-lg">
      <option value='' disabled className="p-4">
        Select Role
      </option>
      <option className="p-4" value="testViewOnly">
        Test View Only
      </option>
      <option className="p-4" value="test">
        TEST
      </option>
      <option className="p-4" value="csManager">
        CS Manager
      </option>
      <option className="p-4" value="admin">
        admin
      </option>
    </select>
    <p className=' text-red-500 text-sm'> {errors['role']?.message} </p>
  </div>
  )
}

export default RolesOption