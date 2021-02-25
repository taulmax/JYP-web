import { SVGS } from "../../assets/images/svgs";
import { NavbarItem } from "../../interfaces/NavbarItem";

export const NavData: NavbarItem[] = [
  {
    title: "홈",
    path: "/home",
    icon: SVGS.Home,
  },
  {
    title: "법점",
    path: "/judge",
    icon: SVGS.Judge,
  },
  {
    title: "도움말",
    path: "/help",
    icon: SVGS.Help,
  },
];
