import logo from "@assets/logo.svg";
import imgHome from "@assets/home-footer.webp";

const Footer = () => {
  return (
    <section
      className="wrapper relative mt-[4rem] bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${imgHome})`,
      }}
    >
      <div className="absolute inset-0 bg-brand-orange opacity-65"></div>

      <div className="container relative pt-[4rem] pb-[2rem] text-white">
        <div className="flex flex-col plg:flex-row gap-6 justify-between items-center">
          <div className="flex items-center gap-2">
            <img className="w-10" src={logo} alt="Called callers united logo" />
            <h3 className="fl-h3 uppercase font-black">Cold Callers United</h3>
          </div>

          <ul className="flex items-center gap-5">
            {["Home", "About", "Tools", "Packages", "Contact"].map(
              (item, index) => (
                <li key={index} className="fl-b font-medium hover:underline">
                  <a href={`#${item.toLowerCase()}`}>{item}</a>
                </li>
              )
            )}
          </ul>
        </div>
        <hr className="my-8 opacity-60 bg-white h-[1.5px]" />
        <p className="fl-b opacity-[85%] text-center drop-shadow">
          © 2024 Cold Callers United™. All Rights Reserved.
        </p>
      </div>
    </section>
  );
};

export default Footer;
