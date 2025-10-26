import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import TitleHeader from "../components/TitleHeader";
import GradientSpheres from "../components/GradientSpheres";
import { bentoSocialLinks } from "../constants";
import { Alien } from "../components/models/Alien";
import { PointingRight } from "../components/models/PointingRight";

const About = () => {
  return (
    <section id="about" className="flex-center relative md:p-0 px-5">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />

      <div className="container w-full h-full md:my-40 my-20 relative z-10">
        <TitleHeader
          title="About Us"
          number="01"
          text="Premium Web Design & Development"
        />
        <div className="md:mt-20 mt-10">
          <div className="grid grid-cols-12 md:grid-rows-12 gap-5">
            <div className="md:col-span-7 col-span-12 row-span-5">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="mt-5">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    About ALDN
                  </h1>
                  <p className="md:text-2xl mt-2">
                    We are a premium South Aftican-based web design and
                    development agency. Our focus is on creating visually stunning,
                    conversion-driven websites and digital experiences that
                    stand out. We bring creativity and technical expertise to every
                    project, across multiple industries.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-5 col-span-12 row-span-5">
                <div className="rounded-2xl w-full md:h-full h-60 hover:cursor-grab
                bg-gradient-to-tr from-[#598eff] via-[#3b9ab8] to-[#1c34ff]">
                <div className="w-full h-full">
                  <Canvas>
                    <ambientLight />
                    <OrbitControls enableZoom={false} />
                    <PointingRight
                      scale={4}
                      position={[0, -2.5, 0]}
                      rotation={[0, -0.5, 0]}
                    />
                  </Canvas>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    Web Design & Dev
                  </h1>
                  <p className="md:text-2xl max-w-96">
                    Elegantly designed, conversion-focused websites built
                    for scalability and easy updates.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-6 col-span-12 row-span-3">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col h-full justify-center gap-2">
                  <h1 className="gradient-title md:text-3xl text-2xl font-medium">
                    UX/UI Design
                  </h1>
                  <p className="md:text-2xl max-w-96">
                    Seamless web and mobile experiences that delight and
                    engage your users.
                  </p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 col-span-12 row-span-4">
              <div className="bg-black-300 rounded-2xl p-7 w-full h-full">
                <div className="flex flex-col justify-between h-full">
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold">
                    STAND OUT!
                  </h1>
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold">
                    BE CREATIVE!
                  </h1>
                  <h1 className="gradient-title md:text-5xl text-3xl font-bold">
                    BUILD PREMIUM!
                  </h1>
                </div>
              </div>
            </div>
            {bentoSocialLinks.map((item, index) => (
              <div key={index} className="md:col-span-4 col-span-12 row-span-2">
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer"
                >
                  <div className="bg-black-300 rounded-2xl p-7 w-full h-full group cursor-pointer">
                    <div className="flex justify-between items-center h-full">
                      <div className="flex items-center md:gap-5">
                        <img src={item.icon} alt={item.icon} />
                        <h1 className="gradient-title md:text-3xl text-xl md:m-0 ms-5 font-medium">
                          {item.name}
                        </h1>
                      </div>
                      <div className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform">
                        <img
                          src={import.meta.env.BASE_URL + "images/arrowupright.svg"}
                          alt="arrow-up"
                          className="md:scale-100 scale-50"
                        />
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;