import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FaPlay } from "react-icons/fa";
import Header from "./Header";
export default function Add() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [age, setAge] = useState("");
  const [tell, setTell] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  const params = useParams();

  const handleSm = async (e) => {
    e.preventDefault();
    const { data } = await axios.post(`/api/create`, {
      name: name,
      email: email,
      message: message,
      password: password,
    });
    setLoading(false);
    console.log("data from the server...", data);
    toast.success("Complainment Registered  Successfully..");
    nav("/");
  };
  return (
    <>
      {/* <Header/> */}
      <div className=" flex items-center  justify-center ">
        <img  className="w-[400px] h-[400px]" src="data:image/jpeg;base64,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" alt="" />
      
        <div className="bg-black rouned-lg border-2 m-auto mt-[50px] rounded-lg border-gray-200 p-5  w-[400px]">
          <form onSubmit={handleSm} className="flex flex-col gap-5">
            <h1 className="font-bold text-orange-500  text-xl">
              Register Complainment
            </h1>
            <input
              onChange={(e) => setName(e.target.value)}
              className="border-2 border-gray-100 p-4 rounded-lg"
              type="name"
              placeholder="Enter your name"
            />
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="border-2 border-gray-100 p-4 rounded-lg"
              type="email"
              placeholder="Enter your email"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="border-2 border-gray-100 p-4 rounded-lg"
              type="password"
              placeholder="Enter your password"
            />
            <input
              onChange={(e) => setMessage(e.target.value)}
              className="border-2 border-gray-100 p-4 rounded-lg"
              type="text"
              placeholder="Enter your message"
            />
            <button className="bg-orange-500 text-white px-5 py-2">
              {loading ? "Loading .." : "Registering"}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
