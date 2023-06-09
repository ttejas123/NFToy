import React, { useState } from 'react';

import Link from 'next/link';

interface SideNavigatorProps {
  contentarray: string[];
}

function SideNavigator(props: SideNavigatorProps) {
  const [active, setActive] = useState(0);
  const links: string[] = [...props.contentarray];
  return (
    <div className="fixed right-7 z-10 top-1/4 hidden md:block">
      {links.map((val: string, index: number) => {
        return (
          <Link href={`#${val}`} key={index}>
            <div
              onClick={() => setActive(index)}
              className="border border-yellow-400 border-2 rounded-full w-4 h-4 flex justify-center items-center my-2 cursor-pointer"
            >
              <div
                className={`${
                  active !== index && 'hidden'
                } w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 drop-shadow rounded-full`}
              ></div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default SideNavigator;
