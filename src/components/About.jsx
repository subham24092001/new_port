import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About Me</p>
        </div>

        <p className="text-xl">
          My name is Subham Singh.
          <br/>
          Currently I am a 4th Computer Science Student at Institute of Engineering and Technology , Lucknow.
        </p>
        <br />

        <p className="text-xl">
          I am a Problem Setter Intern at iMocha Company, where i create various problems based on DSA.
          <br /><br />
          I am a Competitive Programmer. I have solved more than 1000+ problems on various coding platforms like
          Codeforces, CodeChef , CSES , GFG, LeetCode etc.
          <br /><br />
          Apart from this , I am a Frontend developer. 
          <br />
          I have worked with many technologies like HTML / CSS / JS / ReactJs / TypeScript / TailwindCss.
          <br /><br />
          I have created some projects using these technologies like ChatApp, Portfolio website , Blog Website, Ecommerce Website, Music App.
        </p>
      </div>
    </div>
  );
};

export default About;
