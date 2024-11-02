"use client"; // Ensure this is present if you're using client-side rendering
import Link from "next/link";
import { useEffect, useState } from "react";

import { BackgroundGradient } from "./ui/background-gradient"; // Ensure this component exists

// Define the project type
interface Project {
  id: number;
  title: string;
  slug: string;
  description: string;
  instructor: string;
  isFeatured: boolean;
}

const FeaturedProjects = () => {
  const [featuredProjects, setFeaturedProjects] = useState<Project[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        // Dynamically import the JSON file to avoid issues with server/client rendering
        const projectData = await import("./data/projects.json");
        const featured = projectData.projects.filter(
          (project: Project) => project.isFeatured
        );
        setFeaturedProjects(featured);
      } catch (error) {
        console.error("Failed to load project data:", error);
      }
    };

    loadProjects();
  }, []);

  return (
    <div className="py-12 bg-gray-900">
      <div className="text-center">
        <h2 className="text-base font-semibold tracking-wide text-teal-600 uppercase">
          My Projects
        </h2>
        <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-white sm:text-4xl">
          Learn and Earn Money
        </p>
      </div>
      <div className="mx-8 mt-10">
        <div className="grid justify-center grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <div key={project.id} className="flex justify-center mt-20">
              <BackgroundGradient className="flex flex-col rounded-[22px] bg-white dark:bg-zinc-900 overflow-hidden h-full max-w-sm">
                <div className="flex flex-col items-center flex-grow p-4 text-center sm:p-6">
                  <p className="mt-4 mb-2 text-lg text-black sm:text-xl dark:text-neutral-200">
                    {project.title}
                  </p>
                  <p className="flex-grow text-sm text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <Link target="_blank" href={"https://github.com/Moh-Tayyab"} 
                  className="pt-2 mt-2 font-semibold sm:mt-0 text-neutral-600 dark:text-neutral-400 "
                  >
                    View More
                  </Link>
                </div>
              </BackgroundGradient>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-20 text-center">
        <Link
          target="_blank"
          href={"https://github.com/Moh-Tayyab"}
          className="px-4 py-2 transition duration-200 bg-white border rounded border-neutral-600 text-neutral-700 hover:bg-gray-100">
          View All Projects
        </Link>
      </div>
    </div>
  );
};

export default FeaturedProjects;
