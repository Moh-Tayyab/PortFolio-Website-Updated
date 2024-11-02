'use client'
import { WavyBackground } from "@/components/ui/wavy-background"
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
        designation: "Full Stack Engineera",
        image: '/saleem.png'
     },
     {
      id: 4,
      name: "Muhammad Osama",
      designation: "Staff Software Engineer",
      image: '/osama.png'
   },
]

function Instructor() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex
    items-center justify-center">
        <WavyBackground className="w-full max-w-7xl mx-auto
        flex flex-col items-center justify-center h-full">
             <h2 className="text-2xl md:text-4xl lg:text-7xl
             text-white font-bold text-center mb-8">Meet Our Instructors</h2>
             <p className="text-base md:text-lg text-white
             text-center mb-4">Discover the talented professionals who will
                guide your all the things.
             </p>
             <div className="flex flex-row items-center
             justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
             </div>
        </WavyBackground>
        </div>
  )
}

export default Instructor