"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Form = () => {
  const [formData, setFormData] = useState({});
  const formItems = [
    {
      id: 1,
      name: "firstName",
      type: "text",
      placeholder: "First Name",
    },
    {
      id: 2,
      name: "lastName",
      type: "text",
      placeholder: "Last Name",
    },
    {
      id: 3,
      name: "email",
      type: "text",
      placeholder: "Email",
    },
    {
      id: 4,
      name: "avatar",
      type: "text",
      placeholder: "Avatar",
    },
  ];
  const HandleSubmit = () => {
    try {
      fetch("http://localhost:3000/api/contacts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="bg-slate-300 w-full mx-auto rounded-lg">
      <h1 className="text-2xl font-bold p-2 w-fit mx-auto mt-2 rounded-lg text-slate-700 bg-slate-100">
        Create New Contact
      </h1>
      <div className="form flex flex-col gap-2 p-2">
        {formItems.map((item) => (
          <input
            onChange={(e) =>
              setFormData({ ...formData, [item.name]: e.target.value })
            }
            key={item.id}
            type={item.type}
            placeholder={item.placeholder}
            className="p-1 rounded-lg"
          />
        ))}
      </div>
      <div className="pb-2 text-center">
        <button
          onClick={HandleSubmit}
          className="bg-slate-700 text-white p-2 rounded-lg"
        >
          Add Contact
        </button>
      </div>
    </div>
  );
};

export default Form;
