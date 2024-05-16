import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="bg-black w-full h-auto px-[200px] py-[100px] flex justify-center">
      <div className="flex flex-col w-full max-w-[1440px] h-auto space-y-14">
        <header id="header" className="flex opacity-0 animate-slide-in">
          <div id="pics" className="relative w-[300px] h-[300px]">
            <Image className="object-cover object-center rounded-3xl" fill src={"/profile.jpg"} alt="pics" />
          </div>
          <div id="name" className="flex flex-col ml-20 justify-center">
            <div className="text-white text-6xl w-[600px] font-bold font-Montserrat mb-[20px]"> MAHESA BIMA WIJAYA</div>
            <div className="text-4xl font-bold text-blue-600 mb-[70px]">
              Web Dev<span className="bg-blue-600 text-white pr-20">eloper</span>
            </div>
            <div className="flex space-x-4">
              <div className="relative w-[40px] h-[40px]">
                <Link href={"https://linkedin.com/in/mahesawijaya"} target="_blank">
                  <Image src={"/linkedin.png"} fill alt="linkedin" />
                </Link>
              </div>
              <div className="relative w-[40px] h-[40px]">
                <Link href={"https://github.com/mahesabimawijaya"} target="_blank">
                  <Image src={"/github.png"} fill alt="github" />
                </Link>
              </div>
              <div className="relative w-[40px] h-[40px]">
                <Link href={"https://wa.me/+6281384838398"} target="_blank">
                  <Image src={"/whatsapp.png"} fill alt="whatsapp" />
                </Link>
              </div>
              <div className="relative w-[40px] h-[40px]">
                <Link href={"mailto:mahesabw26@gmail.com"} target="_blank">
                  <Image src={"/gmail.png"} fill alt="gmail" />
                </Link>
              </div>
            </div>
          </div>
        </header>
        <div id="body" className="border border-white text-white w-full h-auto rounded-md px-[40px] py-[30px]">
          <div id="profile" className="flex flex-col space-y-5 mb-10">
            <div className="text-3xl font-semibold">PROFILE</div>
            <p className="text-justify">
              Hello, I am Mahesa Bima Wijaya, a web development enthusiast. Recently, I graduated from a Fullstack Web Development bootcamp. I can do both frontend and backend programming, but I
              prefer frontend because it&apos;s more visually appealing to me. Don&apos;t get me wrong, I still have good logic, therefore, I can do backend programming too.
            </p>
          </div>
          <div id="skills" className="flex flex-col space-y-5 mb-20">
            <div className="text-3xl font-semibold">SKILLS</div>
            <div id="skills-container" className="flex flex-wrap justify-center">
              <div className="relative w-[120px] h-[120px] mx-5">
                <Image src={"/skills/html.png"} fill alt="html" />
              </div>
              <div className="relative w-[90px] h-[120px] mx-5">
                <Image src={"/skills/css.png"} fill alt="css" />
              </div>
              <div className="relative w-[100px] h-[100px] m-5">
                <Image src={"/skills/javascript.png"} fill alt="javascript" />
              </div>
              <div className="relative w-[150px] h-[100px] mt-5">
                <Image src={"/skills/reactjs.png"} fill alt="reactjs" />
              </div>
              <div className="relative w-[140px] h-[100px] mt-5">
                <Image src={"/skills/tailwind.png"} fill alt="tailwind" />
              </div>
              <div className="relative w-[100px] h-[100px] m-5">
                <Image src={"/skills/nextjs.png"} fill alt="nextjs" />
              </div>
              <div className="relative w-[150px] h-[100px] m-5">
                <Image src={"/skills/nodejs.png"} fill alt="nodejs" />
              </div>
              <div className="relative w-[300px] h-[100px] m-5">
                <Image src={"/skills/expressjs.png"} fill alt="expressjs" />
              </div>
              <div className="relative w-[250px] h-[80px] m-5">
                <Image src={"/skills/prisma.png"} fill alt="prisma" />
              </div>
              <div className="relative w-[200px] h-[100px] m-5">
                <Image src={"/skills/mysql.png"} fill alt="mysql" />
              </div>
              <div className="relative w-[100px] h-[100px] m-5">
                <Image src={"/skills/postgresql.png"} fill alt="postgresql" />
              </div>
            </div>
          </div>
          <div id="education" className="text-white flex flex-col space-y-5 mb-10">
            <div className="text-3xl font-semibold">EDUCATION</div>
            <div className="flex space-x-5">
              <div className="relative w-20 h-20">
                <Image className="rounded-md" src={"/educations/purwadhika.jpeg"} fill alt="purwadhika" />
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-xl">Purwadhika Digital Technology School</div>
                <div className="text-slate-300 italic">Full Stack Web Development</div>
                <div>85.95</div>
              </div>
            </div>
            <div className="flex space-x-5">
              <div className="relative w-20 h-20">
                <Image className="rounded-md" src={"/educations/sman1cikande.png"} fill alt="sman 1 cikande" />
              </div>
              <div className="flex flex-col">
                <div className="font-semibold text-xl">SMAN 1 Cikande</div>
                <div className="text-slate-300 italic">MIPA</div>
                <div>89.98</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
