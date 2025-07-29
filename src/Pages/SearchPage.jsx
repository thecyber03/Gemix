import React from 'react';

export default function SearchPage() {
  return (
    <div className=" w-[430px]">
      <div className=" top-22   z-50 px-4 py-4 shadow-md">
        <h1 className="text-3xl font-bold mb-2 font-[Aquire] text-center">Search Game</h1>
        <input
          type="text"
          placeholder="Type to search..."
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm outline-none bg-[#0f2027] text-white"
        />
      </div>
    </div>
  );
}
