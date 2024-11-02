'use client';
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const successStories = [
  {
    quote: "Collaborated with a startup founder to boost online sales with cutting-edge web technologies. Our responsive website significantly increased user engagement, leading to a surge in revenue.",
    name: "John Doe, CEO of Startup X",
    title: "Web Development Success Story",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Web Development Success Story
      </div>
    ),
  },
  {
    quote: "Crafted an intuitive and visually appealing design, establishing our app as a top competitor. User-centric features and seamless navigation resulted in exceptional user satisfaction.",
    name: "Jane Smith, UX Designer at Mobile App Co.",
    title: "UI/UX Design Success Story",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <p>UI/UX Design Success Story</p>
      </div>
    ),
  },
  {
    quote: "Implemented efficient version control management, resulting in faster project delivery. Streamlining our workflow and ensuring access to the latest codebase minimized errors and bottlenecks.",
    name: "Michael Johnson, Project Manager at Tech Corp.",
    title: "Version Control Success Story",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] flex items-center justify-center text-white">
        Version Control Success Story
      </div>
    ),
  },
  {
    quote: "Created engaging content, leading to higher conversion rates and improved brand loyalty. Our strategic content approach resonated with the audience, fostering deeper connections with brands.",
    name: "Emily Johnson, Content Strategist at Marketing Agency",
    title: "Content Creation Success Story",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        Content Creation Success Story
      </div>
    ),
  },
  {
    quote: "Led a diverse team towards innovation and excellence, resulting in a groundbreaking solution. Our collaborative efforts and commitment to excellence propelled us beyond expectations.",
    name: "John Smith, CTO at Tech Innovations",
    title: "Innovation Leadership Success Story",
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--purple-500),var(--indigo-500))] flex items-center justify-center text-white">
        Innovation Leadership Success Story
      </div>
    ),
  },
];

function PortfolioTestimonial() {
  return (
    <div className="h-[40rem] w-full dark:bg-black 
    dark:bg-grid-white/[0.5] relative flex flex-col
    items-center justify-center overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-8
      z-10">Hear our Harmony: Voices of success</h2>
      <div className="flex justify-center w-full
      overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl">
          <InfiniteMovingCards
            items={successStories}
            direction="right"
            speed="slow"
          />
        </div>
      </div>
    </div>
  );
}

export default PortfolioTestimonial;
