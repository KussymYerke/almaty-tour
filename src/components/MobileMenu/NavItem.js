import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import SubNavItem from "./SubNavItem";

const NavItem = ({ item = {} }) => {
  const { pathname } = useRouter();

  const [expand, setExpand] = useState(false);

  const handleExpand = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setExpand((preExpand) => !preExpand);
  };

  const { name, href, subNavItems } = item;

  return (
    <li className={`dropdown${pathname === href ? " current" : ""}`}>
      <Link className={expand ? " expanded" : ""} href={href}>
          {name}
      </Link>
      {/* <ul
        style={{
          display: expand ? "block" : "none",
        }}
      >
        {subNavItems.map((subItem) => (
          <SubNavItem subItem={subItem} key={subItem.id} />
        ))}
      </ul> */}
    </li>
  );
};

export default NavItem;
