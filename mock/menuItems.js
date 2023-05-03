//import { BsLaptop, BsBook } from "react-icons/bs";
import { IoShirtOutline, IoShirtSharp } from "react-icons/io5";
//import { MdOutlineToys } from "react-icons/md";
import { RiHeartPulseLine, RiFireLine } from "react-icons/ri";
import { AiOutlineHome, AiOutlinePercentage } from "react-icons/ai";
//import { BiFootball } from "react-icons/bi";

//import { ImMobile } from "react-icons/im";
//import { FiMonitor, FiHeadphones } from "react-icons/fi";

import { GiLargeDress } from "react-icons/gi";
import { FaBaby, FaRedhat } from "react-icons/fa";

const menuItems = [
  {
    category: "fashion",
    icon: IoShirtOutline,
    productsGroup: [
      {
        title: "women",
        icon: GiLargeDress,
        subtitles: [
          "dress",
          "skirt",
          "jeans",
          "pants",
          "tShirt",
          "shoes",
          "scarf",
          "hairs",
        ],
      },
      {
                title: "men",
        icon: IoShirtSharp,
        subtitles: ["shirt", "pants", "tie", "tShirt", "shoes", "jeans"],
      },
      {
        title: "child",
        icon: FaBaby,
        subtitles: ["overalls", "mittens", "babyApron", "shoes", "tShirt"],
      },
      {
        title: "other",
        icon: FaRedhat,
        subtitles: ["watch", "wallet", "hat", "belt"],
      },
    ],
  },
  
];

export default menuItems;

export const extraMenu = [
  { title: "offer", icon: AiOutlinePercentage, href: "/offers" },
  { title: "bestSells", icon: RiFireLine, href: "/" },
];