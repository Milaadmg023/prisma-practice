"use client"
import { useEffect } from "react";
const Contacts = () => {
  const getContacts = async () => {
    const res = await fetch("http://localhost:3000/api");
    const data = await res.json();
    console.log(data);
  };
  useEffect(() => {
    getContacts();
  }, []);

  return <div className="bg-slate-300">Contacts</div>;
};

export default Contacts;
