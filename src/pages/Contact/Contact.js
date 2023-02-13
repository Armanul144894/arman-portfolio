import React from "react";
import { FaPhone, FaLocationArrow, FaGoogle } from "react-icons/fa";

const Contact = () => {
  return (
    <div id="contact" className="py-5">
      <h1 className="text-4xl font-bold ">
        <strong className="text-orange-600">Contact</strong> Me
      </h1>
      <br />
      <hr />
      <div className="hero py-6 min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row gap-20">
          <div className="text-center lg:text-left">
            <h1 className="text-2xl font-bold">CONTACT INFO!</h1>
            <div className="mt-5 text-xl">
              <h1 className="flex flex-row gap-4 items-center my-2">
                {" "}
                <FaGoogle></FaGoogle>armanulislamkonok@gmail.com
              </h1>
              <h1 className="flex flex-row gap-4 items-center my-2">
                <FaPhone></FaPhone> +88 01701894228
              </h1>
              <h1 className="flex flex-row gap-4 items-center my-2">
                {" "}
                <FaLocationArrow></FaLocationArrow>Dhaka, Bangladesh
              </h1>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <div className="py-5">
              <h1>Have You Something to Say ?</h1>
              <h1>Feel free to message me</h1>
            </div>
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your full name"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Enter your valid email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Massage</span>
                </label>
                <textarea
                  className="textarea textarea-bordered"
                  placeholder="Write your massage"
                ></textarea>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
