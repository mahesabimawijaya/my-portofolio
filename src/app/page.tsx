"use client";

import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import useDarkMode from "@/hooks/useDarkMode";

export default function Home() {
  const darkMode = useDarkMode();
  return (
    <main className={`${darkMode ? "bg-black" : "bg-white"} w-full h-auto px-5 md:px-[100px] lg:px-[200px] py-[130px] flex justify-center`}>
      <div className="flex flex-col w-full max-w-[990px] h-auto space-y-14">
        <header id="header" className="flex flex-col items-center space-y-10 md:space-y-0 md:items-start md:flex-row  ">
          <Reveal>
            <div id="pics" className="relative w-[200px] h-[200px] xl:w-[265px] xl:h-[265px]">
              <Image className="object-cover object-center rounded-3xl" priority fill src={"/profile.jpg"} sizes="(min-width: 1280px) 265px, 200px" alt="pics" />
            </div>
          </Reveal>
          <div id="name" className="flex flex-col ml-10 xl:ml-20 justify-center">
            <Reveal>
              <div className={`${darkMode ? "text-white" : ""} text-4xl xl:text-6xl xl:w-[600px] font-bold font-Montserrat mb-[20px]`}>MAHESA BIMA WIJAYA</div>
            </Reveal>
            <Reveal>
              <div className="text-3xl xl:text-4xl font-bold text-blue-600 mb-[70px]">
                Web Dev<span className="bg-blue-600 text-white pr-20">eloper</span>
              </div>
            </Reveal>
            <Reveal>
              <div className="flex space-x-4">
                <div className="relative w-[40px] h-[40px]">
                  <Link href={"https://linkedin.com/in/mahesawijaya"} target="_blank">
                    <Image src={"/socials/linkedin.png"} fill sizes="40px" alt="linkedin" />
                  </Link>
                </div>
                <div className="relative w-[40px] h-[40px]">
                  <Link href={"https://github.com/mahesabimawijaya"} target="_blank">
                    <Image src={"/socials/github.png"} fill sizes="40px" alt="github" />
                  </Link>
                </div>
                <div className="relative w-[40px] h-[40px]">
                  <Link href={"https://wa.me/+6281384838398"} target="_blank">
                    <Image src={"/socials/whatsapp.png"} fill sizes="40px" alt="whatsapp" />
                  </Link>
                </div>
                <div className="relative w-[40px] h-[40px]">
                  <Link href={"mailto:mahesabw26@gmail.com"} target="_blank">
                    <Image src={"/socials/gmail.png"} fill sizes="40px" alt="gmail" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </header>
        <div id="body" className={`${darkMode ? "border-white text-white" : "border-black"} border w-full h-auto rounded-md px-[20px] py-[30px] `}>
          <div id="profile" className="flex flex-col space-y-5 mb-10">
            <Reveal>
              <div className="text-3xl font-semibold">PROFILE</div>
            </Reveal>
            <Reveal>
              <p className="text-justify">
                Hello, I am Mahesa Bima Wijaya, a web development enthusiast. Recently, I graduated from a Fullstack Web Development bootcamp. I can do both frontend and backend programming, but I
                prefer frontend because it&apos;s more visually appealing to me. Don&apos;t get me wrong, I still have good logic, therefore, I can do backend programming too.
              </p>
            </Reveal>
          </div>
          <div id="skills" className="flex flex-col space-y-5 mb-20">
            <Reveal>
              <div className="text-3xl font-semibold">SKILLS</div>
            </Reveal>

            <div id="skills-container" className="flex flex-wrap justify-center">
              <Reveal>
                <div className="relative w-[120px] h-[120px] mx-5 hover:scale-110 duration-150">
                  <Image src={"/skills/html.png"} fill sizes="120px" alt="html" />
                </div>
              </Reveal>
              <Reveal>
                <div className="relative w-[90px] h-[120px] mx-5 hover:scale-110 duration-150">
                  <Image src={"/skills/css.png"} fill sizes="90px" alt="css" />
                </div>
              </Reveal>
              <Reveal>
                <div className="relative w-[100px] h-[100px] m-5 hover:scale-110 duration-150">
                  <Image src={"/skills/javascript.png"} fill sizes="100px" alt="javascript" />
                </div>
              </Reveal>
              <Reveal>
                <div className="relative w-[150px] h-[100px] mt-5 hover:scale-110 duration-150">
                  <Image src={"/skills/reactjs.png"} fill sizes="150px" alt="reactjs" />
                </div>
              </Reveal>
              <Reveal>
                <div className="relative w-[140px] h-[100px] mt-5 hover:scale-110 duration-150">
                  <Image src={"/skills/tailwind.png"} fill sizes="140px" alt="tailwind" />
                </div>
              </Reveal>
              <Reveal>
                <div className="relative w-[100px] h-[100px] m-5 hover:scale-110 duration-150">
                  <Image src={"/skills/nextjs.png"} fill sizes="100px" alt="nextjs" />
                </div>
              </Reveal>
              <Reveal>
                <div className="relative w-[150px] h-[100px] m-5 hover:scale-110 duration-150">
                  <Image src={"/skills/nodejs.png"} fill sizes="150px" alt="nodejs" />
                </div>
              </Reveal>
              <Reveal>
                <div className="relative w-[300px] h-[100px] m-5 hover:scale-110 duration-150">
                  <Image src={"/skills/expressjs.png"} fill sizes="300px" alt="expressjs" />
                </div>
              </Reveal>
              <Reveal>
                <div className="relative w-[250px] h-[80px] m-5 hover:scale-110 duration-150">
                  <Image src={"/skills/prisma.png"} fill sizes="250px" alt="prisma" />
                </div>
              </Reveal>
              <Reveal>
                <div className="relative w-[200px] h-[100px] m-5 hover:scale-110 duration-150">
                  <Image src={"/skills/mysql.png"} fill sizes="200px" alt="mysql" />
                </div>
              </Reveal>
              <Reveal>
                <div className="relative w-[100px] h-[100px] m-5 hover:scale-110 duration-150">
                  <Image src={"/skills/postgresql.png"} fill sizes="100px" alt="postgresql" />
                </div>
              </Reveal>
            </div>
          </div>
          <div id="education" className={`${darkMode ? "text-white" : ""} flex flex-col space-y-5 mb-10`}>
            <Reveal>
              <div className="text-3xl font-semibold">EDUCATION</div>
            </Reveal>

            <div className="flex space-x-5">
              <Reveal>
                <div className="relative w-20 h-20">
                  <Image className="rounded-md" src={"/educations/purwadhika.jpeg"} fill sizes="80px" alt="purwadhika" />
                </div>
              </Reveal>

              <div className="flex flex-col">
                <Reveal>
                  <div className="font-semibold text-xl w-[110px] md:w-auto">Purwadhika Digital Technology School</div>
                </Reveal>
                <Reveal>
                  <div className={`${darkMode ? "text-slate-300" : "text-slate-700"} italic`}>Full Stack Web Development</div>
                </Reveal>
                <Reveal>
                  <div>85.95</div>
                </Reveal>
              </div>
            </div>
            <div className="flex space-x-5">
              <Reveal>
                <div className="relative w-16 mx-[8px] h-20">
                  <Image className="rounded-md" src={"/educations/sman1cikande.png"} fill sizes="64px" alt="sman 1 cikande" />
                </div>
              </Reveal>

              <div className="flex flex-col">
                <Reveal>
                  <div className="font-semibold text-xl">SMAN 1 Cikande</div>
                </Reveal>
                <Reveal>
                  <div className={`${darkMode ? "text-slate-300" : "text-slate-700"} italic`}>MIPA</div>
                </Reveal>
                <Reveal>
                  <div>89.98</div>
                </Reveal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
