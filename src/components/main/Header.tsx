import React from "react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Logo from "@/components/main/Logo";
import { SITE_LOGO } from "@/lib/constants";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <header>
      <Container className={"flex justify-between items-center"}>
        <Link href={"/"}>
          <Logo className="w-36" src={SITE_LOGO} alt={"Logo"} />
        </Link>
        <div className="flex justify-end flex-row py-3 relative">
          <Navbar />
        </div>
      </Container>
    </header>
  );
};

export default Header;
