import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const navList = [
  {
    title: "Pricing",
    href: "/pricing",
  },
  {
    title: "Contact",
    href: "/contact",
  },
];

const Navigation = () => {
  return (
    <nav className="fixed w-screen px-4 top-2 z-50">
      <div className="py-3 px-3 container flex items-center justify-between bg-background rounded-md z-50">
        <p className="font-bold italic">EState</p>

        <ul className="flex item-center gap-4">
          {navList.map((nav) => (
            <li key={nav.title}>
              <Link
                className="text-muted-foreground hover:text-primary hover:underline"
                href={nav.href}
              >
                {nav.title}
              </Link>
            </li>
          ))}
        </ul>

        <div>
          <Avatar>
            <AvatarImage src="/profile/saqib.png" />
            <AvatarFallback>U</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
