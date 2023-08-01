type Link={
    id:number
    href:string,
    label:string,
}

type Projects={
    id:number
    title?:string
}


type Experience={
  id:number,
  companyName:string,
  positon:string,
  content:string
}

const links:Link[] = [
    { id:1, href: "/", label: "Home" },
    { id:2,href: "/", label: "Portfolio" },
    { id:3,href: "/", label: "Experience" },
  ];


const projects:Projects[]=[
  { id:1,title: "" },
  { id:2,title: "" },
  { id:3,title: "" },
  { id:4,title: "" },
  { id:5,title: "" },
  { id:6,title: "Your website here" }
]  

const experiences:Experience[]=[{
  id:1,
  companyName:'Company ABC',
  positon:"Position ABC",
  content:"This is the phase where I dive deep into your world and get to know you. Before I can properly design your high-performing website, I need to understand you, your pain-points, and your audience."

},{
  id:2,
  companyName:'Company ABC',
  positon:"Position ABC",
  content:"This is the phase where I dive deep into your world and get to know you. Before I can properly design your high-performing website, I need to understand you, your pain-points, and your audience."

},{
  id:3,
  companyName:'Company ABC',
  positon:"Position ABC",
  content:"This is the phase where I dive deep into your world and get to know you. Before I can properly design your high-performing website, I need to understand you, your pain-points, and your audience."

}]


export {links,projects,experiences}  