import logo from "@/images/resources/logo-1.png";
import logo2 from "@/images/resources/logo-2.png";

const navItems = [
  {
    id: 1,
    name: "Home",
    href: "/",
    // subNavItems: [
    //   {
    //     id: 1,
    //     name: "Home One",
    //     href: "/",
    //   },
    //   {
    //     id: 2,
    //     name: "Home Two",
    //     href: "/home2",
    //   },
    //   {
    //     id: 3,
    //     name: "Header Styles",
    //     href: "/",
    //     subItems: [
    //       {
    //         id: 1,
    //         name: "Header One",
    //         href: "",
    //       },
    //       { id: 2, name: "Header Two", href: "" },
    //     ],
    //   },
    // ],
  },
  // {
  //   id: 2,
  //   name: "Destinations",
  //   href: "/destinations",
  //   // subNavItems: [
  //   //   { id: 1, name: "Destinations", href: "/destinations" },
  //   //   { id: 2, name: "Destinations Detail", href: "/destinations-details" },
  //   // ],
  // },
  {
    id: 3,
    name: "Tours",
    href: "/tours",
    // subNavItems: [
    //   { id: 1, name: "Tours", href: "/tours" },
    //   { id: 2, name: "Tours List", href: "/tours-list" },
    //   { id: 3, name: "Tours Details", href: "/tour-details" },
    // ],
  },
  {
    id: 6,
    name: "Contact",
    href: "/about",
    subNavItems: [],
  },
];


const headerData = {
  navItems,
  logo,
  logo2,
};

export default headerData;
