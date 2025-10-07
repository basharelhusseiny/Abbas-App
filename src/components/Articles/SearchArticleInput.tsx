"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

const SearchArticleInput = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    console.log(search);
  };
  return (
    <div className="mt-7 w-md mx-auto">
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="search"
          placeholder="Search Articles"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="py-2 px-5 w-full border-2 rounded-md bg-gray-100"
        />
      </form>
    </div>
  );
};
export default SearchArticleInput;
