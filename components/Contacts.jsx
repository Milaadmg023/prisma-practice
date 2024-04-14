"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const getContacts = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/contacts");
      const data = await res.json();
      console.log(data);
      setContacts(data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <div className="bg-slate-300 rounded-lg p-2 grid grid-cols-2 gap-2 justify-center items-center">
      {contacts.map((contact) => (
        <div className="flex bg-white p-2 rounded-lg gap-2 h-fit items-center" key={contact.id}>
          <Image
            src={contact.avatar}
            width={70}
            height={50}
            alt="avatar"
            className="rounded-full w-fit"
          />
          <div>
            <h1 className="text-xl">{contact.firstName}</h1>
            <h2 className="text-sm text-gray-700">{contact.lastName}</h2>
            <p>{contact.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contacts;
