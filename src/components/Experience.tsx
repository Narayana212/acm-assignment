import { experiences } from "@/data/data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import {Dot} from 'lucide-react'

const Experience: React.FC = () => {
  return (
    <div className="mt-5 lg:mt-20  w-full flex flex-col lg:flex-row ">
      <div className="lg:w-1/2 ">
        <h3 className="font-bold" style={{ color: "#B4B2C4" }}>
          BACKGROUND
        </h3>
        <h1 className="text-blue-950 text-2xl font-bold">
          {" "}
          My Past Experience
        </h1>
      </div>
      <ul className="lg:w-1/2  flex flex-col gap-5 mt-5 lg:mt-0 ">
        {experiences.map((i)=>(
            <Card key={i.id} className="cursor-pointer  transition duration-300 ease-in-out border-0 hover:shadow-2xl ">
                <CardHeader>
                    <CardTitle className="text-sm flex items-center " style={{color:"#33A1CD"}} ><span><Dot/></span>{i.companyName}</CardTitle>
                    <CardDescription className="text-xl font-bold"  style={{color:"#130F49"}}>{i.positon}</CardDescription>
                </CardHeader>
                <CardContent className="text-sm">
                    {i.content}
                </CardContent>

            </Card>
        ))}

      </ul>
    </div>
  );
};

export default Experience;
