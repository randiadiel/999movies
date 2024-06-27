import Link from "next/link";
import sty from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={sty.sidebarContainer}>
      <Link href={"/"}>H</Link>
      <Link href={"search"}>S</Link>
      <Link href={"watchlist"}>W</Link>
    </div>
  );
};

export default Sidebar;
