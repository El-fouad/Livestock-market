import React from "react";

export const FieldText = ({ type, labelText, onChange, value,style }) => {
  return (
    <>
      <div className={`py-2 ${style}`}>
        <label htmlFor="">{labelText}</label>
        <input
          type={type}
          name=""
          id=""
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          onChange={onChange}
          value={value}
        />
      </div>
    </>
  );
};
export const CustomButton = ({ customStyle, name, onClick }) => {
  return (
    <>
      <button
        type="submit"
        className={` text-white flex items-center bg-secondary-color ${customStyle}`}
        onClick={onClick}
      >
        {name}
      </button>
    </>
  );
};
