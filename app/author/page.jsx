import Hero from "@/components/Hero";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Author",
    description:
      "Welcome to Educhacha - The ultimate guide to the best schools in the United Arab Emirates! ",
  };
}

export default function page() {
  return (
    <div>
      {/* <Hero /> */}
      <div className="">
        <div className="flex flex-col  items-center p-16">
          <h1 className="text-4xl lg:text-5xl text-center font-bold py-4 lg:py-10">
            Author
          </h1>

          <div className="px-2 lg:px-10 py-5 flex  bg-white rounded-lg flex-col lg:flex lg:flex-row  w-[400px] md:w-[800px] lg:w-[1200px]  items-center gap-10">
            <div className="relative h-[350px] w-[300px] rounded-2xl shadow-2xl">
              <img
                src="/author.jpeg"
                alt="AirMax Pro"
                className="z-0 h-full w-full rounded-lg object-cover"
              />

              <div className=" text-[16px] mt-6">
                <p className=" text-[20px] font-bold">Know More</p>

                <a target="_blank" href="https://www.negivaibhav.com/">
                  <p className="text-blue-500 underline">negivaibhav.com</p>
                </a>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-left">
                <h1 className="text-lg font-semibold  text-white">
                  Vaibhav Negi
                </h1>
                <p className="text-sm text-gray-300 pb-2">Author</p>
              </div>
            </div>

            <div className="flex flex-col gap-5 w-[300px] md:w-[600px] lg:w-[900px]  leading-[1.4rem] mt-14 md:mt-0 lg:mt-0 ">
              <div className="lg:text-start text-center">
                <h2 className="font-bold text-2xl text-black">Vaibhav Negi</h2>
                <p className="text-black">Educational Content Specialist</p>
              </div>
              <p>
              Hello! I&apos;m Vaibhav Negi, an education advocate and digital content expert with over three years of experience in crafting insightful, student-focused resources. My journey in the education sector began with a desire to make complex concepts and processes easier for families to navigate. Today, I&apos;m proud to be part of Edu Chacha, where I create meaningful content that bridges the gap between questions and solutions.
              </p>
              <p>
              At Edu Chacha, my focus is on simplifying the school search process, providing detailed and actionable insights that empower parents and students. Whether I&apos;m writing about school admissions, campus facilities, or academic trends, my goal is to ensure that every family feels informed and confident in their educational decisions.
              </p>
              <p>
              Having collaborated with various platforms in the education space, I&apos;ve developed a deep understanding of what matters most to families: trust, relevance, and reliability. I bring these principles to every piece of content I create, ensuring it resonates with India&apos;s diverse and dynamic education ecosystem.
              </p>
              <p>
              Beyond the education sector, I&apos;ve honed my skills in digital storytelling through freelance projects in lifestyle and sports writing. These experiences have taught me the value of connecting with readers on a personal level while maintaining a commitment to quality and authenticity.
              </p>
              <p>
              At Edu Chacha, I&apos;m dedicated to helping families navigate their educational journeys with clarity and confidence. Through reliable, well-researched content, I strive to make Edu Chacha a trusted companion for parents and students alike.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
