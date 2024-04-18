import React, { useContext } from "react";
import { RxCross1 } from "react-icons/rx";
import { context } from "../Context";
import AddUserInputField from "./AddUserInputField";
import useAddUserHooks from "../hooks/useAddUser";
import RolesOption from "./RolesOption";
import PhoneInput from "./PhoneInput";
const AddUser = () => {
  const { setShowPage, showPage } = useContext(context);
  const {register,onSubmit,handleSubmit,errors,phonNdropDown} = useAddUserHooks();
  return (
    <div
      className={` ${
        showPage ? "translate-x-0" : "translate-x-full"
      } w-full z-50 flex justify-end gap-4 transition-all absolute min-h-screen bg-black bg-opacity-20`}
    >
      <div
        onClick={() => {
          setShowPage(false);
        }}
        className=" bg-white h-fit text-xl mt-5 cursor-pointer p-3 transition-all hover:rotate-180 rounded-full text-black"
      >
        <RxCross1 />
      </div>
      <div className="min-h-screen w-1/2 bg-white flex flex-col gap-4">
        <div className="shadow-sm bg-gray-100 shadow-gray-200 p-6">
          <h1 className="text-xl font-bold">Add User</h1>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className=" flex justify-between flex-col flex-1">
          <div className="flex flex-col gap-4">
            <AddUserInputField
              label="First Name"
              placeholder="Enter First Name"
              name="fName"
              register={register}
              errors={errors}
            />
            <AddUserInputField
              label="Last Name"
              placeholder="Enter Last Name"
              name="lName"
              register={register}
              errors={errors}
            />
            <AddUserInputField
              type="email"
              name="email"
              label="Email"
              placeholder="Enter Email"
              register={register}
              errors={errors}
            />
           <PhoneInput 
                 type="number"
              name="phoneNumber"
              label="Enter Phone Number"
              placeholder="Enter phone number"
              register={register}
              errors={errors}
              phonNdropDown={phonNdropDown}
           />
            <RolesOption
            register={register}
            errors={errors}
             />
          </div>
          <div className="bg-gray-100 p-4 flex flex-row gap-8 items-center justify-end">
            <button
              onClick={() => {
                setShowPage(false);
              }}
              className="p-3 px-4 bg-gray-900 text-white rounded-md hover:bg-cyan-500 tracking-wide"
            >
              Close
            </button>
            <input
              className="cursor-pointer p-3 px-4 rounded-md text-white bg-cyan-400 hover:bg-cyan-500 tracking-wide"
              type="submit"
              value="Add User"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
