import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Gmail from "../assets/Gmail.jpg";
import Image from "next/image";
import { links } from "@/data/data";
import Link from "next/link";
import { Button } from "./ui/button";

const Connect: React.FC = () => {
  return (
    <div className="mt-5 lg:mt-20 w-screen flex items-center justify-center ">
      <Card
        className="flex flex-col items-center lg:w-2/3"
        style={{ background: "#D9F4FF" }}
      >
        <CardHeader>
          <CardTitle
            className="text-sm text-center"
            style={{ color: "#B4B2C4" }}
          >
            CONTACT ME
          </CardTitle>
          <CardDescription
            className="text-2xl font-bold"
            style={{ color: "#130F49" }}
          >
            Got a Project? Lets Talk !!
          </CardDescription>
        </CardHeader>
        <CardContent className="flex iems-center gap-3">
          <Image alt="gmail" src={Gmail} width={30} />
          <p className="text-bold text-lg" style={{ color: "#B4B2C4" }}>
            ABC12345678@gmail.com
          </p>
        </CardContent>
        <CardFooter className="w-full px-5 lg:px-8 flex items-center justify-between">
          <h1 className="text-3xl cursor-pointer">👋</h1>
          <div className="flex items-center gap-0">
            <nav className="flex items-center gap-5">
              {links.map((link) => (
                <Link key={link.id} href={link.href} passHref>
                  <p className="font-bold text-blue-950 text-xs lg:text-lg">{link.label}</p>
                </Link>
              ))}
            </nav>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Connect;
