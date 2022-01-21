/*
This is your Nav component. It contain a responsive navbar 
*/

import Image from 'next/image';
import Link from 'next/link';
import Logo from 'public/logo.svg';
import { Menu } from 'react-feather';

const Nav = (): JSX.Element => {
  // Modify you menu directly here
  const NavMenu = (
    <>
      <Link href="/pricing">
        <a id="pricing" className="nav-btn">
          Pricing
        </a>
      </Link>

      <Link href="/contact">
        <a id="contact" className="nav-btn">
          Contact Us
        </a>
      </Link>

      <>
        <Link href="/login">
          <a id="login" className="nav-btn">
            Login
          </a>
        </Link>
        <Link href="/signup">
          <a
            id="signup"
            className="font-normal normal-case btn btn-sm btn-primary font-body">
            Sign Up
          </a>
        </Link>
      </>
    </>
  );

  return (
    <nav className="w-full mb-2 navbar">
      <Link href="/">
        <a>
          <Image src={Logo as string} alt="SupaNexTail Logo" />
        </a>
      </Link>

      <div className="flex-col hidden ml-auto text-sm text-center lg:flex lg:flex-row lg:space-x-10 font-body">
        {NavMenu}
      </div>
      <div className="ml-auto lg:hidden">
        <div className="dropdown dropdown-end" data-cy="dropdown">
          <div tabIndex={0} className="m-1 cursor-pointer">
            <Menu />
          </div>
          <div className="w-24 mt-3 space-y-3 text-center menu dropdown-content">
            {NavMenu}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
