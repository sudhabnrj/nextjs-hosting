import { SignIn } from "@/components/auth/signin-button";
import Button from "@/components/ui/Button";
import Image from "next/image";
import LoginIcon from '../../public/images/profile-circle.svg'
import { CgProfile } from "react-icons/cg";

export default function Home() {
  return(
    <Button className="flex justify-center items-center gap-x-2">
      <CgProfile />
      <span>Login</span>
      
    </Button>
  );
}
