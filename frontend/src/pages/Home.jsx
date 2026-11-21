
import React from "react";
import { Navbar } from "./../components/Navbar";
import meal from "../assets/meal.mp4";
import logo from "../assets/logo.png";
import thali from "../assets/thali.avif";
import { WaveDivider } from "./../components/WaveDivider";

export const Home = () => {
  const features = [
    {
      title: "Authentic Taste",
      description: "Traditional recipe with rich flavour",
      icon: "🍲",
    },
    {
      title: "Fresh Ingredients",
      description: "Locally sourced & high-quality",
      icon: "🥬",
    },
    {
      title: "Hygienic Kitchen",
      description: "Clean, safe & well-maintained",
      icon: "✨",
    },
    {
      title: "Family Friendly",
      description: "A perfect place for everyone",
      icon: "👨‍👩‍👧‍👦",
    },
  ];

  const specialties = [
    { name: "Maharashtrian Thali", price: 300 },
    { name: "Special Veg Thali", price: 250 },
    { name: "Traditional Thali", price: 280 },
    { name: "Royal Maharashtrian Thali", price: 350 },
  ];

  return (
    <div className="relative w-full min-h-screen bg-[#F8EBD2]">

      {/* HERO SECTION */}
      <section className="relative w-full h-[75vh] sm:h-[85vh] lg:h-screen overflow-hidden">

        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src={meal} type="video/mp4" />
        </video>

        <div className="absolute inset-0 bg-[#200014]/55"></div>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <img
            src={logo}
            alt="Restaurant Logo"
            className="w-60 h-[50vh] sm:w-56 md:w-72 lg:w-100 object-contain"
          />
        </div>

        <WaveDivider />

      </section>

     

      {/* FEATURES SECTION */}
      <section className="w-full bg-[#F8EBD2] px-4 sm:px-8 lg:px-16 py-12">

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-5
              rounded-xl hover:bg-[#f1dfbd] transition duration-300"
            >
              <span className="text-4xl mb-3">
                {feature.icon}
              </span>

              <h2 className="text-lg font-bold text-[#30051F]">
                {feature.title}
              </h2>

              <p className="text-sm text-[#30051F]/80 mt-2 max-w-[220px]">
                {feature.description}
              </p>
            </div>
          ))}

        </div>

      </section>

      {/* SPECIALTIES SECTION */}
      <section className="w-full py-16 px-4 sm:px-8 lg:px-16 bg-[#F8EBD2]">

        <div className="max-w-7xl mx-auto">

          {/* HEADING */}
          <div className="text-center mb-12">

            <h1 className="text-3xl md:text-4xl font-bold text-[#30051F]">
              Our Specialties
            </h1>

            <p className="text-gray-700 mt-3">
              Discover the authentic taste of Maharashtra
            </p>

            <div className="w-20 h-1 bg-[#E9A900] mx-auto mt-4 rounded-full"></div>

          </div>

          {/* FOOD GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {specialties.map((item, index) => (

              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden
                shadow-md hover:shadow-2xl hover:-translate-y-2
                transition-all duration-300 group"
              >

                <div className="overflow-hidden">

                  <img
                    src={thali}
                    alt={item.name}
                    className="w-full h-56 object-cover
                    group-hover:scale-110 transition-transform duration-500"
                  />

                </div>

                <div className="p-5 text-center">

                  <h2 className="text-lg font-bold text-[#30051F]">
                    {item.name}
                  </h2>

                  <p className="text-[#B77900] font-bold text-xl mt-3">
                    Rs. {item.price}
                  </p>

                  <button
                    className="mt-4 px-6 py-2 bg-[#30051F]
                    text-white rounded-full hover:bg-[#50052f]
                    transition duration-300"
                  >
                    Order Now
                  </button>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>

    </div>
    
  );
};
