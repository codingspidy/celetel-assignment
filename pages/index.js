import Head from "next/head";
import Image from "next/image";
import NavDrawer from "../components/NavDrawer";
import {
  PlusIcon,
  AdjustmentsVerticalIcon as FilterIcon,
} from "@heroicons/react/24/solid";
import Table from "../components/Table";
import AddForm from "../components/AddForm";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../store";

export default function Home() {
  const [usersData, setUsersData] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const dispatch = useDispatch();
  const showAddForm = useSelector((state) => state.showAddForm);

  const handleModal = () => {
    dispatch(modalActions.toggleAddForm());
  };

  return (
    <div className="bg-gray-100 h-screen">
      <NavDrawer usersData={usersData} setFilteredUsers={setFilteredUsers} />
      <main className="flex w-full">
        <div className="h-screen min-w-[250px] hidden xl:block" />

        <div className="w-full relative mt-32 xl:mt-0 px-5 xl:px-10 py-4 pb-20 xl:py-16">
          <div className="">
            <h3 className="text-2xl xl:text-4xl font-semibold mb-5 xl:mb-10">
              Customer Details
            </h3>
            <div className="w-full xl:max-w-[93%] 2xl:max-w-full flex flex-col sm:flex-row gap-2 justify-between mb-6">
              <h4 className="text-base xl:text-xl font-medium">
                The terms you are tracking
              </h4>
              <div className="flex gap-3">
                <button className="text-sm xl:text-base flex items-center gap-2 border-2 py-1 rounded-xl px-5 text-gray-600 border-gray-600">
                  <FilterIcon className="h-5 w-5" />
                  Filter
                </button>
                <button
                  className="text-sm xl:text-base flex items-center gap-2 py-1 rounded-xl px-5 text-white bg-orange-600"
                  onClick={handleModal}
                >
                  <PlusIcon className="h-4 w-4" />
                  Add
                </button>
              </div>
            </div>
          </div>
          <Table
            setUsersData={setUsersData}
            usersData={filteredUsers.length === 0 ? usersData : filteredUsers}
          />

          {showAddForm ? <AddForm setUsersData={setUsersData} /> : null}
        </div>
      </main>
    </div>
  );
}
