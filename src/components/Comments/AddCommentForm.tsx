"use client";

import { useState } from "react";

const AddCommentForm = () => {
  const [comment, setComment] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment === "") return setError("Comment is Empty");
    console.log(comment);
    setComment("");
  };
  return (
    <div className="mt-6 w-xl mx-auto">
      <form onSubmit={handleSubmit} className="w-full flex items-center gap-4">
        <input
          name="comment"
          type="text"
          placeholder="Add Comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="py-2 px-5 w-full border-2 rounded-md bg-gray-100"
        />
        <button
          type="submit"
          className=" bg-gray-700 hover:bg-gray-600 text-white py-2 px-5 rounded-md cursor-pointer transition-colors duration-300"
        >
          Comment
        </button>
      </form>
      {error && (
        <p className="text-sm mt-2 text-center text-red-500">{error}</p>
      )}
    </div>
  );
};
export default AddCommentForm;
