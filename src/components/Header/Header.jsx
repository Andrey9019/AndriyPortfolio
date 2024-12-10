import React from 'react';
import { HeaderMobile } from './HeaderMobile';
import { HeaderDesktop } from './HeaderDesktop';
// import { NavLink } from 'react-router-dom';
// import ThemeSwitcher from 'ui/ThemeSwitcher';

export const Header = () => {
  return (
    <>
      <HeaderDesktop />
      <HeaderMobile />
    </>
    // <header className="fixed w-full bg-white dark:bg-black text-black dark:text-white shadow-md py-4 px-8 z-10 transition-colors duration-300">
    //   <div className=" header flex justify-end">
    //     <ThemeSwitcher />
    //     <ul className="ml-4 flex gap-8">
    //       <li>
    //         <NavLink
    //           to="/"
    //           className={({ isActive }) =>
    //             isActive
    //               ? 'text-lg font-bold text-blue-600 '
    //               : 'text-lg font-medium text-gray-900 hover:text-blue-600 dark:text-white  dark:hover:text-blue-300'
    //           }
    //         >
    //           About me
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           to="/projects"
    //           className={({ isActive }) =>
    //             isActive
    //               ? 'text-lg font-bold text-blue-600'
    //               : 'text-lg font-medium text-gray-900 hover:text-blue-600 dark:text-white  dark:hover:text-blue-300'
    //           }
    //         >
    //           Projects
    //         </NavLink>
    //       </li>
    //       <li>
    //         <NavLink
    //           to="/contacts"
    //           className={({ isActive }) =>
    //             isActive
    //               ? 'text-lg font-bold text-blue-600'
    //               : 'text-lg font-medium text-gray-900 hover:text-blue-600  dark:text-white dark:hover:text-blue-300'
    //           }
    //         >
    //           Contacts
    //         </NavLink>
    //       </li>
    //     </ul>
    //     <HeaderMobile />
    //   </div>
    // </header>
  );
};
