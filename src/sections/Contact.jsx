import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/ContactExperience";
import ContactForm from "../components/ContactForm";
import GradientSpheres from "../components/GradientSpheres";

const Contact = () => {
  return (
    <section id="contact" className="flex-center md:p-0 px-5 relative">
      <GradientSpheres
        sphere1Class="about-gradient-sphere about-sphere-1"
        sphere2Class="about-gradient-sphere about-sphere-2"
      />

      <div className="w-full h-full container md:my-40 my-20">
        <TitleHeader
          title="GET IN TOUCH"
          number="02"
          text="Let’s build the next generation of web experiences together"
        />
        <div className="mt-20">
          <div className="grid grid-cols-12">
            <div className="md:col-span-5 col-span-12 md:order-none order-1 relative z-10">
              <ContactForm />
            </div>
            <div className="md:col-span-7 col-span-12">
              <div className=" w-full md:h-full h-96 md:absolute top-0 md:left-96 left-0 md:m-0 -mt-32">
                <ContactExperience />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;