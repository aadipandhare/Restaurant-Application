import React from "react";
import thali from "../assets/thali.avif";
import logo from "../assets/logo.png";

export const About = () => {
  return (
    <div className="w-full min-h-screen bg-[#30051F]">
      <section className="w-full py-25  px-4 sm:px-8 lg:px-16">
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-2">
          <div>
            <img
              src={thali}
              alt=""
              className="w-90px h-[70vh] rounded-4xl border border-5 shadow shadow-2xl border-amber-400"
            />
          </div>

          <div>
            <img
              src={logo}
              alt=""
              className="w-80px h-[30vh] text-center flex items-center px-30 justify-center"
            />

            <p className="font-semibold text-2xl text-white py-5">
             Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel qui,
            explicabo saepe sint commodi velit nihil enim laudantium consequatur
            quibusdam sunt, ab sit quis quisquam numquam dolorem a, incidunt
            exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Deserunt nostrum incidunt commodi! Perspiciatis aperiam quidem
            eaque obcaecati inventore iure, exercitationem quod tempora
            voluptates deleniti hic amet. Voluptate nulla iure ratione.
            </p>
          </div>
        </div>
      </section>

      <articel>
        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-2 mt-15 pt-12 ">
          <p className="font-semibold text-2xl text-white py-20 my-10 px-15">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel qui,
            explicabo saepe sint commodi velit nihil enim laudantium consequatur
            quibusdam sunt, ab sit quis quisquam numquam dolorem a, incidunt
            exercitationem? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Deserunt nostrum incidunt commodi! Perspiciatis aperiam quidem
            eaque obcaecati inventore iure, exercitationem quod tempora
            voluptates deleniti hic amet. Voluptate nulla iure ratione.
          </p>
          
          <div>
            <img
              src={thali}
              alt=""
              className="w-90px h-[70vh] rounded-4xl border border-5 shadow shadow-2xl  border-amber-400 mx-20 "
            />
          </div>
        </div>
      </articel>
    </div>
  );
};
