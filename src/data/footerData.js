import logo from "@/images/resources/logo-1.png";

const social = [
  { icon: "fa-twitter", link: "" },
  { icon: "fa-facebook-square", link: "" },
  { icon: "fa-pinterest-p", link: "" },
  { icon: "fa-instagram", link: "" },
];

const footerData = {
  logo,
  social,
  year: new Date().getFullYear(),
  author: "AIT",
  about:
    "Welcome to our Trip and Tour Agency.",
  icons: [
    {
      id: 1,
      icon: "fas fa-phone-square-alt",
      content: "+ 92 666 999 0000",
      subHref: "tel",
    },
    {
      id: 2,
      icon: "fas fa-envelope",
      content: "needhelp@company.com",
      subHref: "mailto",
    },
    {
      id: 3,
      icon: "fas fa-map-marker-alt",
      content: "666 road, broklyn street new york",
    },
  ],
  companies: [
    { id: 1, link: "/", title: "Home" },
    { id: 2, link: "/tours", title: "Tours" },
    { id: 3, link: "/about", title: "Contact" },

  ],
};

export default footerData;
