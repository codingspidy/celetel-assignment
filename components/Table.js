import React, { useCallback, useEffect, useMemo, useState } from "react";
import UpdateForm from "../components/UpdateForm";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store";

const TR = (user) => {
  const { username, email, phone, company, id, handleEditClick, onDelete } =
    user;

  return (
    <tr className="border-b last:border-b-0 border-gray-300">
      <td className="px-12 py-4 w-full">
        <span className="font-medium text-sm xl:text-base whitespace-nowrap">
          {username}
        </span>
      </td>
      <td className="px-12 py-4 w-full">
        <span className="font-medium text-sm xl:text-base whitespace-nowrap">
          {email}
        </span>
      </td>
      <td className="px-12 py-4 w-full">
        <span className="font-medium text-sm xl:text-base whitespace-nowrap">
          {phone}
        </span>
      </td>
      <td className="px-12 py-4 w-full">
        <span className="font-medium text-sm xl:text-base whitespace-nowrap">
          {company}
        </span>
      </td>
      <td className="px-12 py-4">
        <span className="flex gap-3 items-center font-medium">
          <button>
            <i
              onClick={() => handleEditClick(user)}
              className="fa-light fa-pen text-base text-blue-600"
            ></i>
          </button>
          <button>
            <i
              className="fa-regular fa-trash text-base text-gray-600"
              onClick={() => onDelete(user)}
            ></i>
          </button>
        </span>
      </td>
    </tr>
  );
};

export default function Table({ usersData, setUsersData }) {
  const dispatch = useDispatch();
  const showUpdateForm = useSelector((state) => state.showUpdateForm);

  const handleEditClick = (editingData) => {
    let { id, username, email, phone, company } = editingData;
    localStorage.setItem("ID", id);
    localStorage.setItem("username", username);
    localStorage.setItem("email", email);
    localStorage.setItem("phone", phone);
    localStorage.setItem("company", company);
    dispatch(modalActions.toggleUpdateForm());
  };

  const onDelete = ({ id }) => {
    axios.delete(`https://6372f7b7348e947299fff708.mockapi.io/fakeAPI/${id}`);
    axios
    .get(`https://6372f7b7348e947299fff708.mockapi.io/fakeAPI`)
    .then((response) => {
      setUsersData(response.data);
    });
  };

  useEffect(() => {
    axios
      .get(`https://6372f7b7348e947299fff708.mockapi.io/fakeAPI`)
      .then((response) => {
        setUsersData(response.data);
      });
  }, [setUsersData]);

  return (
    <div className="overflow-x-auto scrollbar-hide">
      {showUpdateForm && <UpdateForm setUsersData={setUsersData} />}
      <table className="min-w-full table-auto bg-white shadow-xl rounded-sm py-8">
        <thead className="text-xs xl:text-sm text-left border-b border-gray-300">
          <tr className="">
            <th className="px-12 py-4 pt-6 font-medium">
              <span>Username</span>
            </th>
            <th className="px-12 py-4 pt-6 font-medium">
              <span>E-mail</span>
            </th>
            <th className="px-12 py-4 pt-6 font-medium">
              <span>Phone No.</span>
            </th>
            <th className="px-12 py-4 pt-6 font-medium">
              <span>Company</span>
            </th>
            <th className="px-12 py-4 pt-6 font-medium">
              <span>Action</span>
            </th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => (
            <TR
              key={user.id}
              id={user.id}
              username={user.username}
              email={user.email}
              phone={user.phone}
              company={user.company}
              handleEditClick={() => handleEditClick(user)}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
