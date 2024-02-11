import Aside from "@controls/Aside";
import AsideLayout from "@controls/AsideLayout";

import iconTools from "@assets/tools.svg";
import imgPropstream from "@assets/propstream.png";
import imgXencall from "@assets/xencall.png";
import imgAsana from "@assets/asana.png";
import imgResimpli from "@assets/resimpli.png";
import imgPodio from "@assets/podio.png";

const Tools = () => {
  const categories = [
    {
      title: "Propstream",
      description:
        "Utilize PropStream, the top real estate database, for deal discovery with essential data and tools, allowing for immediate lead generation by your Professional Caller through targeted lists.",
      apps: [imgPropstream],
    },
    {
      title: "Xencall",
      description:
        "A versatile dialer with various sales call workflows, enabling automatic dialing of up to 100 calls per hour for nurturing warm leads.",
      apps: [imgXencall],
    },
    {
      title: "Manage your team's work, projects, & tasks online",
      description:
        "Manage wholesale leads by organizing daily entries and following up to close deals.",
      apps: [imgResimpli, imgPodio, imgAsana],
    },
  ];

  return (
    <AsideLayout className="container pt-[4rem]" id="tools">
      <Aside className="flex flex-col gap-1 justify-end border-[#f1e0ee] border-[3px] lg:bg-[#f1e0ee] lg:border-none">
        <div className="flex items-center gap-1">
          <img className="w-8" src={iconTools} alt="" />
          <p className="fl-b text-accent-color font-semibold">Our tools</p>
        </div>
        <h2 className="fl-h2">Effortless leads generation</h2>
      </Aside>

      <ul className="flex flex-col gap-8 py-0 lg:py-8">
        {categories.map((cat, index) => (
          <li key={index}>
            <div className="flex flex-col gap-1">
              <p className="fl-b font-semibold">{cat.title}</p>
              <p className="fl-b max-w-[66ch]">{cat.description}</p>
              <div className="flex items-center gap-3 mt-1">
                {cat.apps.map((app, i) => (
                  <img className="h-[30px]" key={i} src={app} alt={cat.title} />
                ))}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </AsideLayout>
  );
};

export default Tools;
