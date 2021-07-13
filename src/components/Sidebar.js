import React, { useEffect } from "react";
import style from "../css/sidebar.module.css";
import "../css/sidebar.css";
import { useAppContext } from "../context/UsingContext";
import { Link } from "react-router-dom";
function Sidebar() {
  const { isSidebarOpen } = useAppContext();

  useEffect(() => {
    isSidebarOpen
      ? (document.getElementById("sidebar").style.transform = " translateX(0%)")
      : (document.getElementById("sidebar").style.transform =
          " translateX(-150%)");
  }, [isSidebarOpen]);

  const setTransparent = () => {
    const lists = [
      document.getElementById("list1"),
      document.getElementById("list2"),
      document.getElementById("list3"),
      document.getElementById("list4"),
      document.getElementById("list5"),
    ];
    lists.forEach((list) => {
      list.style.background = "transparent";
      list.style.color = "white";
    });
  };

  const { hideSideBar, listItems } = useAppContext();

  const highlight = (e) => {
    setTransparent();
    hideSideBar();
    if (e.target.id) {
      document.getElementById(e.target.id).style.background = "white";
      document.getElementById(e.target.id).style.color = "black";
    }
  };

  return (
    <div id="sidebar" className={style.sidebar}>
      <ul>
    
        {listItems.map(({ id, name, i, link }) => (
          <Link
            to={link}
            key={id}
            style={{ textDecoration: "none", color: "white" }}
          >
            <li id={`list${id}`} onClick={highlight}>
              <i className={`fas fa-${i}`}></i>
              {name}
            </li>
          </Link>
        ))}
        <Link
            to="/more"
            style={{ textDecoration: "none", color: "white" }}
          >
            <li id="list5" onClick={highlight}>
              <i className={`fas fa-info`}></i>
              More
            </li>
          </Link>
      </ul>
      <div className={style.shrinker} onClick={hideSideBar}>
        {"<"}
      </div>
    </div>
  );
}

export default Sidebar;
