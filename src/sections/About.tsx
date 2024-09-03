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
import { TechIcon } from "@/components/TechIcon";
import mapImage from "@/assets/images/map.png";
import smileMemoji from "@/assets/images/memoji-smile.png";
import { CardHeader } from "@/components/CardHeader";

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
  },
  {
    title: "Film",
    emoji: "🎬",
  },
  {
    title: "Music",
    emoji: "🎧",
  },
  {
    title: "Reading",
    emoji: "📚",
  },
  {
    title: "Gaming",
    emoji: "🎮",
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
        <div className="mt-20">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books that shape my perspective"
            ></CardHeader>
            <div className="w-30 mx-auto mt-8">
              <Image src={bookImage} alt="Book Cover"></Image>
            </div>
          </Card>
          <Card>
            <CardHeader
              title="My ToolBox"
              description="Explore the technologies and tools I use to build cool stuff"
            ></CardHeader>
            <div>
              {toolboxItems.map((item) => (
                <div
                  key={item.title}
                  className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
                >
                  <TechIcon component={item.iconType}></TechIcon>
                  <span className="font-semibold">{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <CardHeader
              title="Beyond The Code"
              description="Explore my interests and hobbies"
            ></CardHeader>
            <div>
              {hobbies.map((hobby) => (
                <div key={hobby.title}>
                  <span>{hobby.title}</span>
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
