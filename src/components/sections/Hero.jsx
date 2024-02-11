import Header from "@components/Header.jsx";
import Button from "@controls/Button.jsx";

import imgHome from "@assets/home-hero.webp";
import iconSign from "@assets/sign.svg";

const Hero = () => {
  return (
    <section className="wrapper mx-auto relative" id="home">
      <img
        className="absolute w-full h-full inset-0 object-cover -z-[2]"
        src={imgHome}
        alt=""
      />
      <div className="absolute w-full h-full inset-0 bg-brand-orange opacity-[65%] -z-[1] text-white"></div>

      <Header className="text-white" />

      <div className="container relative text-white py-[5rem] sm:py-[7rem] flex flex-col items-start">
        <div className="flex items-center gap-1">
          <img className="w-8" src={iconSign} alt="" />
          <p className="fl-h5 font-bold text-accent-color uppercase">
            pump up your business
          </p>
        </div>
        <h1 className="fl-h1 font-semibold mt-1 mb-3">
          We Call, We Connect,
          <br />
          We Close.
        </h1>
        <p className="fl-b drop-shadow-sm opacity-80">
          Professionally Trained and Managed Callers for Your Real Estate
          Business
        </p>
        <Button
          base="link"
          className="relative mt-5"
          variant="secondary"
          link_misc={{ href: "#contact" }}
        >
          Let&apos;s talk
        </Button>
      </div>
    </section>
  );
};

export default Hero;
