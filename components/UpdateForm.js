import { useEffect, useReducer, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { modalActions } from "../store";

export default function UpdateForm({ setShowUpdateForm, setUsersData }) {
  const [id, setID] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const dispatch = useDispatch();

  const handleModal = () => {
    dispatch(modalActions.toggleUpdateForm());
  };

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setUsername(localStorage.getItem("username"));
    setEmail(localStorage.getItem("email"));
    setPhone(localStorage.getItem("phone"));
    setCompany(localStorage.getItem("company"));
  }, []);

  const updateAPIData = () => {
    axios.put(`https://6372f7b7348e947299fff708.mockapi.io/fakeAPI/${id}`, {
      username,
      email,
      phone,
      company,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    updateAPIData();
    axios
    .get(`https://6372f7b7348e947299fff708.mockapi.io/fakeAPI`)
    .then((response) => {
      setUsersData(response.data);
    });
    dispatch(modalActions.toggleUpdateForm());
  };

  return (
    <div>
      <div className="fixed inset-0 z-40 bg-black/25" onClick={handleModal} />
      <form
        onSubmit={submitHandler}
        className="bg-white w-[90%] max-w-lg mx-auto absolute z-50 left-1/2 -translate-x-1/2 top-0 rounded-xl py-6 px-4"
      >
        <div className="flex gap-4">
          <div className="mb-6">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Username
            </label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              type="username"
              id="username"
              name="username"
              value={username}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Company
            </label>
            <input
              onChange={(e) => setCompany(e.target.value)}
              type="text"
              name="company"
              id="company"
              value={company}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Phone no.
          </label>
          <input
            onChange={(e) => setPhone(e.target.value)}
            type="phone"
            id="phone"
            name="phone"
            value={phone}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            id="email"
            name="email"
            value={email}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <button
          onClick={setShowUpdateForm}
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2.5 text-center"
        >
          Update
        </button>
      </form>
    </div>
  );
}
