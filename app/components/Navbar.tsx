'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

const navlinks = [
  {
    href: "/",
    label: "Home"
  },
  {
    href: "/posts",
    label: "Posts"
  },
  {
    href: "/create-post",
    label: "Create Post"
  }
]

const Navbar = () => {
  const pathname = usePathname()

  return (
    <nav>
      <ul className="flex flex-row space-x-4 items-center justify-center">
        {
          navlinks.map((link) => {
            return <Link key={link.href} href={link.href}>
              <li className={`cursor-pointer ${pathname === link.href ? 'text-slate-900 font-semibold': 'text-slate-400'}`}>{link.label}</li>
            </Link>
          })
        }
      </ul>
    </nav>
  );
};

export default Navbar;
