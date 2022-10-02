import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="p6-8 lg:mt-0 md:mt-0 mt-32">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <div>
          <p className="text-xl mt-20 text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates,
            illum? Perspiciatis, quia quibusdam! Est, eum vel debitis maxime
            sunt, quidem, nihil dignissimos nesciunt asperiores eligendi sequi
            deleniti perspiciatis numquam corporis eius? Quisquam, perferendis?
            Cumque assumenda nam provident delectus odio. Illum assumenda error
            corrupti eligendi ab suscipit excepturi doloribus vel maxime.
          </p>

          <br />

          <p className="text-xl text-justify">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In,
            dignissimos pariatur. Incidunt reiciendis dolorum voluptate
            asperiores fugit! Quisquam deserunt, magnam quas nostrum culpa
            debitis repudiandae. Facere nobis consequatur modi quis repellendus,
            perferendis quas possimus voluptatum? Rem, rerum tempore? Recusandae
            quae iste ab quia architecto nemo itaque aliquam rerum eaque minus.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
