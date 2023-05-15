import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="topNav">
        <Image
          src={"/images/logo_black.png"}
          width={50}
          height={50}
          alt="Logo"
        />
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/about-us">About us</Link>
            </li>
          </ul>
        </nav>
      </div>
      <h1 className="title">Lorem ipsum dolor sit amet </h1>
    </header>
  );
};

export default Header;
