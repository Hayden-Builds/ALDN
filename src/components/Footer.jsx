import { footerIconsList } from "../constants";

const Footer = () => {
  return (
    <div className="w-full flex-center flex-col md:gap-3 gap-3 bg-black-300 py-5">
      <div>
        <img
          src={import.meta.env.BASE_URL + "images/brand-light.png"}
          alt="logo"
          className="w-12 h-12 object-cover object-center"
        />
      </div>
      <p className="font-regular md:text-lg text-sm">
        2025 © All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
