import ParallaxSection from "./ParallaxSection";

const data = [
  {
    id: "",
    title: "Chatbots answer questions, AI agents solve problems",
    caption: " solve problems",
    description:
      "While  chatbots handle basic conversations, AI agents automate workflows, analyze data, and make real-time decisions to optimize every aspect of your business. From prospecting clients to managing customer service, our AI agents scale, adapt, and drive effortless growthand efficiency.",
    image: "/ai-euklydia/ai-agents-vs-chatboot.png",
  },

  {
    id: "",
    title: "AI Sales Agents Automate, Optimize, and Close More Deals!",
    caption: "More Deals!",
    description:
      "Elevate your sales tracking with our AI sales agents powered by robust LLMs. track deal progress, and forecast revenues with precision, ensuring no opportunity is missed. With our AI agents for sales, you can deliver personalized outreach at scale.",
    image: "/ai-euklydia/ai-agents-decisions.png",
  },

  {
    id: "",
    title: "AI Management Agents Smart Risk, Smart Decisions",
    caption: "Automate, Optimize",
    description:
      "Our AI management agent goes beyond task allocation—it analyzes past data, predicts issues, and optimizes resources in real time. By keeping projects on track and teams aligned, it ensures efficiency, minimizes delays, and eliminates wasted effort, making business operations smoother and more productive.",
    image: "/ai-euklydia/ai-agents-decisions.png",
  },
];

const images = [
  "https://cdn.pixabay.com/photo/2016/01/19/18/00/city-1150026_960_720.jpg",
  "https://cdn.pixabay.com/photo/2016/11/23/15/32/pedestrians-1853552_960_720.jpg",
  "https://cdn.pixabay.com/photo/2015/03/26/09/43/city-690158_960_720.jpg",
  "https://cdn.pixabay.com/photo/2017/02/25/17/38/george-washington-bridge-2098351_960_720.jpg",
  "https://cdn.pixabay.com/photo/2018/12/09/07/36/city-3864462_960_720.jpg",
];

export default function Parallax() {
  return (
    <div>
      {data.map((elem, index) => (
        <ParallaxSection
          key={index}
          elem={elem}
          title="Awesome Parallax Scrolling"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
          backgroundText={`Parallax ${index + 1}`} // Dynamically change the text
          reverse={index % 2 === 1}
        />
      ))}
    </div>
  );
}
