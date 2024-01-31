import packageFeatures from "@/assets/package-features";
import PropTypes from "prop-types";

const PricingTable = ({ className }) => {
  const features = [
    ["4 hours shift\\day", packageFeatures["clock"]],
    ["8 hours shift\\day", packageFeatures["clock"]],
    ["CSM 4 hours shift\\day", packageFeatures["manager"]],
    ["CSM 8 hours shift\\day", packageFeatures["manager"]],
    ["Quality assurance", packageFeatures["quality"]],
    ["Call recordings", packageFeatures["record"]],
    ["20 leads/month", packageFeatures["growth"]],
    ["40-60 leads/month guranteed (worm/hot)", packageFeatures["growth"]],
    ["Uploading leads to CRM", packageFeatures["upload"]],
    ["Standard support center", packageFeatures["support"]],
    ["VIP support center", packageFeatures["support"]],
    ["Weekly follow-up meetings", packageFeatures["meeting"]],
    ["Daily reports (performance, lead class)", packageFeatures["report"]],
    ["Bi-weekly training sessions", packageFeatures["training"]],
    ["Lead managers available with a discount", packageFeatures["discount"]],
    ["Closers available with a special deal", packageFeatures["deal"]],
  ];

  const packages = [
    {
      name: "silver",
      include: [0, 2, 4, 5, 6, 8, 9],
      execlude: [1, 3, 7, 10],
    },
    {
      name: "gold",
      include: [1, 3, 4, 5, 7, 8, 10],
      execlude: [0, 2, 6, 9],
    },
    {
      name: "elite",
      include: [1, 3, 4, 5, 7, 8, 10, 11, 12, 13, 14, 15],
      execlude: [0, 2, 6, 9],
    },
  ];

  return (
    <div
      className={`${className} flex flex-col lg:flex-row justify-between gap-5 plg:gap-8`}
    >
      {packages.map((p, i) => (
        <Package
          key={i}
          className="px-5 plg:px-8 py-8 rounded-2xl"
          features={features}
          name={p.name}
          include={p.include}
          execlude={p.execlude}
          popular={i === 1}
        />
      ))}
    </div>
  );
};

const Package = ({ className, features, name, include, execlude, popular }) => {
  return (
    <div
      className={`${className} flex flex-col items-center border-2 border-gray-400 basis-[100%] bg-gray-100`}
      style={{
        transform: popular ? "scale(1.02)" : "scale(0.95)",
        borderColor: popular ? "#E64E36" : "rgb(156 163 175)",
        backgroundColor: popular ? "#ffe8e5" : "rgb(243 244 246)",
      }}
    >
      {popular && (
        <span className="bg-[#ffccc4] text-brand-orange font-medium px-3 py-[2px] rounded-xl mb-3">
          Most popular
        </span>
      )}
      <h3 className="fl-h3 uppercase font-extrabold text-centertext-gray-700">
        {name}
      </h3>
      <hr className="mb-4 bg-black my-8" />
      <ul className="grid grid-cols-1 sm:grid-cols-[auto_auto] justify-center lg:flex lg:flex-col gap-4 lg:gap-3">
        {include.map((i) => (
          <li key={i} className="flex items-center gap-2">
            <img src={features[i][1]} alt="" />
            <span>{features[i][0]}</span>
          </li>
        ))}

        {features.map(
          (feature, i) =>
            !(execlude.includes(i) | include.includes(i)) && (
              <li
                key={i}
                className="flex items-center gap-2 opacity-50 grayscale"
              >
                <img src={feature[1]} alt="" />
                <strike>{feature[0]}</strike>
              </li>
            )
        )}
      </ul>
    </div>
  );
};

export default PricingTable;

PricingTable.propTypes = {
  className: PropTypes.string,
};

Package.propTypes = {
  className: PropTypes.string,
  features: PropTypes.array,
  name: PropTypes.string,
  include: PropTypes.array,
  execlude: PropTypes.array,
  popular: PropTypes.bool,
};
