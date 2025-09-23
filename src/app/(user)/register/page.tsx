"use client";
import { useState } from "react";

interface FormData {
  username: string;
  email: string;
  password: string;
}

const RegisterPage = () => {
  const [form, setForm] = useState<FormData>({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.email === "") return console.log("Email is empty");
    if (form.password === "") return console.log("Password is empty");

    console.log(form);
  };

  return (
    <div className="bg-gray-200 w-md p-5 rounded-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="container mx-auto px-5">
        <div className="text-center">
          <h3 className="text-2xl font-medium mb-5">Create New Account</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="username"
              type="text"
              className="bg-white py-2 px-4 outline-0 rounded-md"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
            />
            <input
              name="email"
              type="email"
              className="bg-white py-2 px-4 outline-0 rounded-md"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />
            <input
              name="password"
              type="password"
              className="bg-white py-2 px-4 outline-0 rounded-md"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md cursor-pointer transition-colors duration-300"
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
