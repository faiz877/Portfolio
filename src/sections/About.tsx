import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import StarIcon from "@/assets/icons/star.svg";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";

const toolboxItems = [
  {
    title: "Javascript",
    icon: <JavaScriptIcon />,
  },
  {
    title: "HTML5",
    icon: <HTMLIcon />,
  },
  {
    title: "CSS",
    icon: <CSSIcon />,
  },
  {
    title: "React",
    icon: <ReactIcon />,
  },
  {
    title: "Github",
    icon: <GithubIcon />,
  },
  {
    title: "Node",
    icon: <GithubIcon />,
  },
  {
    title: "MongoDB",
    icon: <GithubIcon />,
  },
];

export const AboutSection = () => {
  return (
    <div className="pb-96">
      <SectionHeader
        eyebrow="About Me"
        title="A Glimpse Into My World"
        description="Learn more about who I am, what I do and what inspires me"
      ></SectionHeader>
      <div>
        <Card>
          <div>
            <StarIcon></StarIcon>
            <h3>My Reads</h3>
            <p>Explore the Books</p>
          </div>
          <Image src={bookImage} alt="Book Cover"></Image>
        </Card>
        <Card>
          <div>
            <StarIcon></StarIcon>
            <h3>My ToolBox</h3>
            <p>Explore the technologies and tools I use</p>
          </div>
          <div>
            {toolboxItems.map((item) => (
              <div key={item.title}>
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
