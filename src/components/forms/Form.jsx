import React from "react";
import { useRef } from "react";
function Form({ closeForm }) {
  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();
  const dropdownRef = useRef();
  const messageRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const phone = phoneRef.current.value;
    const qualification = dropdownRef.current.value;
    const message = messageRef.current.value;

    const formData = {
      name,
      email,
      phone,
      qualification,
      message,
    };
    try {
      const response = await fetch(
        "https://skillup-backend-gamma.vercel.app/skillup/api/client/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      const data = await response.json();
    } catch (error) {
      console.log(error);
    }
    closeForm();
  }

  return (
    <div className="form bg-white p-8 rounded shadow-md w-full max-w-md">
      <div className=" p-6 relative z-10">
        <h1 className="text-center text-3xl mt-5 font-semibold text-green-700">
          Let's Connect
        </h1>
        <p className="px-5 text-center text-lg text-black-100 my-4">
          Let's align our constellations! Reach out and let the magic of
          collaboration illuminate our skies.
        </p>
      </div>
      <form>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Full Name"
            ref={nameRef}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            ref={emailRef}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            placeholder="Phone Number"
            ref={phoneRef}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="dropdown"
          >
            Qualification
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="dropdown"
            ref={dropdownRef}
          >
            <option value="" disabled>
              Select your qualification
            </option>
            <option value="Graduation/pursuing">Graduation/pursuing</option>
            <option value="Masters/pursuing">Masters/pursuing</option>
            <option value="Diploma/pursuing">Diploma/pursuing</option>
          </select>
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Enter your message"
            ref={messageRef}
            defaultValue={"DEFAULT MESSAGE"}
          />
        </div>
        <div className="flex items-center justify-between">
          <button
            className="w-full bg-gradient-to-r from-green-500 to-green-700 rounded-sm text-white font-semibold h-10"
            onClick={handleSubmit}
          >
            <div className="flex items-center justify-center gap-2">
              Get Free Career Evaluation{" "}
              <img src="/icons/rocket.svg" alt="icons" width={20} />
            </div>
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
