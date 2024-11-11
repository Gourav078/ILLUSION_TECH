// import { BookA } from "lucide-react";

// interface navItems {
//   label: string;
//   href: string;
//   icon: JSX.Element;
// }
// const navItems = [
//   { label: "Research", href: "/research", icon: <BookA /> },
//   { label: "Industry", href: "/industry", icon: <BookA /> },
//   { label: "Service", href: "/service", icon: <BookA /> },
//   { label: "Products", href: "/products", icon: <BookA /> },
//   { label: "About Us", href: "/about", icon: <BookA /> },
//   { label: "Contact Us", href: "/contact", icon: <BookA /> },
// ];

// export default navItems;

import {
  BookA,
  ContactRound,
  Factory,
  Microscope,
  Settings,
  ShoppingCart,
} from "lucide-react";

interface navItem {
  label: string;
  href: string;
  icon: JSX.Element;
  submenu?: { label: string; href: string }[]; // Optional submenu items
}

const navItems: navItem[] = [
  // { label: "Research", href: "/research", icon: <Microscope /> },
  // {
  //   label: "Industry",
  //   href: "/industry",
  //   icon: <Factory />,
  //   submenu: [
  //     { label: "Education Technology", href: "/service/consulting" }, // add the currect path
  //     { label: "Energy Resources and Utilities", href: "/service/staffing" },
  //     { label: "Pharma", href: "/service/cda" },
  //     { label: "Public Sector", href: "/service/geo" },
  //   ],
  // },
  // {
  //   label: "Service",
  //   href: "/service",
  //   icon: <BookA />,
  //   submenu: [
  //     { label: "Consulting", href: "/consulting" }, // add the currect path
  //     { label: "Staffing", href: "/staffing" },
  //     { label: "CDA", href: "/cda" },
  //     { label: "Geo Spatial Services", href: "/geoservices" },
  //     { label: "Market Research", href: "/marketresearch" },
  //     {
  //       label: "Enterprise Resource Application",
  //       href: "/enterprisedevelopment",
  //     },
  //   ],
  // },
  // {
  //   label: "Products",
  //   href: "/products",
  //   icon: <ShoppingCart />,
  //   submenu: [
  //     { label: " E learning Platform ", href: "/eLearningPlatform" },
  //     { label: "Document Management System", href: "/documentsystem" },
  //     { label: "Asset Management System", href: "/assetsystem" },
  //     { label: "Techno BI", href: "/technobI" },
  //   ],
  // },
  { label: "About Us", href: "/about", icon: <Settings /> },
  { label: "Contact Us", href: "/contact", icon: <ContactRound /> },
];

export default navItems;
