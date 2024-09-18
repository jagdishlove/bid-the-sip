import Image from "next/image";
import logo from "../assets/images/logo2.svg";
import { SignOut } from "@/components/singout-button";
import SignIn from "@/components/sign-in";
import { auth } from "@/auth";
import Link from "next/link";

export async function Header() {
  const session = await auth();
  return (
    <div className="border-b-2 py-3">
      <div className="container flex items-center justify-between m-auto">
        <Link href="/" className="hover:underline flex items-center gap-1">
          <Image src={logo} width={50} height={50} alt="logo" />
          <h1 className="text-2xl font-semibold  tracking-wide">
            BidTheSip.
            <span className="text-pink-500">com</span>
          </h1>
        </Link>
        <div className=" flex items-center gap-3 ">
          {session?.user?.name}
          <div>{session ? <SignOut /> : <SignIn />}</div>
        </div>
      </div>
    </div>
  );
}
