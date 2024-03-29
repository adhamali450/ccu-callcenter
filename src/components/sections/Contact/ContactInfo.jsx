import Aside from "@controls/Aside";

import contactIcons from "@assets/contact";
import imgContact from "@assets/agent-contact.webp";

const ContactInfo = () => {
  const info = [
    [
      {
        icon: contactIcons.phone,
        text: "281-231-8875",
      },
      {
        icon: contactIcons.email,
        text: "info@ccucallcenter.com",
      },
    ],
    [
      {
        icon: contactIcons.facebook,
        text: "Facebook",
        url: "https://www.facebook.com/profile.php?id=61550059294344&mibextid=JRoKGi",
      },
      {
        icon: contactIcons.instagram,
        text: "Instagram",
        url: "https://www.instagram.com/ccucallcenter?igsh=MWU0MWtqZHlocXRvag==",
      },
      {
        icon: contactIcons.linkedin,
        text: "Linkedin",
        url: "",
      },
    ],
  ];

  return (
    <Aside className="text-white" backgroundImage={imgContact}>
      <div className="absolute inset-0 bg-brand-orange opacity-[65%]"></div>

      <div className="flex flex-col gap-6 lg:gap-10 h-full">
        <div className="relative grow">
          <h4 className="fl-b font-semibold mb-3 lg:mb-4">Reach out</h4>
          <ul className="flex flex-col gap-3">
            {info[0].map((i, index) => (
              <li key={index} className="flex items-center gap-2">
                <img
                  className="w-7 h-7 lg:w-8 lg:h-8"
                  src={i.icon}
                  alt={i.text}
                />
                <span className="fl-small">{i.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <p className="fl-b font-semibold mb-2 lg:mb-4">Follow us</p>
          <ul className="flex gap-2">
            {info[1].map(
              (i, index) =>
                i.url && (
                  <li
                    key={index}
                    className="flex items-center gap-2 hover:scale-[1.1] transition-transform"
                  >
                    <a href={i.url} rel="noopener noreferrer" target="_blank">
                      <img
                        className="w-7 h-7 lg:w-8 lg:h-8"
                        src={i.icon}
                        alt={i.text}
                      />
                    </a>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </Aside>
  );
};

export default ContactInfo;
