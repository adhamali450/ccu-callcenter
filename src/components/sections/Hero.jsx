import Header from "@components/Header.jsx";
import imgHome from "@assets/home-hero.webp";
import Button from "@controls/Button.jsx";

const Hero = () => {
  return (
    <section className="wrapper mx-auto relative" id="home">
      <img
        className="absolute w-full h-full inset-0 object-cover -z-[2]"
        src={imgHome}
        alt=""
      />
      <div className="absolute w-full h-full inset-0 bg-brand-orange opacity-[55%] -z-[1] text-white"></div>

      <Header className="text-white" />

      <div className="container relative text-white py-[5rem] sm:py-[7rem] flex flex-col items-start">
        <h5 className="fl-h5 font-semibold ">Bump up your business</h5>
        <h1 className="fl-h1 font-semibold mt-1 mb-3">
          Generate the
          <br />
          <span className="font-black">HOTTEST</span> leads
        </h1>
        <p className="fl-b font-semibold opacity-80">
          Professionally Trained and Managed cold callers for your real estate
          business
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
