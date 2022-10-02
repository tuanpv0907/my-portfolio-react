import React from "react";
import { FaGithub } from "react-icons/fa";
import { BsFacebook, BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineMail } from "react-icons/hi";

const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          My Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/tuanpv0907",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          My Facebook <BsFacebook size={30} />
        </>
      ),
      href: "https://facebook.com/t.meo99",
    },
    {
      id: 3,
      child: (
        <>
          Send Me Mail <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:tuanpv0907@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          My CV <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://github.com/tuanpv0907",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-44 h-14 px-4 ml-[-120px] bg-gray-500 hover:rounded-md hover:ml-[-10px] duration-300" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
