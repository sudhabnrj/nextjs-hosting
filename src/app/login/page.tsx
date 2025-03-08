"use client";
import LoginForm from "@/components/auth/LoginForm";
import Container from "@/components/ui/Container";
import { LOGINBG } from "@/lib/constants";
import Image from "next/image";
import TitleSecondary from "@/components/main/TitleSecondary";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Loading from "../loading";

export default function SigninPage() {
  useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const session = localStorage.getItem("session");
    if (session) {
      router.replace("/dashboard");
    } else {
      setLoading(false); // Only show login page if not authenticated
    }
  }, [router]);

  if (loading) {
    return <Loading />;
  }
  return (
    <section className="common-hero-bg relative h-auto w-full overflow-hidden md:min-h-[calc(1368px-300px)]">
      <Container className="relative z-20 flex flex-col items-start p-0">
        <div className="flex w-full flex-col items-center justify-between lg:flex-row">
          <div className="mt-32 flex w-full flex-col sm:w-1/2 lg:mt-0 lg:max-w-[420px] xl:max-w-[512px]">
            <TitleSecondary
              className="mb-5"
              section_title="Login"
              description="Login to access your travelwise  account"
            />
            <LoginForm />
          </div>
          <div className="mb-10 mt-10 flex w-1/2 justify-end md:mb-0 lg:mt-32">
            <Image
              src={LOGINBG}
              width={616}
              height={816}
              className="rounded-3xl"
              alt="Login"
              priority
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
