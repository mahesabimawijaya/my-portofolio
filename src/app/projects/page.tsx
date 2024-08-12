"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import useDarkMode from "@/hooks/useDarkMode";
import Carousel from "@/components/Carousel";

const slides = ["/projects/palugada.png", "/projects/palugada2.png", "/projects/palugada3.png", "/projects/palugada4.png"];

export default function Projects() {
  const darkMode = useDarkMode();
  return (
    <main className={`${darkMode ? "bg-black" : "bg-white"} w-full h-auto xl:px-[200px] py-[130px] flex justify-center`}>
      <div className="flex flex-col w-full max-w-[910px] h-auto space-y-16 items-center lg:items-start">
        <h1 className={`${darkMode ? "text-white" : ""}  text-4xl font-bold font-Montserrat`}>My Projects</h1>
        <div id="projects-container" className="flex flex-col w-full space-y-20 px-10">
          <div id="palugada" className="flex flex-col bg-white shadow-lg border border-slate-300 h-auto rounded-md">
            <Carousel autoSlide={true}>
              {slides.map((image, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={image} className="rounded-t-md object-cover object-center" alt="unify" />
              ))}
            </Carousel>
            <div id="project-desc" className="flex flex-col py-6 px-8">
              <div className="flex flex-col space-y-3 mb-5 md:mb-0 md:space-y-0 md:flex-row items-center justify-between">
                <Reveal>
                  <h2 className="text-2xl font-semibold">Palugada Store</h2>
                </Reveal>
                <div className="flex items-center space-x-5">
                  <Reveal>
                    <div>
                      <Link href={"https://drive.google.com/file/d/16O2DAX417o3KT9-wi6aEbLSFsQX8mUzz/view?usp=sharing"} target="_blank">
                        <div className="bg-blue-600 text-white px-4 py-2 rounded-md hover:opacity-80 duration-150">Specs</div>
                      </Link>
                    </div>
                  </Reveal>
                  <Reveal>
                    <div>
                      <Link href={"https://github.com/purwadhikafullstack/JCWDOL012-04"} target="_blank">
                        <div className="bg-black text-white px-4 py-2 rounded-md hover:opacity-80 duration-150">Github</div>
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </div>
              <Reveal>
                <h4 className="text-lg text-slate-700 text-center md:text-start">Multi Warehouse E-Commerce - Feature 2</h4>
              </Reveal>
              <Reveal>
                <p className="text-sm text-justify mt-5">
                  Palugada Store is a Multi-Warehouse E-Commerce platform aimed at enhancing shipping efficiency and reducing costs. In this project, I assumed responsibility for product management,
                  inventory control, and generating product reports. Leveraging Next.js and TypeScript, I developed the frontend, implementing features such as product listing, CRUD operations for
                  products and categories, stock management, sales reporting, and role-based authorization. Concurrently, I constructed the backend using Node.js, Express.js, and Prisma ORM,
                  facilitating custom queries, stock management, and APIs. The result was a robust multi-warehouse e-commerce solution, featuring a user-friendly interface optimized for seamless
                  navigation.
                </p>
              </Reveal>
            </div>
          </div>
          <div id="unify" className="flex flex-col bg-white shadow-lg border border-slate-300 h-auto rounded-md">
            <div className="relative w-full h-[160px] md:h-[320px] lg:h-[390px] border-b opacity-0 animate-slide-in">
              <Image src={"/projects/unify.png"} className="rounded-t-md object-cover object-center" fill alt="unify" />
            </div>
            <div id="project-desc" className="flex flex-col py-6 px-8">
              <div className="flex flex-col space-y-3 mb-5 md:mb-0 md:space-y-0 md:flex-row items-center justify-between">
                <Reveal>
                  <h2 className="text-2xl font-semibold">Unify</h2>
                </Reveal>
                <div className="flex items-center space-x-5">
                  <Reveal>
                    <div>
                      <Link href={"https://drive.google.com/file/d/1SFBzBXZ8pChZXlZiY5S5hFGejNjsN8D2/view?usp=sharing"} target="_blank">
                        <div className="bg-blue-600 text-white px-4 py-2 rounded-md hover:opacity-80 duration-150">Specs</div>
                      </Link>
                    </div>
                  </Reveal>
                  <Reveal>
                    <div>
                      <Link href={"https://github.com/mahesabimawijaya/event-management-platform"} target="_blank">
                        <div className="bg-black text-white px-4 py-2 rounded-md hover:opacity-80 duration-150">Github</div>
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </div>
              <Reveal>
                <h4 className="text-lg text-slate-700 text-center md:text-start">Event Management Website - Feature 1</h4>
              </Reveal>
              <Reveal>
                <p className="text-sm text-justify mt-5">
                  Unify is an Event Organizer Website, designed to facilitate event management. My role encompassed managing CRUD operations for events, developing the landing page, implementing
                  discounts and promotions, and integrating event ratings functionality. Employing Next.js for the frontend and Node.js with Express.js for the backend, I ensured seamless
                  communication between the user interface and server-side operations. The outcome was an aesthetically pleasing website resembling an e-commerce platform, yet offering comprehensive
                  visual and detailed event information.
                </p>
              </Reveal>
            </div>
          </div>
          <div id="asaba" className="flex flex-col bg-white shadow-lg border border-slate-300 h-auto rounded-md ">
            <div className="relative w-full h-[160px] md:h-[320px] lg:h-[390px] border-b opacity-0 animate-slide-in">
              <Image src={"/projects/asaba.png"} className="rounded-t-md object-cover object-center" fill alt="asaba-innotech" />
            </div>
            <div id="project-desc" className="flex flex-col py-6 px-8">
              <div className="flex flex-col space-y-3 mb-5 md:mb-0 md:space-y-0 md:flex-row items-center justify-between">
                <Reveal>
                  <h2 className="text-2xl font-semibold">Asaba Innotech</h2>
                </Reveal>
                <div className="flex items-center space-x-5">
                  <Reveal>
                    <div>
                      <Link href={"https://code-challange-2.vercel.app/"} target="_blank">
                        <div className="bg-green-600 text-white px-4 py-2 rounded-md hover:opacity-80 duration-150">Live</div>
                      </Link>
                    </div>
                  </Reveal>
                  <Reveal>
                    <div>
                      <Link href={"https://drive.google.com/file/d/1U-dhqSmkBELp5rnheSXlwA3QjeJtRIaE/view?usp=drive_link"} target="_blank">
                        <div className="bg-blue-600 text-white px-4 py-2 rounded-md hover:opacity-80 duration-150">Specs</div>
                      </Link>
                    </div>
                  </Reveal>
                  <Reveal>
                    <div>
                      <Link href={"https://github.com/mahesabimawijaya/code-challange-2"} target="_blank">
                        <div className="bg-black text-white px-4 py-2 rounded-md hover:opacity-80 duration-150">Github</div>
                      </Link>
                    </div>
                  </Reveal>
                </div>
              </div>
              <Reveal>
                <h4 className="text-lg text-slate-700 text-center md:text-start">Company Profile Website</h4>
              </Reveal>
              <Reveal>
                <p className="text-sm text-justify mt-5">
                  Asaba Innotech is a Company Profile Website aiming to provide detailed information on company profiles, services, products, and teams. Taking on the project solo, I was responsible
                  for its entire development. Utilizing Next.js exclusively for the frontend, I designed the website to focus solely on presenting information, thus eliminating the need for a backend.
                  The project culminated in the creation of a professional company profile website
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
