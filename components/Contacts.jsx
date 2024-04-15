"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
const Contacts = () => {
  const [contacts, setContacts] = useState([]);
  const [menuState, setMenuState] = useState(false);
  const [contact, setContact] = useState({});
  const [updates, setUpdates] = useState({});
  const cardItems = [
    {
      id: 1,
      name: "firstName",
    },
    {
      id: 2,
      name: "lastName",
    },
    {
      id: 3,
      name: "email",
    },
  ];
  const HandleMenu = (id) => {
    setMenuState(!menuState);
    const singleContact = contacts.find((contact) => contact.id === id);
    setContact(singleContact);
  };
  const HandleChange = (e) => {
    setUpdatedContact({ ...updatedContact, [e.target.name]: e.target.value });
  };
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
  const HandleUpdate = async () => {
    const newContact = { ...contact, ...updates };
    try {
      const res = await fetch(`http://localhost:3000/api/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newContact),
      });
      const data = await res.json();
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getContacts();
  }, []);

  return (
    <>
      <div className="bg-slate-300 rounded-lg p-2 grid grid-cols-1 md:grid-cols-2 gap-2 justify-center items-center">
        {contacts.map((contact) => (
          <div
            className="flex bg-white p-2 rounded-lg gap-2 h-fit items-center"
            key={contact.id}
          >
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
            <div className="flex">
              <svg
                onClick={() => HandleMenu(contact.id)}
                xmlns="http://www.w3.org/2000/svg"
                height="1.5em"
                fill="currentColor"
                viewBox="0 0 512 512"
                className="cursor-pointer text-blue-500 hover:text-blue-700 hover:scale-110 transition-all"
              >
                <path d="M 437 75 L 437 75 L 437 75 L 437 75 Q 420 58 401 45 Q 387 37 374 45 L 342 67 L 342 67 Q 336 64 329 61 L 322 23 L 322 23 Q 318 8 303 4 Q 280 0 256 0 Q 232 0 209 4 Q 194 8 190 23 L 183 61 L 183 61 Q 176 64 170 67 L 138 45 L 138 45 Q 125 37 111 45 Q 92 58 75 75 L 75 75 L 75 75 L 75 75 L 75 75 L 75 75 L 75 75 Q 58 92 45 111 Q 37 125 45 138 L 67 170 L 67 170 Q 64 176 61 183 L 23 190 L 23 190 Q 8 194 4 209 Q 0 232 0 256 Q 0 280 4 303 Q 8 318 23 322 L 61 329 L 61 329 Q 64 336 67 342 L 45 374 L 45 374 Q 37 387 45 401 Q 72 440 111 467 Q 125 475 138 467 L 170 446 L 170 446 Q 176 448 183 451 L 190 489 L 190 489 Q 194 504 209 508 Q 232 512 256 512 Q 280 512 303 508 Q 318 504 322 489 L 329 451 L 329 451 Q 336 448 342 446 L 374 467 L 374 467 Q 387 475 401 467 Q 440 440 467 401 Q 475 387 467 374 L 446 342 L 446 342 Q 448 336 451 329 L 489 322 L 489 322 Q 504 318 508 303 Q 512 280 512 256 L 512 256 L 512 256 L 512 256 L 512 256 L 512 256 L 512 256 Q 512 232 508 209 Q 504 194 489 190 L 451 182 L 451 182 Q 448 176 446 170 L 467 138 L 467 138 Q 475 124 467 111 Q 454 92 438 75 L 438 75 L 438 75 L 437 74 L 437 75 Z M 454 120 Q 457 124 454 129 L 430 165 L 430 165 Q 427 169 429 173 Q 434 182 437 192 Q 439 196 443 197 L 486 206 L 486 206 Q 491 207 492 212 Q 496 233 496 256 L 496 256 L 496 256 Q 496 279 492 300 Q 491 305 486 306 L 443 314 L 443 314 Q 439 315 437 320 Q 434 330 429 339 Q 427 343 430 347 L 454 383 L 454 383 Q 457 387 454 392 Q 429 428 392 454 Q 388 456 383 454 L 347 430 L 347 430 Q 343 427 339 429 Q 330 434 320 437 Q 316 439 315 443 L 306 486 L 306 486 Q 305 491 300 492 Q 278 496 256 496 Q 233 496 212 492 Q 207 491 206 486 L 197 443 L 197 443 Q 196 439 192 437 Q 182 434 173 429 Q 169 427 165 430 L 129 454 L 129 454 Q 125 457 120 454 Q 84 429 58 392 Q 56 387 58 383 L 82 347 L 82 347 Q 85 343 83 339 Q 78 330 75 320 Q 73 316 69 315 L 26 306 L 26 306 Q 21 305 20 300 Q 16 278 16 256 Q 16 233 20 212 Q 21 207 26 206 L 69 197 L 69 197 Q 73 196 75 192 Q 78 182 83 173 Q 85 169 82 165 L 58 129 L 58 129 Q 55 124 58 120 Q 70 102 86 87 L 87 86 L 87 86 Q 102 71 120 58 Q 124 56 129 58 L 165 82 L 165 82 Q 169 85 173 83 Q 182 78 192 75 Q 196 73 197 69 L 206 26 L 206 26 Q 207 21 212 20 Q 233 16 256 16 Q 279 16 300 20 Q 305 21 306 26 L 315 69 L 315 69 Q 316 73 320 75 Q 330 78 339 83 Q 343 85 347 82 L 383 58 L 383 58 Q 387 56 392 58 Q 410 71 425 86 L 426 87 L 426 87 Q 441 102 454 120 L 454 120 Z M 176 256 Q 177 211 216 187 Q 256 165 296 187 Q 335 211 336 256 Q 335 301 296 325 Q 256 347 216 325 Q 177 301 176 256 L 176 256 Z M 352 256 Q 352 230 339 208 L 339 208 L 339 208 Q 326 186 304 173 Q 281 160 256 160 Q 231 160 208 173 Q 186 186 173 208 Q 160 230 160 256 Q 160 282 173 304 Q 186 326 208 339 Q 231 352 256 352 Q 281 352 304 339 Q 326 326 339 304 Q 352 282 352 256 L 352 256 Z" />
              </svg>
            </div>
          </div>
        ))}
      </div>
      {menuState ? (
        <div className="fixed  top-[10%] right-0 left-0 flex items-center justify-center">
          <div className="group before:hover:scale-95 before:hover:h-72 before:hover:w-80 before:hover:h-44 before:hover:rounded-b-2xl before:transition-all before:duration-500 before:content-[''] before:w-80 before:h-24 before:rounded-t-2xl before:bg-gradient-to-bl from-sky-200 via-orange-200 to-orange-700 before:absolute before:top-0 w-80 h-75 relative bg-slate-50 flex flex-col items-center justify-center gap-2 text-center rounded-2xl overflow-hidden">
            <Image
              src={contact.avatar}
              width={70}
              height={50}
              alt="avatar"
              className="w-28 h-28 mt-8 rounded-full border-4 border-slate-50 z-10 group-hover:scale-150 group-hover:-translate-x-24  group-hover:-translate-y-20 transition-all duration-500"
            />
            <div className="z-10  group-hover:-translate-y-10 transition-all duration-500 flex flex-col items-center text-center">
              {cardItems.map((item , index) => (
                <input
                key={index}
                  onChange={(e) =>
                    setUpdates({ ...updates, [item.name]: e.target.value })
                  }
                  type="text"
                  className="text-2xl font-semibold bg-gray-200 w-[70%] p-1 rounded-lg mb-1"
                  placeholder={contact[item.name]}
                />
              ))}
            </div>
            <div className="flex gap-2 p-1">
              <button
                className="bg-red-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-red-500"
                href="#"
              >
                Delete
              </button>
              <button
                className="bg-blue-700 px-4 py-1 text-slate-50 rounded-md z-10 hover:scale-125 transition-all duration-500 hover:bg-blue-500"
                href="#"
                onClick={HandleUpdate}
              >
                Update
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Contacts;
