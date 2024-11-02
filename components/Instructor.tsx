'use client';
import { WavyBackground } from "@/components/ui/wavy-background";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const instructors = [
     {
        id: 1,
        name: "Muhammad Tayyab",
        designation: "Frontend Developer",
        image: '/my.png'
     },
     {
        id: 2,
        name: "Hina Naseer Ahmed",
        designation: "DevOps Engineer",
        image: '/hina.png'
     },
     {
        id: 3,
        name: "Saleem Raza",
        designation: "Full Stack Engineer",
        image: '/saleem.png'
     },
     {
        id: 4,
        name: "Muhammad Osama",
        designation: "Staff Software Engineer",
        image: '/osama.png'
     },
];

function Instructor() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex items-center justify-center">
        <WavyBackground key="instructor-wavy-background" className="flex flex-col items-center justify-center w-full h-full mx-auto max-w-7xl">
             <h2 className="mb-8 text-2xl font-bold text-center text-white md:text-4xl lg:text-7xl">Meet Our Instructors</h2>
             <p className="mb-4 text-base text-center text-white md:text-lg">Discover the talented professionals who will guide you through all things.</p>
             <div className="flex flex-row items-center justify-center w-full mb-10">
                <AnimatedTooltip items={instructors} />
             </div>
        </WavyBackground>
    </div>
  );
}

export default Instructor;
