import React, { useState } from 'react';

import Link from 'next/link';

function SideNavigator() {
  const [active, setActive] = useState(0);
  return (
    <div className="fixed right-7 z-10 top-1/4 hidden md:block">
      <Link href="#HOME">
        <div
          onClick={() => setActive(0)}
          className="border border-black rounded-full w-4 h-4 flex justify-center items-center my-2 cursor-pointer"
        >
          <div
            className={`${
              active !== 0 && 'hidden'
            } w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow rounded-full`}
          ></div>
        </div>
      </Link>
      <Link href="#BUILD">
        <div
          onClick={() => setActive(1)}
          className="border border-black rounded-full w-4 h-4 flex justify-center items-center my-2 cursor-pointer"
        >
          <div
            className={`${
              active !== 1 && 'hidden'
            } w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow rounded-full`}
          ></div>
        </div>
      </Link>
      <Link href="#WHYUS">
        <div
          onClick={() => setActive(2)}
          className="border border-black rounded-full w-4 h-4 flex justify-center items-center my-2 cursor-pointer"
        >
          <div
            className={`${
              active !== 2 && 'hidden'
            } w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow rounded-full`}
          ></div>
        </div>
      </Link>
      <Link href="#OURWORK">
        <div
          onClick={() => setActive(3)}
          className="border border-black rounded-full w-4 h-4 flex justify-center items-center my-2 cursor-pointer"
        >
          <div
            className={`${
              active !== 3 && 'hidden'
            } w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow rounded-full`}
          ></div>
        </div>
      </Link>
      <Link href="#TRUSTEDCOMMUNITY">
        <div
          onClick={() => setActive(4)}
          className="border border-black rounded-full w-4 h-4 flex justify-center items-center my-2 cursor-pointer"
        >
          <div
            className={`${
              active !== 4 && 'hidden'
            } w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow rounded-full`}
          ></div>
        </div>
      </Link>
    </div>
  );
}

export default SideNavigator;
