import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

const NavItem = ({ navItem = {} }) => {
  const { pathname } = useRouter();

  const { name, href, subNavItems } = navItem;
  // const subHref = subNavItems.map((item) => item.href);
  // const current = pathname === href || subHref.includes(pathname);

  return (
    <li>
      <Link href={href}>
        <div>{name}</div>
      </Link>
      {/* <ul>
        {subNavItems.map((subItem) => (
          <li
            className={subItem.subItems?.length ? "dropdown" : ""}
            key={subItem.id}
          >
            <Link href={subItem.href}>
              <div>{subItem.name}</div>
            </Link>
            <ul>
              {subItem.subItems?.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>
                    <div>{item.name}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul> */}
    </li>
  );
};

export default NavItem;
