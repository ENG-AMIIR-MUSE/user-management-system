import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Home() {
  const [emp, setEmp] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios.get("/api/complainments");
      console.log("data from the server", data);
      setEmp(data);
    };
    getData();
  }, []); // request
  // console.log("data",data)

  const deleteEmp = (id) => {
    axios
      .delete("/api/delete/" + id)
      .then((res) => {
        alert(res.data);
        const filtered = emp.filter((emp) => emp._id != id);
        console.log("fil", filtered);
        setEmp(filtered);
        dispaly(filtered);
        toast.success("Deleted Successfuly");
      })
      .catch((er) => {
        console.log(er);
      });
  };
  function dispaly(emp) {
    return emp?.map((employee) => {
      return (
        <tr>
          <td className="border-2 border-gray-200">1</td>
          <td className="border-2 border-gray-200">{employee.name}</td>
          <td className="border-2 border-gray-200">{employee.email}</td>
          <td className="border-2 border-gray-200">{employee.password}</td>
          <td className="border-2 border-gray-200">{employee.message}</td>
          <td className="border-2 border-gray-200 flex items-center gap-5">
            <Link to={`/update/${employee._id}`}>
              <FaEdit className="text-blue-500" size={20} />
            </Link>

            <FaTrash
              onClick={() => deleteEmp(employee._id)}
              className="text-red-500"
              size={20}
            />
          </td>
        </tr>
      );
    });
  }
  return (
    <div className="p-5 bg-white rounded-lg max-w-[1000px] m-auto mt-32">
      <Link to={"/add"} className="bg-orange-500 text-white px-5 py-2 rouned-lg">
        Add New Employee
      </Link>
      <table className="w-full text-center mt-5">
        <thead className="bg-orange-500 text-white">
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>password</th>
          <th>Message</th>
          <th>Actions</th>
        </thead>
        <tbody>{dispaly(emp)}</tbody>
      </table>
    </div>
  );
}
