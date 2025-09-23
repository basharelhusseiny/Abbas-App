"use client";

import Link from "next/link";

interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

const ErrorPage = ({ error, reset }: ErrorPageProps) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center space-y-4">
      <p className="text-2xl text-red-500 font-semibold">
        Error Page Back to Home
      </p>
      <p className="capitalize text-lg font-medium">
        Error Message : {error.message}
      </p>
      <button
        onClick={() => reset()}
        className="block w-full bg-gray-200 hover:bg-gray-300 rounded-lg py-2 px-6 cursor-pointer transition-colors duration-300"
      >
        Try Again
      </button>
      <Link
        href={"/"}
        className="block bg-gray-200 hover:bg-gray-300 rounded-lg py-3 px-6 cursor-pointer transition-colors duration-300"
      >
        Back to Home Page
      </Link>
    </div>
  );
};

export default ErrorPage;
