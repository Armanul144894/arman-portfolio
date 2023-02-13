import React from "react";

const About = () => {
  return (
    <div id="about" className="my-10">
      <h1 className="text-4xl font-bold ">
        <strong className="text-orange-600">About</strong> Me
      </h1>
      <br />
      <hr />

      <div className="text-xl font-bold text-start mt-10">
        <h1>
          Name : <strong className="text-orange-600">Armanul Islam</strong>
        </h1>
        <h1>
          Age : <strong className="text-orange-600">23</strong>
        </h1>
        <h1>
          Qualification : <strong className="text-orange-600">BSc</strong>
        </h1>
        <h1>
          Post :{" "}
          <strong className="text-orange-600">Front End Developer</strong>
        </h1>
      </div>

      <div className="text-start my-4 font-bold text-xl">
        <h1>
          A self-motivated, committed and enthusiastic frontend developer who is
          passionate about building web applications in JavaScript (including
          React.js). Love to solve problems, write clean and maintainable code
          for web applications. Looking forward to a promising career in the
          position of Frontend Developer.
        </h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-10 text-white font-bold gap-10">
        <div className="card bg-base-300 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">0</h2>
            <p>Years Of Experience</p>
          </div>
        </div>

        <div className="card bg-base-300 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">20+</h2>
            <p>Project Completed</p>
          </div>
        </div>

        <div className="card bg-base-300 shadow-xl">
          <div className="card-body items-center text-center">
            <h2 className="card-title">2+</h2>
            <p>Awards Won</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
