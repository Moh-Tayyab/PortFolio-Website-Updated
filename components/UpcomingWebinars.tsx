'use client'
import Link from "next/link"
import { HoverEffect } from "./ui/card-hover-effect";

function UpcomingWebinars() {


  const featuredWebinars = [
   
   
  
   {
    "id": 1, 
   "title": "Typescript Developer",
   "link": "https://www.typescriptlang.org/",
   "description": "Proficient in utilizing TypeScript to develop robust, type-safe applications, enhancing code readability, maintainability, and scalability.",
   "instructor": "Fahad Khan,Muhammad Anas",
   "isFeatured": true
   },
    {
    "id": 2, 
   "title": "React Developer",
   "link": "https://reactjs.org/",
   "description": "Expert in building user interfaces using React, leveraging modern JavaScript features and best practices to create engaging and maintainable applications.",
   "instructor": "Mohammad Osama",
   "isFeatured": true   
   },
 
   {
    "id": 3, 
   "title": "Next.js Developer",
   "link": "https://nextjs.org/",
   "description": "Expert in building fast, scalable web applications using Next.js, leveraging React and server-side rendering for seamless user experiences.",
   "instructor": "Hina Naseer",
   "isFeatured": true
   },
   {
    "id": 4, 
   "title": "UI/UX Design",
   "link": "https://www.uidesign.com/",
   "description": "Expert in designing engaging, intuitive, and visually appealing user interfaces using UI/UX design principles and tools.",
   "instructor": "Saleem Raza",
   "isFeatured": true
   
   },
   {
    "id": 5,
    "title": "Python Developer",
    "link": "https://www.python.org/",
    "description": "Expert in utilizing Python to develop robust, efficient, and scalable applications, enabling innovative decision-making and improving the performance of AI systems.",
    "instructor": "Malik Faiq",
    "isFeatured": true
   },
   {  
    "id": 6, 
   "title": "Agentic AI",
   "link": "https://www.agenticai.com/",
   "description": "Expert in developing intelligent, personalized, and context-aware AI solutions, enabling businesses to optimize their operations and improve customer experiences.",
   "instructor": "Muhammad Qasim",
   "isFeatured": true
   }
  
]



  return (
    <div className="py-12 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
            <div className="text-center">
                <h2 className="text-base text-teal-600 font-semibold tracking-wide uppercase">My Skills</h2>
                <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">Enhance Your Next.js Journey</p>
            </div>
            <div className="mt-10">
             <HoverEffect 
             items={featuredWebinars.map(webinar => (
                {
                    title: webinar.title,
                    description: webinar.description,
                    link : webinar.link
                }
             ))}
             />
            </div>
                  <div className='mt-20 text-center'>
        <Link target="_blank" href={""} className="px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200">
          View All Skills
        </Link>
      </div>
        </div>
        </div>
  )
}

export default UpcomingWebinars