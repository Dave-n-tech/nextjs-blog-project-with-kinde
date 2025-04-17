import Link from "next/link";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header className="px-5 py-2 flex flex-row justify-between items-center">
      <Link href={"/"}>
        <h1 className="font-bold text-2xl p-0">The King's Blog</h1>
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
