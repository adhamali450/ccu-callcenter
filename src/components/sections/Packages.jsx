import PricingTable from "@controls/PricingTable";

import circles from "@assets/circles.svg";

const Packages = () => {
  return (
    <section className="container pt-[4rem]" id="packages">
      <div className="narrow-container relative">
        <div
          className="absolute inset-0  bg-no-repeat opacity-30 -z-10"
          style={{
            backgroundImage: `url(${circles})`,
            backgroundPosition: "center",
            backgroundSize: "75%",
          }}
        ></div>
        <div className="flex flex-col gap-1 text-center items-center justify-center py-4 border-[3px] border-brand-orange rounded-xl p-4">
          <h3 className="fl-h3 font-semibold text-brand-orange">
            Join today and get up to <span className="font-black">25%</span>{" "}
            discount on our packages
          </h3>
          <p className="fl-b text-center text-black">
            One of the toughest parts of Wholesaling is finding the right buyer
            for your deal, and we can help.
          </p>
        </div>
      </div>
      <h2 className="fl-h2 mt-[4rem]">Explore our packages</h2>
      <PricingTable className="mt-[4rem]" />
    </section>
  );
};

export default Packages;
