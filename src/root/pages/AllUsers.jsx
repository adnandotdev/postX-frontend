import React from "react";
import { useEffect, useState } from "react";
import UserCard from "../../components/UserCard";

export default function AllUsers() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredUsers, setFilteredUsers] = useState([]);

   const users = [
    'Alice',
    'Bob',
    'Charlie',
    'David',
    'Eve',
    'Frank',
    'Grace',
    'Heidi',
    'Ivan',
    'Judy',
    'Karen',
    'Leo',
    'Mona',
    'Nina',
    'Oscar',
    'Paul',
    'Quincy',
    'Rachel',
    'Steve',
    'Tina',
    'Uma',
    'Victor',
    'Wendy',
    'Xander',
    'Yara',
    'Zane',
    'Aaron',
    'Bella',
    'Carter',
    'Diana',
    'Ethan',
    'Fiona',
    'George',
    'Hannah',
    'Isaac',
    'Jack',
    'Kylie',
    'Liam',
    'Megan',
    'Nathan',
    'Olivia',
    'Peter',
    'Quinn',
    'Riley',
    'Sophia',
    'Thomas',
    'Ursula',
    'Violet',
    'Will',
    'Xenia',
    'Yvonne',
    'Zach',
  ];

  useEffect(() => {
    setFilteredUsers(
      users.filter(user =>
        user.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);
  return (
    <div className="flex flex-col flex-1 items-center gap-10 overflow-scroll py-10 px-5 md:px-8 lg:p-14 custom-scrollbar">
      <div className="max-w-5xl flex flex-col items-start w-full gap-6 md:gap-9">
      <div className="flex gap-2 w-full max-w-5xl">
        <img
          src="/icons/people.svg"
          width={40}
          height={40}
          alt="edit"
          className="invert-white"
        />
        <h2 className="h3-bold md:h2-bold text-left w-full text-3xl font-bold">All Users</h2>
        </div>
        
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Search users..."
            className="h-12 w-full pl-12 pr-4 rounded-lg bg-gray-800 text-white border border-gray-700 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <img
            src="/icons/search.svg"
            width={24}
            height={24}
            alt="search"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-light-4"
          />
          {searchTerm && (
            <ul className="absolute w-full mt-1 bg-gray-800 rounded-lg shadow-lg z-10">
              {filteredUsers.map((user, index) => (
                <li
                  key={index}
                  className="px-4 py-2 hover:bg-gray-700"
                >
                  {user}
                </li>
              ))}
            </ul>
          )}
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mt-8">Suggested</h1>
        <ul className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-7 max-w-5xl">
          <li key="1" className="flex-1 min-w-[200px] w-full">
            <UserCard />
          </li>
          <li key="2" className="flex-1 min-w-[200px] w-full">
            <UserCard />
          </li>
          <li key="3" className="flex-1 min-w-[200px] w-full">
            <UserCard />
          </li>
          <li key="4" className="flex-1 min-w-[200px] w-full">
            <UserCard />
          </li>
        </ul>
      </div>
    </div>
  );
}