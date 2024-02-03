import imgAgent from "@assets/agent-about.webp";
import iconTeam from "@assets/icon-team.svg";
import iconQuality from "@assets/icon-quality.svg";
import iconReports from "@assets/icon-reports.svg";
import circles from "@assets/circles.svg";

const About = () => {
  const benifits = [
    {
      title: "50+ called caller",
      description:
        "We handle the whole process from pulling out the list to closing the deals for you, and so much more. ",
      img: iconTeam,
    },
    {
      title: "DAILY REPORTS",
      description:
        "Get daily summaries of calls made, contacts reached, and leads generated, including classifications.",
      img: iconReports,
    },
    {
      title: "EXPERIENCED AGENTS",
      description:
        "Our VA's are professionally trained and the best in quality!",
      img: iconQuality,
    },
  ];
  return (
    <section className="wrapper pt-[4rem]" id="about">
      <div className="container">
        <h2 className="fl-h2 text-brand-orange font-bold">Who We Are?</h2>
        <p className="max-w-[66ch] mt-2">
          We are not just another real estate call center company. We are your
          partner in growth. We work with you to understand your goals,
          challenges, and target market. We customize our services to fit your
          needs and budget. We provide you with regular reports and feedback to
          measure and improve our performance. If you are looking for a
          reliable, professional company, don&apos;t hesitate to contact us.
        </p>
      </div>

      <div
        className="wrapper relative bg-cover bg-right-top bg-no-repeat mt-[4rem]"
        style={{
          backgroundImage: `url(${imgAgent})`,
        }}
      >
        <div
          className="absolute  w-auto h-[130%] plg:w-1/2 plg:h-auto right-0 -z-30 translate-x-1/2 -translate-y-1/2 top-1/2 bg-no-repeat bg-cover bg-center aspect-square"
          style={{
            backgroundImage: `url(${circles})`,
          }}
        ></div>

        <div className="absolute inset-0 bg-brand-orange opacity-[65%] -z-1"></div>

        <div className="container relative py-8 text-white">
          <h2 className="fl-h2 text-white">Why choose us?</h2>

          <div className="flex flex-col plg:flex-row justify-between items-start gap-4">
            {
              // Benifits
              benifits.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-row plg:flex-col items-center plg:text-center gap-4 plg:gap-2 plg:max-w-[400px] mt-8"
                >
                  <img className="w-[70px]" src={item.img} alt={item.title} />
                  <div className="flex flex-col plg:items-center gap-1">
                    <h3 className="fl-h3 font-medium">{item.title}</h3>
                    <p className="fl-b drop-shadow opacity-80">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
