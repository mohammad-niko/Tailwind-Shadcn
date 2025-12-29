import Card from "@/Component/common/Card.jsx";
import Logos from "@/Component/common/Logos.jsx";
import { Button } from "@/Components/ui/button.jsx";


function Main() {
  const cardData = [
    {
      title: "Performance Optimization",
      text: "Enhancing React apps by minimizing re-renders, lazy loading components, and utilizing memoization techniques for improved performance and speed.",
    },
    {
      title: "Redux State Management",
      text: "Efficiently manage complex application state using Redux Toolkit, providing simplified syntax and built-in best practices for developers.",
    },
    {
      title: "Tailwind Responsive Design",
      text: "Create responsive web interfaces effortlessly using Tailwind CSS utility classes, ensuring a consistent experience across all device sizes.",
    },
    {
      title: "Vite Production Deployment",
      text: "Streamline the deployment process of Vite-based projects to production environments with optimized build configurations and deployment strategies.",
    },
    {
      title: "React Library Integration",
      text: "Seamlessly add functionality to React applications by integrating third-party libraries, ensuring smooth interactions and enhanced capabilities.",
    },
    {
      title: "React App Authentication",
      text: "Secure React applications with robust authentication mechanisms, using libraries like Firebase, Auth0, or custom JWT-based solutions.",
    },
  ];
  const logos =["/js.png","/ts.png","/react.png","/redux.png","/tailwind.png","/nextjs.png"]
  return (
    <section className="flex flex-col  py-1.5 px-5">
      {/* hero section */}
      <section className="flex flex-col lg:flex-row justify-center items-center gap-4 ">
        <div className="flex flex-col justify-center gap-10 order-2 lg:order-1 pt-3">
          <h1 className="text-start px-1 text-2xl md:text-4xl lg:text-6xl font-bold tracking-tight text-balance ">
            Scalable Apps With frameworks
          </h1>
          <p className="leading-7 not-first:mt-6 w-full px-1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad
            praesentium enim reprehenderit labore iusto dicta, quae maiores
            perferendis magni veniam deserunt quia itaque.
          </p>
          <div className="flex gap-2">
            <Button className="py-5 px-6">Download For Free</Button>
            <Button className="p-5" variant="outline">
              Github Repo
            </Button>
          </div>
        </div>
        <div className="w-auto lg:w-225 flex items-start order-1 lg:order-2">
          <img className="w-full " src="/hero-source.svg" alt="hero img" />
        </div>
      </section>

      <section className="mt-10">
        <div>
          {" "}
          <h2 className=" text-2xl  md:text-4xl  xl:text-4xl  font-semibold">
            Everything you need to start a website
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
            consequuntur.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mt-10"> 
          {cardData.map((d, index) => (
            <Card key={index} info={d} />
          ))}
        </div>
      </section>

      <section className=" flex flex-col flex-wrap gap-5 xl:gap-10 xl:p-20 lg:px-25 xl:px-40">
       <p className="text-center">Works with your technologies</p>
       <div className="flex justify-evenly">
       {logos.map((i,index)=> <Logos key={index} src={i} />)}
       </div>

      <div className="flex flex-col items-center gap-15 bg-gray-950 text-white w-full sm:w-auto p-5 sm:p-20 rounded-xl ">
      <h2 className=" text-2xl smtext-3xl text-center md:text-4xl xl:text-6xl">Build faster websites</h2>
      <p className="w-auto">Pull content from anywhere and serve it fast with Astro's next-gen island architecture</p>
      <Button variant="outline" className="text-black px-7 py-5">Get Start</Button>
      </div>
      </section>
    </section>
  );
}

export default Main;
