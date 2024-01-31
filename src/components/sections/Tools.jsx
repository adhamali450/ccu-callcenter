import imgPropstream from "@assets/propstream.png";
import imgXencall from "@assets/xencall.png";
import imgAsana from "@assets/asana.png";

const Tools = () => {
  const tools = [
    {
      name: "Propstream",
      description:
        "Find potential deals by utilizing the most powerful real estate database on the market.PropStream puts the power of data & investor tools you need to pull targeted lists together for your Professional Caller to start generating leads from day one!",
      img: imgPropstream,
    },
    {
      name: "Xencall",
      description:
        "Simple yet powerful dialer that includes numerous workflows for different sales call tasks, such as nurturing warm leads, while allowing your Professional Caller to auto-dial up to one-hundred calls per hour. ",
      img: imgXencall,
    },
    {
      name: "Asana",
      description:
        "Manage the wholesale lead process by organizing and tracking your deals inputted by your Quality Manager on the daily basis. After your leads are in the system, all you would have to do is follow up and take your deals to the finish line.",
      img: imgAsana,
    },
  ];
  return (
    <section className="container pt-[4rem]" id="tools">
      <h2 className="fl-h2">Effortless leads generation</h2>

      <ul className="flex flex-col gap-8 mt-8">
        {tools.map((tool, index) => (
          <li key={index}>
            <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8 text-center sm:text-left">
              <img
                className="w-[120px] lg:w-[150px]"
                src={tool.img}
                alt={`${tool.name} logo`}
              />
              <p className="fl-b max-w-[66ch]">{tool.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tools;
