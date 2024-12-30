import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { FlagIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
export function ErrorSection7() {
  const navigate = useNavigate();
  return (
    <div className="h-screen mx-auto grid place-items-center text-center px-8">
      <div>
        <FlagIcon className="w-20 h-20 mx-auto" />

        <h1 className="text-gray-800 mt-10 text-3xl md:text-4xl">
          Error 404 <br /> It looks like something went wrong.
        </h1>
        <Typography className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
          Don&apos;t worry, I just havent made this section.
        </Typography>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate("/")}
        >
          Go Back Home
        </button>
      </div>
    </div>
  );
}

export default ErrorSection7;
