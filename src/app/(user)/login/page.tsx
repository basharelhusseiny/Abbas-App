"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface FormData {
  email: string;
  password: string;
}

const LoginPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.email === "") return console.log("Email Is Empty");
    if (formData.password === "") return console.log("Password Is Empty");

    console.log(formData);
    router.replace("/");
  };
  return (
    <div className="bg-gray-200 w-md p-5 rounded-sm absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="container mx-auto px-5">
        <div className="text-center">
          <h3 className="text-2xl font-medium mb-5">Login</h3>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              name="email"
              type="email"
              className="bg-white py-2 px-4 outline-0 rounded-md"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              name="password"
              type="password"
              className="bg-white py-2 px-4 outline-0 rounded-md"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-md cursor-pointer transition-colors duration-300"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
