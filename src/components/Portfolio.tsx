import { projects } from "@/data/data";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";

const Portfolio: React.FC = () => {
  return (
    <div className="mt-5 lg:mt-20 w-full pb-12" style={{background: "linear-gradient(to right, white 20%, #FEF4F6 20%)"}}>
      <h3 className="font-bold" style={{ color: "#B4B2C4" }}>
        PORTFOLIO
      </h3>
      <h1 className="text-blue-950 text-2xl font-bold">Recent Works</h1>
      <ul className="flex flex-wrap gap-5 mt-5 items-center  justify-center">
        {projects.map((a) => (
          <Card
            key={a.id}
            className="w-80 h-80 flex items-center flex-col justify-center"
            style={{ background: "#D9F4FF" }}
          >
            <CardHeader>
              <CardTitle>{a.title}</CardTitle>
            </CardHeader>
            <CardContent>
              {a.title && (
                <Button className="bg-blue-950 font-2xl">See my Work</Button>
              )}
            </CardContent>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default Portfolio;
