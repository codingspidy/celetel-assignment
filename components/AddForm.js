import { useReducer } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { modalActions } from "../store";

const formReducer = (state, event) => {
  return {
    ...state,
    [event.target.name]: event.target.value,
  };
};

export default function AddForm({ setUsersData }) {
  const dispatch = useDispatch();
  const [formData, setFormData] = useReducer(formReducer, {});

  const postData = () => {
    axios.post(`https://6372f7b7348e947299fff708.mockapi.io/fakeAPI`, formData);
  };

  const handleModal = () => {
    dispatch(modalActions.toggleAddForm());
  };

  const submitHandler = (e) => {
    e.preventDefault();
    handleModal();
    postData();
    axios
      .get(`https://6372f7b7348e947299fff708.mockapi.io/fakeAPI`)
      .then((response) => {
        setUsersData(response.data);
      });
  };

  return (
    <div>
      <div className="fixed inset-0 z-40 bg-black/25" onClick={handleModal} />
      <form
        onSubmit={submitHandler}
        className="bg-white w-[90%] max-w-lg mx-auto absolute z-50 left-1/2 -translate-x-1/2 top-0 rounded-xl py-6 px-4"
      >
        <div className="flex gap-2 w-full">
          <div className="mb-6 w-1/2">
            <label
              htmlFor="username"
              className="block mb-2 text-sm font-medium text-gray-500"
            >
              Username
            </label>
            <input
              onChange={setFormData}
              type="username"
              id="username"
              name="username"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
          <div className="mb-6 w-1/2">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-500"
            >
              Company
            </label>
            <input
              onChange={setFormData}
              type="text"
              name="company"
              id="company"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-500"
          >
            Phone no.
          </label>
          <input
            onChange={setFormData}
            type="phone"
            id="phone"
            name="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-500"
          >
            Email
          </label>
          <input
            onChange={setFormData}
            type="email"
            id="email"
            name="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            required
          />
        </div>
        <div className="flex gap-4">
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2.5 text-center"
          >
            Add
          </button>
          <button
            onClick={handleModal}
            className="bg-white border border-gray-700 hover:bg-gray-200 text-gray-700 font-medium rounded-lg text-sm w-full sm:w-auto px-7 py-2.5 text-center"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
