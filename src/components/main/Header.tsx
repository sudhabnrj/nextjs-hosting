import React from "react";
import Container from "@/components/ui/Container";
import Link from "next/link";
import Logo from "@/components/main/Logo";
import { SITE_LOGO } from "@/lib/constants";
import Navbar from "./Navbar";
import SupportIcon from "../ui/SupportIcon";
import AccountButton from "../account/AccountButton";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 right-0 z-[1000] pt-6">
      <Container className={"flex justify-between items-center"}>
        <Link href={"/"} className="w-[250px]">
          <Logo className="w-36" src={SITE_LOGO} alt={"Logo"} />
        </Link>
        <div className="flex justify-center flex-row py-3 relative w-[calc(100%-550px)]">
          <Navbar />
        </div>
        <div className="w-[350px] flex flex-col lg:flex-row gap-x-4 lg:items-center flex-end justify-end">
          <Link
            href={"#"}
            className="btn-primary flex justify-center items-center gap-x-1 !min-w-[149px] hover:shadow-custom"
          >
            <SupportIcon width={20} height={20} className="mr-2" />
            Support
          </Link>
          <AccountButton className='w-[124px] hover:shadow-custom' />
        </div>
      </Container>
    </header>
  );
};

export default Header;
