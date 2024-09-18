"use client";
import { useEffect, useState } from "react";
import images from "@/public/images";
import icons from "@/public/icons";

const Nav = ({ menuItems }) => {
  // console.log(menuItems);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Retrieve cart from localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);
  return (
    <header className="padding-x py-8 absolute z-20 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={images.headerLogo} alt="Logo" width={85} height={20} />
        </a>
        <ul className="flex flex-1 pr-10 justify-end items-center gap-16 max-lg:hidden">
          {menuItems.nodes.map((item) => (
            <li key={item.id}>
              <a
                href={item.path}
                className="font-montserrat text-lg text-slate-gray"
              >
                {item.label}
                {item.label === "Cart" && ` (${cartItems.length})`}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden">
          <img src={icons.hamburger} alt="Hamburger" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
