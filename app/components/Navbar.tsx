import Link from "next/link";
import Image from "next/image";
import { NavLinks } from "../constants";
import AuthProviders from "./AuthProviders";

const Navbar = () => {
  const session = true;
  return (
    <nav className="navbar flexBetween ">
      <div className="flex flexstart">
        <Link href="/">
          <Image src="/logo.svg" alt="Dribbble" height={43} width={115} />
        </Link>
        <ul className="xl:flex hidden text-sm gap-7 flexCenter ml-6 mt-2 font-light">
          {NavLinks.map((item) => (
            <Link href={item.href} key={item.text}>
              {item.text}
            </Link>
          ))}
        </ul>
      </div>
      <div>
        {!session ? (
          <AuthProviders />
        ) : (
          <div className="flex gap-4">
            <Image src="/logo.svg" alt="profile" height={50} width={50} />
            <Link href="/create-project">Share work</Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
