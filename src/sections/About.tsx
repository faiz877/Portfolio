import { SectionHeader } from "@/components/SectionHeader";
import { Card } from "@/components/Card";
import bookImage from "@/assets/images/book-cover.png";
import Image from "next/image";
import JavaScriptIcon from "@/assets/icons/square-js.svg";
import HTMLIcon from "@/assets/icons/html5.svg";
import CSSIcon from "@/assets/icons/css3.svg";
import ReactIcon from "@/assets/icons/react.svg";
import GithubIcon from "@/assets/icons/github.svg";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";
import { ToolBoxItems } from "@/components/ToolBoxItems";

const toolboxItems = [
  {
    title: "Javascript",
    iconType: JavaScriptIcon,
  },
  {
    title: "HTML5",
    iconType: HTMLIcon,
  },
  {
    title: "CSS",
    iconType: CSSIcon,
  },
  {
    title: "React",
    iconType: ReactIcon,
  },
  {
    title: "Github",
    iconType: GithubIcon,
  },
  {
    title: "Node",
    iconType: GithubIcon,
  },
  {
    title: "MongoDB",
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: "Football",
    emoji: "⚽",
    left: "5&",
    top: "5&",
  },
  {
    title: "Film",
    emoji: "🎬",
    left: "50&",
    top: "5&",
  },
  {
    title: "Music",
    emoji: "🎧",
    left: "10&",
    top: "35&",
  },
  {
    title: "Reading",
    emoji: "📚",
    left: "35%",
    top: "40&",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "70%",
    top: "45%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "5%",
    top: "65%",
  },
  {
    title: "Gaming",
    emoji: "🎮",
    left: "45%",
    top: "70%",
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="A Glimpse Into My World"
          description="Learn more about who I am, what I do and what inspires me"
        ></SectionHeader>
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books that shape my perspective"
            ></CardHeader>
            <div className="w-30 mx-auto mt-8">
              <Image src={bookImage} alt="Book Cover"></Image>
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My ToolBox"
              description="Explore the technologies and tools I use to build cool stuff"
              className="px-6 pt-6"
            ></CardHeader>
            <ToolBoxItems items={toolboxItems} className="mt-6"></ToolBoxItems>
            <ToolBoxItems
              items={toolboxItems}
              className="mt-6 "
              itemsWrapperClassName="-translate-x-1/2"
            ></ToolBoxItems>
          </Card>
          <Card className="h-[320px] p-0 flex flex-col">
            <CardHeader
              title="Beyond The Code"
              description="Explore my interests and hobbies"
              className="px-6 pt-6"
            ></CardHeader>
            <div className="relative flex-1">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.title}
                  className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                  style={{
                    left: hobby.left,
                    top: hobby.top,
                  }}
                >
                  <span className="font-medium text-gray-950">
                    {hobby.title}
                  </span>
                  <span>{hobby.emoji}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <Image src={mapImage} alt="map"></Image>
            <Image src={smileMemoji} alt="smile"></Image>
          </Card>
        </div>
      </div>
    </div>
  );
};
