"use client";

import { useState } from "react";
import Link from "next/link";
import sty from "./Sidebar.module.scss";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <nav
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      className={sty.sidebarContainer}
    >
      <Link className={sty.sidebarLinks} href={"/"}>
        H {isExpanded && "Home"}
      </Link>
      <Link className={sty.sidebarLinks} href={"/search"}>
        S {isExpanded && "Search"}
      </Link>
      <Link className={sty.sidebarLinks} href={"/watchlist"}>
        W {isExpanded && "Watchlist"}
      </Link>
    </nav>
  );
};

export default Sidebar;
