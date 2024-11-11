// "use client";
// import navItems from "@/constants";
// import Link from "next/link";
// import * as React from "react";

// interface navItem {
//   label: string;
//   href: string;
//   icon: JSX.Element;
// }

// const Header: React.FC = () => {
//   return (
//     <>
//       <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b shadow-md bg-black flex justify-center ">
//         <div className="container px-4 mx-auto relative text-sm">
//           <div className="flex justify-between items-center lg:justify-between">
//             <div className="flex items-center flex-shrink-0 mx-auto lg:mx-0">
//               <Link href="/">
//                 <img className="h-8" src="/logo2.png" alt="Logo" />
//               </Link>
//             </div>
//             <ul className="hidden lg:flex ml-14 space-x-12">
//               {navItems.map((item: navItem, index: number) => (
//                 <li key={index}>
//                   <Link
//                     href={item.href}
//                     className="hover:text-black font-bold hover:bg-white  hover:rounded-lg transition-colors duration-300"
//                   >
//                     {item.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around bg-neutral-600 p-4 lg:hidden">
//         {navItems.map((item: navItem, index: number) => (
//           <Link
//             key={index}
//             href={item.href}
//             className="flex flex-col items-center hover:text-red-500 transition-colors duration-300"
//           >
//             {item.icon}
//           </Link>
//         ))}
//       </div>
//     </>
//   );
// };

// export default Header;

"use client";
import navItems from "@/constants";
// import navItems from "@/components/constants";
import Link from "next/link";
import * as React from "react";

interface navItem {
  label: string;
  href: string;
  icon: JSX.Element;
  submenu?: { label: string; href: string }[];
}

const Header: React.FC = () => {
  const [openPopup, setOpenPopup] = React.useState<number | null>(null);

  return (
    <>
      <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b shadow-md bg-black flex justify-center ">
        <div className="container px-4 mx-auto relative text-sm">
          <div className="flex justify-between items-center lg:justify-between">
            <div className="flex items-center flex-shrink-0 mx-auto lg:mx-0">
              <Link href="/">
                <img className="h-8" src="/logo2.png" alt="Logo" />
              </Link>
            </div>
            <ul className="hidden lg:flex ml-14 space-x-12 relative">
              {navItems.map((item: navItem, index: number) => (
                <li
                  key={index}
                  onMouseEnter={() => ( item.label === "Industry" || item.label === "Service" || item.label === "Products") && setOpenPopup(index)}
                  onMouseLeave={() => setOpenPopup(null)}
                  className="relative"
                >
                  <Link
                    href={item.href}
                    className="relative block after:block after:content-[''] after:absolute after:h-[3px] after:bg-white after:w-full after:scale-x-0 after:hover:scale-x-100 after:transition after:duration-300 after:origin-left after:mt-1"
                  >
                    {item.label}
                  </Link>
                  {openPopup === index && item.submenu && (
                    <div className="absolute top-4 left-0 mt-2 py-2 w-48 bg-gray-500 bg-opacity- text-white shadow-lg shadow-gray-300">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block px-4 py-2 text-white hover:text-blue-300 "
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
      <div className="fixed bottom-0 left-0 right-0 z-50 flex items-center justify-around bg-stone-950 bg-opacity- p-4 lg:hidden">
        {navItems.map((item: navItem, index: number) => (
          <Link
            key={index}
            href={item.href}
            className="flex flex-col items-center hover:text-red-500 transition-colors duration-300 "
          >
            {item.icon}
          </Link>
        ))}
      </div>
    </>
  );
};

export default Header;
