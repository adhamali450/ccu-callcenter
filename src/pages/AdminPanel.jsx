import { useState, useEffect, Fragment } from "react";
import { db, fetch, submit } from "@/js/firebase";
import propTypes from "prop-types";

import icons from "@assets/admin";

const RedBadge = ({ count, size = "2" }) => (
  <span
    className={`rounded-full bg-red-800 text-white px-${size} aspect-square text-sm flex items-center justify-center font-semibold`}
  >
    {count}
  </span>
);

const Avatar = ({ name }) => {
  return (
    <div className="flex items-center justify-center w-10 h-10 aspect-square rounded-full bg-seconday-color text-white font-semibold">
      {name[0].toUpperCase()}
    </div>
  );
};

const AdminPanel = () => {
  const [data, setData] = useState({});
  const [selectedName, setSelectedName] = useState("");
  const [unreadCount, setUnreadCount] = useState(0);
  useEffect(() => {
    fetch(db, "messages").then((_data) => {
      setData(_data);
      setUnreadCount(
        Object.keys(_data)
          .map((name) => _data[name].read)
          .filter((value) => !value).length
      );
    });
  }, []);

  const nameClickedHandler = (name) => {
    setSelectedName(name);
    setData((prev) => {
      if (!prev[name].read) {
        prev[name].read = true;
        submit(db, `messages/${name}`, prev[name]);
        setUnreadCount((prev) => prev - 1);
      }

      return { ...prev };
    });
  };

  return (
    <div className="container flex flex-col md:flex-row items-stretch gap-4 h-[100vh] py-4">
      <aside className="basis-[30%] bg-brand-orange py-8 rounded-2xl flex flex-col gap-4 h-full">
        <div className="flex justify-between items-center px-4">
          <h3 className="fl-h3 text-white font-semibold">Inbox</h3>
          {unreadCount > 0 && <RedBadge count={unreadCount} />}
        </div>
        <ul>
          {Object.keys(data).map((name) => (
            <li
              key={name}
              className={`cursor-pointer px-4 py-2 text-white hover:bg-[#223d4e] ${
                selectedName === name ? "bg-[#37627d] hover:bg-[#37627d]" : ""
              }`}
              onClick={() => nameClickedHandler(name)}
            >
              <div className="flex items-center gap-3">
                <Avatar name={data[name].name} />
                <div className="flex items-center justify-between w-full">
                  <div>
                    <span>{data[name].name}</span>
                    <span className="text-xs block opacity-50">
                      {data[name].time}
                    </span>
                  </div>
                  {!data[name].read && <RedBadge size="1" />}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </aside>
      <div className="flex justify-center items-center px-3 basis-[100%] bg-[#f1e0ee] rounded-2xl">
        {
          <div className="flex flex-col gap-2">
            {(selectedName &&
              ["name", "email", "phone", "message"].map((key, index) => (
                <Fragment key={index}>
                  <div className="flex items-center gap-2">
                    <img
                      className="w-10 md:w-12"
                      src={icons[key]}
                      alt="icon-key"
                    />
                    <div className="flex flex-col">
                      <small className="text-xs">{key}</small>
                      {((key == "email") | (key == "phone") && (
                        <a
                          href={`${
                            key == "email"
                              ? "melto:"
                              : "tel:" + data[selectedName][key]
                          }`}
                          style={{
                            textDecoration: data[selectedName][key]
                              ? "underline"
                              : "none",
                          }}
                        >
                          {data[selectedName][key] || "N/A"}
                        </a>
                      )) || (
                        <span className="text-lg whitespace-pre-line">
                          {data[selectedName][key] || "N/A"}
                        </span>
                      )}
                    </div>
                  </div>

                  {index < 3 && (
                    <span className="inline-block w-full h-[1px] bg-brand-orange opacity-15" />
                  )}
                </Fragment>
              ))) || (
              <h2 className="fl-h2 opacity-20">Messages from clients</h2>
            )}
          </div>
        }
      </div>
    </div>
  );
};

RedBadge.propTypes = {
  count: propTypes.number.isRequired,
  size: propTypes.string,
};

Avatar.propTypes = {
  name: propTypes.string.isRequired,
};

export default AdminPanel;
